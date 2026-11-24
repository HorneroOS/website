#!/usr/bin/env node
/**
 * One-shot codemod used for the real-i18n migration (kept for reference
 * and for extracting any future stragglers).
 *
 * Converts `isEs ? <ES literal> : <EN literal>` ternaries in an .astro
 * component into a typed per-component catalog under
 * src/i18n/messages/<slug>.ts, and rewrites the call sites to
 * `m.key` / `m.key(args...)` where `const m = messages[locale]`.
 *
 * Handled operand kinds: 'string', "string", `template` (interpolations
 * become function parameters, both locales must interpolate the same
 * expressions), and balanced {object} / [array] literals (moved
 * verbatim). Anything else (identifier picks, nested ternaries,
 * occurrences inside client <script> blocks) is left untouched and
 * reported for a manual pass.
 *
 * Usage: node scripts/i18n-codemod.mjs <file.astro> [<file.astro>...]
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';

const root = process.cwd();
const messagesDir = join(root, 'src/i18n/messages');

// ---------- scanning helpers (string/template aware) ----------
function scanLiteral(s, i) {
  const q = s[i];
  if (q !== "'" && q !== '"' && q !== '`') return null;
  let j = i + 1;
  const exprs = [];
  while (j < s.length) {
    if (s[j] === '\\') {
      j += 2;
      continue;
    }
    if (q === '`' && s[j] === '$' && s[j + 1] === '{') {
      const start = j;
      let depth = 1;
      j += 2;
      const innerStart = j;
      while (j < s.length && depth > 0) {
        if (s[j] === '\\') {
          j += 2;
          continue;
        }
        const inner = s[j] === "'" || s[j] === '"' || s[j] === '`' ? scanLiteral(s, j) : null;
        if (inner) {
          j = inner.end;
          continue;
        }
        if (s[j] === '{') depth++;
        else if (s[j] === '}') {
          depth--;
          if (depth === 0) break;
        }
        j++;
      }
      exprs.push(s.slice(innerStart, j));
      j++; // closing }
      continue;
    }
    if (s[j] === q) return { kind: q === '`' ? 'tpl' : 'str', end: j + 1, raw: s.slice(i, j + 1), exprs };
    if (q !== '`' && s[j] === '\n') return null;
    j++;
  }
  return null;
}

function scanBalanced(s, i) {
  const open = s[i];
  if (open !== '{' && open !== '[') return null;
  const close = open === '{' ? '}' : ']';
  let depth = 0,
    j = i;
  while (j < s.length) {
    const c = s[j];
    if (c === "'" || c === '"' || c === '`') {
      const lit = scanLiteral(s, j);
      if (!lit) return null;
      j = lit.end;
      continue;
    }
    if (c === '/' && s[j + 1] === '/') {
      while (j < s.length && s[j] !== '\n') j++;
      continue;
    }
    if (c === '/' && s[j + 1] === '*') {
      const e = s.indexOf('*/', j);
      if (e < 0) return null;
      j = e + 2;
      continue;
    }
    if (c === open) depth++;
    else if (c === close) {
      depth--;
      if (depth === 0) return { kind: open === '{' ? 'obj' : 'arr', end: j + 1, raw: s.slice(i, j + 1), exprs: [] };
    } else if ((c === '}' || c === ']') && depth === 0) return null;
    j++;
  }
  return null;
}

function scanOperand(s, i) {
  while (s[i] === ' ' || s[i] === '\t' || s[i] === '\n' || s[i] === '\r') i++;
  return scanLiteral(s, i) ?? scanBalanced(s, i);
}

function skipWs(s, i) {
  while (i < s.length && /\s/.test(s[i])) i++;
  return i;
}

function scriptRegions(s) {
  const regions = [];
  const re = /<script\b[^>]*>/g;
  let m;
  while ((m = re.exec(s))) {
    const end = s.indexOf('</script>', m.index);
    if (end > 0) regions.push([m.index, end + 9]);
  }
  return regions;
}

// ---------- literal value decoding ----------
function decodeStr(raw) {
  // raw includes quotes; supports \' \" \\ \n \t and \` \${
  let out = '';
  for (let i = 1; i < raw.length - 1; i++) {
    if (raw[i] === '\\' && i + 1 < raw.length - 1) {
      const n = raw[++i];
      out += n === 'n' ? '\n' : n === 't' ? '\t' : n === 'r' ? '\r' : n;
    } else out += raw[i];
  }
  return out;
}
function encodeStr(v) {
  return (
    "'" +
    v.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t') +
    "'"
  );
}

// Convert a template literal into a function body with v0..vN params.
function tplToFn(raw, exprs) {
  let body = raw,
    k = 0;
  // replace each ${...} (in written order) with ${vK}
  let i = 0,
    out = '';
  while (i < body.length) {
    if (body[i] === '\\') {
      out += body.slice(i, i + 2);
      i += 2;
      continue;
    }
    if (body[i] === '$' && body[i + 1] === '{') {
      const lit = scanLiteral('`' + body.slice(i), 0); // not used; do manual walk below
      // manual balanced walk
      let depth = 1,
        j = i + 2;
      while (j < body.length && depth > 0) {
        if (body[j] === '\\') {
          j += 2;
          continue;
        }
        const inner = body[j] === "'" || body[j] === '"' || body[j] === '`' ? scanLiteral(body, j) : null;
        if (inner) {
          j = inner.end;
          continue;
        }
        if (body[j] === '{') depth++;
        else if (body[j] === '}') {
          depth--;
          if (depth === 0) break;
        }
        j++;
      }
      out += '${v' + k++ + '}';
      i = j + 1;
      continue;
    }
    out += body[i++];
  }
  const params = exprs.map((_, n) => `v${n}: string | number | null | undefined`).join(', ');
  return `(${params}): string => ${out}`;
}

function slugify(text, fallback) {
  const clean = text
    .replace(/\$\{[^}]*\}/g, ' ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 5);
  if (!clean.length) return fallback;
  let key = clean.map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1))).join('');
  if (/^[0-9]/.test(key)) key = 'k' + key;
  return key.slice(0, 48);
}

function slugOfFile(file) {
  let base = basename(file)
    .replace(/\.astro$/, '')
    .replace(/Page$/, '');
  return base.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

// ---------- per-file transform ----------
function transform(file) {
  const src = readFileSync(file, 'utf8');
  const regions = scriptRegions(src);
  const inScript = (pos) => regions.some(([a, b]) => pos >= a && pos < b);

  const hits = [];
  const re = /\bisEs\s*\?/g;
  let m;
  while ((m = re.exec(src))) {
    const start = m.index;
    if (inScript(start)) {
      hits.push({ start, manual: 'in-script' });
      continue;
    }
    const a = scanOperand(src, start + m[0].length);
    if (!a) {
      hits.push({ start, manual: 'operand-a' });
      continue;
    }
    let j = skipWs(src, a.end);
    if (src[j] !== ':') {
      hits.push({ start, manual: 'no-colon' });
      continue;
    }
    const b = scanOperand(src, j + 1);
    if (!b) {
      hits.push({ start, manual: 'operand-b' });
      continue;
    }
    const kindOk =
      (a.kind === 'str' && b.kind === 'str') ||
      (a.kind === 'tpl' && b.kind === 'tpl') ||
      (a.kind === 'obj' && b.kind === 'obj') ||
      (a.kind === 'arr' && b.kind === 'arr');
    if (!kindOk) {
      hits.push({ start, manual: `kind-${a.kind}-${b.kind}` });
      continue;
    }
    if (a.kind === 'tpl') {
      const same = a.exprs.length === b.exprs.length && a.exprs.every((e, i) => e.trim() === b.exprs[i].trim());
      if (!same) {
        hits.push({ start, manual: 'tpl-exprs-differ' });
        continue;
      }
    }
    hits.push({ start, end: b.end, a, b });
    re.lastIndex = b.end;
  }

  const auto = hits.filter((h) => !h.manual);
  const manual = hits.filter((h) => h.manual);
  if (!auto.length) return { file, converted: 0, manual };

  // keys
  const used = new Map(); // dedupe identical pairs
  const taken = new Set();
  const entries = [];
  for (const h of auto) {
    const dedupeKey = h.a.raw + '' + h.b.raw;
    if (used.has(dedupeKey)) {
      h.key = used.get(dedupeKey);
      continue;
    }
    // try `const NAME ... = isEs ?` naming for structured values
    let key = null;
    const before = src.slice(Math.max(0, h.start - 120), h.start);
    const nameMatch = before.match(/const\s+([A-Za-z_$][\w$]*)\s*(?::[^=]+)?=\s*$/);
    if ((h.a.kind === 'obj' || h.a.kind === 'arr') && nameMatch) key = nameMatch[1];
    if (!key) {
      const anchor = h.a.kind === 'str' ? decodeStr(h.a.raw) : h.a.raw;
      key = slugify(anchor, 'text');
    }
    let unique = key,
      n = 2;
    while (taken.has(unique)) unique = key + n++;
    taken.add(unique);
    h.key = unique;
    used.set(dedupeKey, unique);
    entries.push(h);
  }

  const renderEntry = (h, side) => {
    const op = side === 'es' ? h.a : h.b;
    if (op.kind === 'str') return encodeStr(decodeStr(op.raw));
    if (op.kind === 'tpl') return op.exprs.length ? tplToFn(op.raw, op.exprs) : encodeStr(decodeStr(op.raw));
    return op.raw; // obj/arr verbatim
  };

  const slug = slugOfFile(file);
  const esBody = entries.map((h) => `  ${h.key}: ${renderEntry(h, 'es')},`).join('\n');
  const enBody = entries.map((h) => `  ${h.key}: ${renderEntry(h, 'en')},`).join('\n');
  const catalog = `// Message catalog for ${basename(file)} — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
${esBody}
};

export type Messages = typeof es;

const en: Messages = {
${enBody}
};

export const messages: Record<Locale, Messages> = { es, en };
`;
  mkdirSync(messagesDir, { recursive: true });
  writeFileSync(join(messagesDir, `${slug}.ts`), catalog);

  // rewrite call sites, end -> start
  let out = src;
  for (const h of [...auto].sort((x, y) => y.start - x.start)) {
    const call = h.a.kind === 'tpl' && h.a.exprs.length ? `m.${h.key}(${h.a.exprs.join(', ')})` : `m.${h.key}`;
    out = out.slice(0, h.start) + call + out.slice(h.end);
  }

  // frontmatter wiring
  const rel = file.includes('/components/pages/') ? '../../i18n/messages/' : '../i18n/messages/';
  const importLine = `import { messages } from '${rel}${slug}';`;
  if (out.includes("const isEs = locale === 'es';")) {
    const keepIsEs = /\bisEs\b/.test(out.replace("const isEs = locale === 'es';", ''));
    const wiring = keepIsEs
      ? `const isEs = locale === 'es';\nconst m = messages[locale];`
      : `const m = messages[locale];`;
    out = out.replace("const isEs = locale === 'es';", wiring);
    // insert import after the last frontmatter import line
    const fmEnd = out.indexOf('\n---', 3);
    const fm = out.slice(0, fmEnd);
    const lastImport = fm.lastIndexOf('\nimport ');
    const lineEnd = fm.indexOf('\n', lastImport + 1);
    out = out.slice(0, lineEnd + 1) + importLine + '\n' + out.slice(lineEnd + 1);
  } else {
    console.error(`WARN ${file}: no isEs declaration found; import not wired`);
  }

  writeFileSync(file, out);
  return { file, converted: auto.length, manual, slug };
}

let totalConverted = 0;
for (const f of process.argv.slice(2)) {
  const r = transform(f);
  totalConverted += r.converted;
  console.log(
    `${basename(f)}: converted=${r.converted} manual=${r.manual.length}` +
      (r.manual.length ? ' [' + r.manual.map((x) => x.manual).join(',') + ']' : ''),
  );
}
console.log(`TOTAL converted=${totalConverted}`);
