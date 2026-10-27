// Regression guard against stale launch claims.
//
// The v0.2.0-preview22 ISO is published (signed, Desktop + Studio Preview).
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
];

const roots = ['src/components', 'src/layouts', 'src/pages', 'src/i18n'];
const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(astro|ts|mjs)$/.test(name)) files.push(path);
  }
};
roots.forEach(walk);

let failures = 0;
for (const file of files) {
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

if (failures > 0) {
  console.error(`check-release-truth: ${failures} stale claim(s) found`);
  process.exit(1);
}
console.log(`check-release-truth: OK (${files.length} files scanned)`);
