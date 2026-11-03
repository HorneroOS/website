#!/usr/bin/env node
/**
 * i18n parity gate (node scripts/check-i18n.mjs).
 *
 * Fails when:
 *  - src/i18n/ui.ts es/en key sets diverge.
 *  - src/data/story.ts has a title/summary/label without both es and en.
 *  - a src/content/showroom/*.md frontmatter title/alt lacks es or en.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const read = (rel) => readFileSync(join(root, rel), 'utf8');

// --- ui.ts key parity ---
const ui = read('src/i18n/ui.ts');
const keysOf = (block) => [...block.matchAll(/^\s+(\w+):/gm)].map((m) => m[1]);
const esBlock = ui.split(/^\s*es:\s*\{/m)[1]?.split(/^\s*en:\s*\{/m)[0] ?? '';
const enBlock = ui.split(/^\s*en:\s*\{/m)[1] ?? '';
const esKeys = new Set(keysOf(esBlock));
const enKeys = new Set(keysOf(enBlock));
for (const k of esKeys) if (!enKeys.has(k)) failures.push(`src/i18n/ui.ts: key '${k}' missing in en`);
// Identical values across locales are only acceptable for product names.
const valueOf = (block, key) => block.match(new RegExp(`^\\s+${key}:\\s*'([^']*)'`, 'm'))?.[1];
const ALLOW_IDENTICAL = new Set(['HorneroOS', 'Studio', 'Gaming', 'Showroom', 'Layouts', 'Greeter', 'Companion', 'Discord', 'GitHub', 'Feedback', 'Bugs']);
for (const k of esKeys) {
  const esv = valueOf(esBlock, k);
  const env = valueOf(enBlock, k);
  if (esv && env && esv === env && esv.length > 2 && !ALLOW_IDENTICAL.has(esv) && /[A-Za-z]{3,}/.test(esv)) {
    failures.push(`src/i18n/ui.ts: key '${k}' has identical es/en value '${esv}'`);
  }
}
for (const k of enKeys) if (!esKeys.has(k)) failures.push(`src/i18n/ui.ts: key '${k}' missing in es`);

// --- story.ts localized fields ---
const story = read('src/data/story.ts');
for (const m of story.matchAll(/(title|summary|label):\s*(?:\{\s*es:\s*'[^']*',\s*en:\s*'[^']*'\s*\}|'[^']*')/g)) {
  if (!m[0].includes('es:') || !m[0].includes('en:')) {
    failures.push(`src/data/story.ts: unlocalized ${m[1]}: ${m[0].slice(0, 70)}`);
  }
}

// --- showroom frontmatter ---
for (const file of readdirSync(join(root, 'src/content/showroom')).filter((f) => f.endsWith('.md'))) {
  const text = read(`src/content/showroom/${file}`);
  for (const field of ['title', 'alt', 'source', 'context']) {
    const m = text.match(new RegExp(`^\\s*${field}:\\n\\s+es:[^\\n]*\\n\\s+en:`, 'm'));
    const present = new RegExp(`^\\s*${field}:`, 'm').test(text);
    if (field === 'context' && !present) continue; // provenance context is optional
    if (!m) {
      failures.push(`src/content/showroom/${file}: ${field} lacks es/en`);
    }
  }
}

if (failures.length) {
  console.error('check-i18n: FAILED');
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log('check-i18n: OK (ui keys, story, showroom parity)');
