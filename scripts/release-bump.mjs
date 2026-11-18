// Apply a published release to the site data in one reviewable step.
//
// Run it AFTER the release exists: the distro tag is pushed, the AUR packages
// are published and the ISO is signed and uploaded. It never invents a fact:
// the version, ISO checksum and size must be passed in, and the result is
// verified against the tagged release records before the script exits 0.
//
//   node scripts/release-bump.mjs --version 0.2.0-preview33 \
//     --sha256 <64 hex> --size "2.8 GB" [--iso-name <file>] [--iso-file <path>]
//   node scripts/release-bump.mjs --version 0.2.0-preview33 --iso-file ./x.iso --dry-run
//
// What it changes (see docs/PRODUCT_DATA.md, "Release bump"):
//   1. src/data/product/pins.json + generated data  (sync-product-data --bump)
//   2. src/data/download.json                        (version, ISO, URLs, sha256)
//   3. src/data/features.json `reviewedAgainst`      (entries stay human-reviewed)
//   4. stale ISO/version mentions guarded by scripts/check-release-truth.mjs
// Then it runs check-release-truth, check-feature-ledger and check-i18n.
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, statSync, writeFileSync } from 'node:fs';
import { parseArgs } from 'node:util';

const fail = (message) => {
  console.error(`release-bump: ${message}`);
  process.exit(1);
};

const { values: opts } = parseArgs({
  options: {
    version: { type: 'string' },
    sha256: { type: 'string' },
    size: { type: 'string' },
    'iso-name': { type: 'string' },
    'iso-file': { type: 'string' },
    'skip-bump': { type: 'boolean', default: false },
    'dry-run': { type: 'boolean', default: false },
  },
});

const version = opts.version ?? fail('--version is required (for example 0.2.0-preview33)');
if (!/^\d+\.\d+\.\d+-preview\d+$/.test(version)) fail(`--version ${version} is not <x.y.z>-preview<N>`);
const preview = /preview(\d+)$/.exec(version)[1];

const DOWNLOAD = 'src/data/download.json';
const FEATURES = 'src/data/features.json';
const previous = JSON.parse(readFileSync(DOWNLOAD, 'utf8'));
if (previous.version === version) fail(`${DOWNLOAD} already names ${version}`);

// Derive the ISO facts. A local ISO is the strongest source (hash and size are
// measured, not typed); otherwise the caller supplies both explicitly.
let sha256 = opts.sha256;
let sizeLabel = opts.size;
if (opts['iso-file']) {
  const bytes = readFileSync(opts['iso-file']);
  sha256 ??= createHash('sha256').update(bytes).digest('hex');
  sizeLabel ??= `${(statSync(opts['iso-file']).size / 1e9).toFixed(1)} GB`;
  if (opts.sha256 && opts.sha256 !== createHash('sha256').update(bytes).digest('hex')) {
    fail('--sha256 does not match --iso-file');
  }
}
if (!sha256 || !/^[0-9a-f]{64}$/.test(sha256)) fail('a 64-hex --sha256 (or --iso-file) is required');
if (!sizeLabel) fail('--size (or --iso-file) is required');

const isoName = opts['iso-name'] ?? previous.iso.name.replace(/preview\d+/, `preview${preview}`);
if (!isoName.includes(`preview${preview}`)) fail(`ISO name ${isoName} does not contain preview${preview}`);

const swap = (url) => url.replace(previous.iso.name, isoName);
const next = {
  ...previous,
  version,
  iso: { name: isoName, url: swap(previous.iso.url), sha256, sizeLabel },
  checksumUrl: swap(previous.checksumUrl),
  signatureUrl: swap(previous.signatureUrl),
  releaseUrl: previous.releaseUrl.replace(/v[^/]+$/, `v${version}`),
};

// Text files that must name the current ISO and release (check-release-truth).
const TEXT_TARGETS = ['public/llms.txt', 'scripts/build-og.mjs', 'src/components/pages/InstallPage.astro'];
const edits = new Map();
for (const file of TEXT_TARGETS) {
  const before = readFileSync(file, 'utf8');
  const after = before
    .replaceAll(previous.iso.name, isoName)
    .replace(/v(\d+\.\d+\.\d+)-preview\d+ ISO/g, `v$1-preview${preview} ISO`);
  if (after !== before) edits.set(file, after);
}
const truth = readFileSync('scripts/check-release-truth.mjs', 'utf8');
const truthAfter = truth.replace(/current published ISO is v\S+/, `current published ISO is v${version}`);
if (truthAfter !== truth) edits.set('scripts/check-release-truth.mjs', truthAfter);

const features = JSON.parse(readFileSync(FEATURES, 'utf8'));
features.reviewedAgainst = version;

console.log(`release-bump: ${previous.version} -> ${version}`);
console.log(`  ISO      ${isoName} (${sizeLabel})`);
console.log(`  sha256   ${sha256}`);
for (const file of edits.keys()) console.log(`  rewrite  ${file}`);
if (opts['dry-run']) {
  console.log('release-bump: dry run, nothing written (the pin bump was skipped too).');
  process.exit(0);
}

if (!opts['skip-bump']) {
  // Moves every pin to its repository's current main and snapshots the tags.
  execFileSync('node', ['scripts/sync-product-data.mjs', '--bump'], { stdio: 'inherit' });
}
const releases = JSON.parse(readFileSync('src/data/product/releases.json', 'utf8'));
if (!releases.some((r) => r.version === version && r.status === 'tagged')) {
  fail(`${version} is not a tagged release in the regenerated releases.json: tag it in HorneroOS/hornero first, then rerun`);
}

writeFileSync(DOWNLOAD, `${JSON.stringify(next, null, 2)}\n`);
writeFileSync(FEATURES, `${JSON.stringify(features, null, 2)}\n`);
for (const [file, text] of edits) writeFileSync(file, text);

for (const script of ['check-release-truth', 'check-feature-ledger', 'check-i18n']) {
  execFileSync('node', [`scripts/${script}.mjs`], { stdio: 'inherit' });
}

const unreleased = features.features.filter((f) => f.stage !== 'shipping').map((f) => `${f.id} (${f.stage})`);
console.log('\nrelease-bump: data updated and checks pass. Remaining human steps:');
console.log(`  - flip src/data/features.json entries that shipped in ${version}: ${unreleased.join(', ') || 'none pending'}`);
console.log('  - re-render social cards if the ISO name appears in them: node scripts/build-og.mjs');
console.log('  - npm run lint && npm run build, then open the PR (merging deploys production)');
