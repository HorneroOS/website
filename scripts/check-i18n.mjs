#!/usr/bin/env node
/**
 * i18n parity gate (node scripts/check-i18n.mjs).
 *
 * Fails when:
 *  - src/i18n/ui.ts es/en key sets diverge.
 *  - src/data/story.ts has a title/summary/label without both es and en.
 *  - a capture slot (src/data/capture-slots.json) lacks ES or EN title/description/alt.
 */
import { readFileSync } from 'node:fs';
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
    if (!session.title?.[lang]) failures.push(`src/data/capture-slots.json: session ${session.id} title.${lang} is missing`);
  }
}

if (failures.length) {
  console.error('check-i18n: FAILED');
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log('check-i18n: OK (ui keys, story, capture-slot copy parity)');
