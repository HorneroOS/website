// Regression guard against stale launch claims.
//
// The current published ISO is v0.2.0-preview32 (signed, Desktop +
// Studio + Gaming Preview).
// These exact phrases claimed the opposite and kept coming back in copy, so
// the build fails if they reappear in site-authored source. Historical
// release records and generated product data are out of scope.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const banned = [
  { pattern: /a public ISO does not exist/i, claim: 'claims no public ISO exists' },
  { pattern: /no existe una ISO pública/i, claim: 'claims no public ISO exists (es)' },
  { pattern: /todavía no existe una ISO/i, claim: 'claims no ISO exists yet (es)' },
  { pattern: /there is no (public |installable )?ISO/i, claim: 'claims there is no ISO' },
  { pattern: /no hay (una )?ISO (pública|disponible)/i, claim: 'claims no ISO is available (es)' },
  { pattern: /unsigned provisional preview/i, claim: 'preview22 manifest status was corrected to signed prerelease' },
  { pattern: /horneroos-2026\.10-provisional/i, claim: 'provisional artifact name; published file is preview22' },
  { pattern: /Preview 21 (ships|is the first|trae|es la primera)/i, claim: 'Preview 21 was the first candidate; Preview 22 is the first published ISO' },
  { pattern: /No ISO yet/i, claim: 'claims no ISO yet (was the stale OG install card)' },
  { pattern: /todavía no hay.*ISO/i, claim: 'claims no ISO yet (es)' },
  { pattern: /lived in since 2018|habitado desde 2018/i, claim: '2018 is the personal workstation, not the distribution (2026)' },
];

const CURRENT_ISO = 'horneroos-2026.10-preview32-x86_64.iso';

const roots = ['src/components', 'src/layouts', 'src/pages', 'src/i18n', 'scripts', 'public'];
const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(astro|ts|mjs|txt)$/.test(name)) files.push(path);
  }
};
roots.forEach(walk);
const scanned = files.filter((f) => !f.endsWith('check-release-truth.mjs'));

let failures = 0;
for (const file of scanned) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, index) => {
    for (const { pattern, claim } of banned) {
      if (pattern.test(line)) {
        console.error(`${file}:${index + 1}: stale launch claim (${claim}): ${line.trim()}`);
        failures += 1;
      }
    }
  });
}

for (const file of ['public/llms.txt', 'scripts/build-og.mjs', 'src/components/pages/InstallPage.astro']) {
  const text = readFileSync(file, 'utf8');
  for (const match of text.matchAll(/horneroos-2026\.10-preview\d+-x86_64\.iso/g)) {
    if (match[0] !== CURRENT_ISO) {
      console.error(`${file}: names a stale ISO (${match[0]}); current is ${CURRENT_ISO}`);
      failures += 1;
    }
  }
  for (const match of text.matchAll(/v0\.2\.0-preview(\d+) ISO/g)) {
    if (match[1] !== '31') {
      console.error(`${file}: stale current-release claim (${match[0]}); current is v0.2.0-preview32`);
      failures += 1;
    }
  }
}

if (failures > 0) {
  console.error(`check-release-truth: ${failures} stale claim(s) found`);
  process.exit(1);
}
console.log(`check-release-truth: OK (${scanned.length} files scanned)`);
