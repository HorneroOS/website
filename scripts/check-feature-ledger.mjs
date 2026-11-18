#!/usr/bin/env node
/**
 * Feature ledger gate (node scripts/check-feature-ledger.mjs).
 *
 * Fails when src/data/features.json:
 *  - repeats an id, or lacks es/en title or summary, or lacks evidence links;
 *  - marks a feature 'shipping' without a releasedIn that names a RELEASED
 *    (tagged, or recorded as published) release in
 *    src/data/product/releases.json (unreleased work must not be presented
 *    as released);
 *  - gives a non-shipping feature a releasedIn.
 * Warns (never fails) when reviewedAgainst is behind the newest released
 * release: the next release PR must re-check every entry.
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => JSON.parse(readFileSync(join(root, rel), 'utf8'));
const ledger = read('src/data/features.json');
const releases = read('src/data/product/releases.json');
const isReleased = (r) => r.status === 'tagged' || r.status === 'published';
const released = new Set(releases.filter(isReleased).map((r) => r.version));
const failures = [];
const seen = new Set();

for (const f of ledger.features) {
  const where = `features.json '${f.id}'`;
  if (seen.has(f.id)) failures.push(`${where}: duplicate id`);
  seen.add(f.id);
  for (const key of ['title', 'summary']) {
    if (!f[key]?.es || !f[key]?.en) failures.push(`${where}: ${key} needs es and en`);
  }
  if (!Array.isArray(f.evidence) || f.evidence.length === 0) failures.push(`${where}: evidence is required`);
  for (const e of f.evidence ?? []) {
    if (!/^https:\/\//.test(e.href ?? '') || !e.label)
      failures.push(`${where}: evidence needs a label and an https href`);
  }
  if (!['shipping', 'main', 'experimental', 'planned'].includes(f.stage))
    failures.push(`${where}: unknown stage '${f.stage}'`);
  if (f.stage === 'shipping') {
    if (!f.releasedIn || !released.has(f.releasedIn)) {
      failures.push(`${where}: 'shipping' needs releasedIn naming a released (tagged or published) release (got ${f.releasedIn})`);
    }
  } else if (f.releasedIn) {
    failures.push(`${where}: releasedIn is only valid for 'shipping' features`);
  }
}

const newest = releases.find(isReleased)?.version;
if (newest && ledger.reviewedAgainst !== newest) {
  console.warn(
    `check-feature-ledger: ledger was last reviewed against ${ledger.reviewedAgainst}; newest released release is ${newest}. Re-check every entry and update reviewedAgainst.`,
  );
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`check-feature-ledger: ${ledger.features.length} features, all consistent with releases.json`);
