// Apply a published release to the site data in one reviewable step.
//
// Run it AFTER the release exists. It never invents a fact: every version,
// checksum and size is passed in or measured, and the result is verified
// against the release records (and, for packages, the AUR) before it exits 0.
//
// ISO release (the distro tag is pushed, the ISO is signed and uploaded):
//   node scripts/release-bump.mjs --version 0.2.0-preview34 \
//     --sha256 <64 hex> --size "2.8 GB" [--iso-name <file>] [--iso-file <path>]
//   node scripts/release-bump.mjs --version 0.2.0-preview34 --iso-file ./x.iso --dry-run
//
// Package-only release (AUR packages published, NO new ISO): the download
// record keeps offering the current ISO and gains a `packageRelease` naming
// the release and the exact package versions an update brings. No checksum is
// asked for because no ISO changes.
//   node scripts/release-bump.mjs --package-only --version 0.2.0-preview33 \
//     --packages hornero-shell=1.3.0-1,hornero-config=0.4.0-1,hornero-greeter=1.1.0-1,horneroctl-bin=0.2.0_preview46-1
//
// What it changes (see docs/PRODUCT_DATA.md, "Release bump"):
//   1. src/data/product/pins.json + generated data  (sync-product-data --bump)
//   2. src/data/download.json                        (ISO record, or packageRelease)
//   3. src/data/features.json `reviewedAgainst`      (entries stay human-reviewed)
//   4. stale ISO/version mentions guarded by scripts/check-release-truth.mjs (ISO mode)
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
    'package-only': { type: 'boolean', default: false },
    packages: { type: 'string' },
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

const runChecks = () => {
  for (const script of ['check-release-truth', 'check-feature-ledger', 'check-i18n']) {
    execFileSync('node', [`scripts/${script}.mjs`], { stdio: 'inherit' });
  }
};
const regenerate = () => {
  // Moves every pin to its repository's current main and snapshots the tags.
  if (!opts['skip-bump']) execFileSync('node', ['scripts/sync-product-data.mjs', '--bump'], { stdio: 'inherit' });
  return JSON.parse(readFileSync('src/data/product/releases.json', 'utf8'));
};
const isReleased = (r) => r.status === 'tagged' || r.status === 'published';

if (opts['package-only']) {
  for (const flag of ['sha256', 'size', 'iso-name', 'iso-file']) {
    if (opts[flag]) fail(`--${flag} does not apply to --package-only: a package-only release does not change the ISO`);
  }
  const packages = (opts.packages ?? fail('--packages name=pkgver-pkgrel,... is required with --package-only'))
    .split(',')
    .map((pair) => pair.trim())
    .filter(Boolean)
    .map((pair) => {
      const m = /^([a-z0-9@._+-]+)=([A-Za-z0-9._+~:]+-\d+(?:\.\d+)?)$/.exec(pair);
      if (!m) fail(`--packages entry '${pair}' is not name=pkgver-pkgrel`);
      return { name: m[1], version: m[2] };
    });
  if (packages.length === 0) fail('--packages names no package');

  // The AUR is the source of truth for what an update installs: refuse any
  // version that is not what the AUR serves right now.
  const query = packages.map((p) => `arg[]=${encodeURIComponent(p.name)}`).join('&');
  const response = await fetch(`https://aur.archlinux.org/rpc/v5/info?${query}`);
  if (!response.ok) fail(`AUR RPC answered HTTP ${response.status}`);
  const served = new Map((await response.json()).results.map((r) => [r.Name, r.Version]));
  for (const p of packages) {
    const live = served.get(p.name);
    if (live !== p.version) fail(`AUR serves ${p.name} ${live ?? '(not found)'}, not ${p.version}`);
  }

  const record = `${previous.releaseUrl.replace(/\/releases\/tag\/v[^/]+$/, '')}/blob/main/releases/v${version}`;
  const packageRelease = {
    version,
    recordUrl: `${record}.yaml`,
    checklistUrl: `${record}-checklist.md`,
    packages,
  };
  const features = JSON.parse(readFileSync(FEATURES, 'utf8'));
  features.reviewedAgainst = version;

  console.log(`release-bump (package-only): ISO stays ${previous.version}; packages -> ${version}`);
  for (const p of packages) console.log(`  ${p.name.padEnd(18)} ${p.version} (matches the AUR)`);
  if (opts['dry-run']) {
    console.log('release-bump: dry run, nothing written (the pin bump was skipped too).');
    process.exit(0);
  }
  const releases = regenerate();
  const hit = releases.find((r) => r.version === version);
  if (!hit || !isReleased(hit)) {
    fail(`${version} is ${hit ? hit.status : 'missing'} in the regenerated releases.json: publish its record in HorneroOS/hornero (tag or published: true) first, then rerun`);
  }
  writeFileSync(DOWNLOAD, `${JSON.stringify({ ...previous, packageRelease }, null, 2)}\n`);
  writeFileSync(FEATURES, `${JSON.stringify(features, null, 2)}\n`);
  runChecks();
  console.log('\nrelease-bump: data updated and checks pass. Remaining human steps:');
  console.log(`  - flip src/data/features.json entries that shipped in ${version} to stage 'shipping', releasedIn '${version}'`);
  console.log('  - add a user-facing line for the release in src/data/release-notes.ts');
  console.log('  - re-render social cards: node scripts/build-og.mjs');
  console.log('  - npm run lint && npm run build, then open the PR (merging deploys production)');
  process.exit(0);
}
if (opts.packages) fail('--packages only applies to --package-only');

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
// A new ISO carries every package release before it.
delete next.packageRelease;

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

const releases = regenerate();
if (!releases.some((r) => r.version === version && r.status === 'tagged')) {
  fail(`${version} is not a tagged release in the regenerated releases.json: tag it in HorneroOS/hornero first, then rerun`);
}

writeFileSync(DOWNLOAD, `${JSON.stringify(next, null, 2)}\n`);
writeFileSync(FEATURES, `${JSON.stringify(features, null, 2)}\n`);
for (const [file, text] of edits) writeFileSync(file, text);

runChecks();

const unreleased = features.features.filter((f) => f.stage !== 'shipping').map((f) => `${f.id} (${f.stage})`);
console.log('\nrelease-bump: data updated and checks pass. Remaining human steps:');
console.log(`  - flip src/data/features.json entries that shipped in ${version}: ${unreleased.join(', ') || 'none pending'}`);
console.log('  - re-render social cards if the ISO name appears in them: node scripts/build-og.mjs');
console.log('  - npm run lint && npm run build, then open the PR (merging deploys production)');
