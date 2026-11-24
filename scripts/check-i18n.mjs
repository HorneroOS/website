#!/usr/bin/env node
/**
 * i18n parity gate (node scripts/check-i18n.mjs).
 *
 * Copy lives in typed catalogs under src/i18n/messages/*.ts: Spanish is
 * the source shape and `en: Messages` makes key parity a type error, so
 * this gate covers what types cannot:
 *  - every catalog's es/en top-level key sets match (belt & braces for
 *    files edited outside `astro check`),
 *  - chrome strings (messages/ui.ts) do not carry identical es/en
 *    values (the classic untranslated-copy smell),
 *  - the old `isEs ? '…' : '…'` boolean-ternary pattern never returns:
 *    the identifier `isEs` is banned under src/ — copy goes in catalogs
 *    keyed by Locale (docs/I18N.md),
 *  - src/data/story.ts localized fields carry both es and en,
 *  - capture slots carry ES and EN title/description/alt.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const read = (rel) => readFileSync(join(root, rel), 'utf8');

// --- catalog key parity (src/i18n/messages/*.ts) ---
function localeBlock(source, pattern) {
  const m = source.match(pattern);
  return m ? m[1] : null;
}
function topKeys(block) {
  if (!block) return null;
  // Top-level keys share the indent of the first key line.
  const first = block.match(/^(\s+)\w+:/m);
  if (!first) return new Set();
  const indent = first[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new Set([...block.matchAll(new RegExp(`^${indent}(\\w+):`, 'gm'))].map((m) => m[1]));
}

const messagesDir = join(root, 'src/i18n/messages');
const catalogFiles = readdirSync(messagesDir)
  .filter((f) => f.endsWith('.ts'))
  .sort();
if (!catalogFiles.length) failures.push('src/i18n/messages/: no catalogs found');
const identicalChecks = [];
for (const file of catalogFiles) {
  const rel = `src/i18n/messages/${file}`;
  const source = read(rel);
  const esBlock = localeBlock(source, /const es = \{([\s\S]*?)\n\s{0,2}\};/);
  const enBlock = localeBlock(source, /const en(?::[^=]+)? = \{([\s\S]*?)\n\s{0,2}\};/);
  const esKeys = topKeys(esBlock);
  const enKeys = topKeys(enBlock);
  if (!esKeys || !enKeys) {
    failures.push(`${rel}: could not locate es/en catalog blocks`);
    continue;
  }
  for (const k of esKeys) if (!enKeys.has(k)) failures.push(`${rel}: key '${k}' missing in en`);
  for (const k of enKeys) if (!esKeys.has(k)) failures.push(`${rel}: key '${k}' missing in es`);
  if (file === 'ui.ts') identicalChecks.push([rel, esBlock, enBlock]);
}

// Identical es/en plain-string values are only acceptable for product names.
const valueOf = (block, key) => block.match(new RegExp(`^\\s+${key}:\\s*'([^']*)'`, 'm'))?.[1];
const ALLOW_IDENTICAL = new Set([
  'HorneroOS',
  'Studio',
  'Gaming',
  'Showroom',
  'Layouts',
  'Greeter',
  'Companion',
  'Discord',
  'GitHub',
  'Feedback',
  'Bugs',
]);
for (const [rel, esBlock, enBlock] of identicalChecks) {
  for (const k of topKeys(esBlock) ?? []) {
    const esv = valueOf(esBlock, k);
    const env = valueOf(enBlock, k);
    if (esv && env && esv === env && esv.length > 2 && !ALLOW_IDENTICAL.has(esv) && /[A-Za-z]{3,}/.test(esv)) {
      failures.push(`${rel}: key '${k}' has identical es/en value '${esv}'`);
    }
  }
}

// --- isEs ban under src/ (copy belongs in catalogs) ---
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(astro|ts|tsx|js|mjs)$/.test(entry)) {
      const text = readFileSync(path, 'utf8');
      if (/\bisEs\b/.test(text)) {
        failures.push(`${path.slice(root.length + 1)}: uses 'isEs' — move copy into src/i18n/messages/ (docs/I18N.md)`);
      }
    }
  }
}
walk(join(root, 'src'));

// --- story.ts localized fields ---
const story = read('src/data/story.ts');
for (const m of story.matchAll(/(title|summary|label):\s*(?:\{\s*es:\s*'[^']*',\s*en:\s*'[^']*'\s*\}|'[^']*')/g)) {
  if (!m[0].includes('es:') || !m[0].includes('en:')) {
    failures.push(`src/data/story.ts: unlocalized ${m[1]}: ${m[0].slice(0, 70)}`);
  }
}

// --- capture slots: every slot carries ES and EN copy ---
const slotData = JSON.parse(read('src/data/capture-slots.json'));
for (const slot of slotData.slots) {
  for (const field of ['title', 'description', 'alt']) {
    for (const lang of ['es', 'en']) {
      if (typeof slot[field]?.[lang] !== 'string' || slot[field][lang].trim().length < 4) {
        failures.push(`src/data/capture-slots.json: ${slot.id} ${field}.${lang} is missing`);
      }
    }
    if (field !== 'title' && slot[field]?.es && slot[field]?.es === slot[field]?.en) {
      failures.push(`src/data/capture-slots.json: ${slot.id} ${field} has identical es/en text`);
    }
  }
}
for (const session of slotData.sessions) {
  for (const lang of ['es', 'en']) {
    if (!session.title?.[lang])
      failures.push(`src/data/capture-slots.json: session ${session.id} title.${lang} is missing`);
  }
}

if (failures.length) {
  console.error('check-i18n: FAILED');
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`check-i18n: OK (${catalogFiles.length} catalogs at parity, no isEs, story + capture-slot copy parity)`);
