#!/usr/bin/env node
/**
 * Generates docs/CAPTURE-SHOT-LIST.md from src/data/capture-slots.json, so the
 * definitive shot list and the placeholders on the site can never drift.
 *
 *   node scripts/gen-shot-list.mjs          write the file
 *   node scripts/gen-shot-list.mjs --check  fail if the file is stale
 *   node scripts/gen-shot-list.mjs --stdout print it (used for the PR body)
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(readFileSync(join(root, 'src/data/capture-slots.json'), 'utf8'));
const out = join(root, 'docs/CAPTURE-SHOT-LIST.md');
const editorial = JSON.parse(readFileSync(join(root, 'src/data/editorial.json'), 'utf8'));
const allSlots = data.slots;
const { sessions } = data;
// The shot list covers only deferred (pending) slots; captured/archive state
// is reported as counts (docs/IMAGE_CURATION.md).
const slots = allSlots.filter((s) => s.status === 'pending');
const nStatus = (status) => allSlots.filter((s) => s.status === status).length;
const publicIds = new Set([...Object.values(editorial.pages).flatMap((sections) => sections.flatMap((s) => s.slots)), ...editorial.showroom.flatMap((g) => g.slots)]);
const order = ['P0', 'P1', 'P2'];
const count = (p) => slots.filter((s) => s.priority === p).length;
const minutes = sessions.reduce((n, s) => n + s.minutes, 0);
const kindLabel = { screenshot: 'screenshot', clip: 'clip', photo: 'photo' };

const lines = [];
const push = (...l) => lines.push(...l);

push(
  '# Capture shot list',
  '',
  '> Generated from `src/data/capture-slots.json` by `node scripts/gen-shot-list.mjs`. Do not edit by hand:',
  '> change the data file and regenerate. `npm run check:captures` fails when this file is stale.',
  '',
  `The site shows a curated selection of real captures (${publicIds.size} distinct images placed by`,
  `\`src/data/editorial.json\`). Inventory: **${allSlots.length} slots** — ${nStatus('captured')} captured,`,
  `${nStatus('archived')} archived (asset kept, never rendered), ${nStatus('pending')} pending. Pending slots`,
  `never render publicly; this file is the definitive list of the **${slots.length} deferred captures**`,
  `(${count('P0')} P0, ${count('P1')} P1, ${count('P2')} P2) still worth shooting, in ${sessions.filter((s) => slots.some((x) => x.session === s.id)).length} sessions.`,
  `Cancelled slot declarations and every keep/archive decision are recorded in docs/IMAGE_CURATION.md.`,
  '',
  '| Priority | Meaning | Slots |',
  '| --- | --- | --- |',
  `| P0 | Launch-critical: a page looks broken or dishonest without it | ${count('P0')} |`,
  `| P1 | Important: makes the page convincing | ${count('P1')} |`,
  `| P2 | Complementary: depth for people who keep reading | ${count('P2')} |`,
  '',
  '## How to deliver a capture',
  '',
  '1. Prepare the machine with the rules below, then shoot a session with `scripts/capture-helper.sh`.',
  '2. Verify: `scripts/capture-helper.sh verify CAP-ID file`.',
  '3. Fill the slot: `node scripts/capture-ingest.mjs CAP-ID file` (copies the file into `src/assets/captures/`,',
  '   records its checksum and flips `status` to `captured`). By hand it is exactly two edits: drop the file',
  '   in `src/assets/captures/` and set `status` and `file` on the slot.',
  '4. Add an editorial placement in `src/data/editorial.json`, then `npm run build`.',
  '',
  'Send the files to the maintainer who runs the ingest, or open a PR containing the ingest result.',
  '',
  '## Global rules',
  '',
  '### Capture environment',
  '',
  '- **Demo user.** Create a clean Linux user (for example `demo`, hostname `hornero`) with only HorneroOS-shipped',
  '  applications, or use the QA VM (`uv run hornero-qa`). Never capture from a personal account.',
  '- **Fixed output.** One output at 1920x1080, scale 1, 60 Hz. For P0 desktop slots marked "2x master" also',
  '  capture a 3840x2160 output at scale 2 (logical size stays 1920x1080). `scripts/capture-helper.sh headless`',
  '  creates a throw-away headless output so the physical monitor and its windows never appear.',
  '- **Release pins.** Capture on the released composition (hornero-shell 1.3.0, hornero-config 0.4.0, hornero-greeter 1.1.0',
  '  at the time of writing), not a dev checkout. Record the shell and config short SHAs with `--pins`.',
  '- **Wallpapers.** Only HorneroOS-shipped, credited wallpapers (the Argentina collection). Each slot names its',
  '  wallpaper; do not use personal or third-party images.',
  '- **Clean desktop.** No popups unless the slot is about one, no stale notifications, do-not-disturb on while',
  '  staging, Num Lock as found, cursor parked off the subject.',
  '- **Shell safety.** Only restart the shell when `qs ipc call lock isLocked` is false; do not hot-reload.',
  '',
  '### Privacy rules (apply to every slot)',
  '',
  '- No personal names, e-mail addresses, hostnames, account avatars, process lists with personal paths, git remotes,',
  '  browser tabs, chat or mail tray badges, calendar entries, Wi-Fi or Bluetooth device names, or location (weather).',
  '- Editor, terminal and file-manager content must be a demo repository and demo files created for the shoot.',
  '- Media must be CC0, CC BY with credit recorded, or made by the project. No copyrighted video, music or album art.',
  '- Games and apps shown must be free software or freely redistributable demos. No storefront account visible.',
  '- Review every file at 100 % before ingesting. If in doubt, retake.',
  '',
  '### Format, naming and export',
  '',
  '- Masters: PNG (lossless) at the slot size or larger with the exact aspect ratio; photographs as AVIF or JPG',
  '  (sRGB, 3000x2000). The site builds AVIF and WebP from the master; do not pre-compress.',
  '- Clips: 6 to 12 s, no audio, 1280x720, a seamless loop where possible, WebM (VP9) plus MP4 (H.264) and a PNG',
  '  poster of the best frame, each file under 2.5 MB. They never autoplay for visitors who prefer reduced motion.',
  '- Name files `CAP-ID.png` (suffix `-a`, `-b` for multi-part slots). Day and Night are separate slots.',
  '- Alt text below is the planned text; adjust it to what the final frame really shows before ingesting.',
  '',
  '## Sessions',
  '',
  '| Session | Where | Slots | Time |',
  '| --- | --- | --- | --- |',
);
// GitHub heading anchor: lowercase, drop punctuation, spaces to hyphens.
const anchor = (heading) => heading.toLowerCase().replace(/[^\p{L}\p{N} -]/gu, '').replace(/ /g, '-');
for (const s of sessions) {
  const n = slots.filter((x) => x.session === s.id).length;
  if (n === 0) continue;
  push(`| [${s.id} ${s.title.en}](#${anchor(`Session ${s.id}: ${s.title.en}`)}) | ${s.where} | ${n} | ${s.minutes} min |`);
}
push('', 'Run the sessions in order: S01 sets the arrangement and wallpapers that S02 to S09 reuse.', '');

for (const s of sessions) {
  const list = slots.filter((x) => x.session === s.id).sort((a, b) => order.indexOf(a.priority) - order.indexOf(b.priority) || a.id.localeCompare(b.id));
  if (list.length === 0) continue;
  push(`## Session ${s.id}: ${s.title.en}`, '', `Where: ${s.where}. About ${s.minutes} minutes, ${list.length} slots.`, '');
  push('| Slot | Priority | Kind | Shown on |', '| --- | --- | --- | --- |');
  for (const x of list) push(`| ${x.id} | ${x.priority} | ${kindLabel[x.kind]} | ${x.pages.length ? x.pages.join(', ') : 'Showroom only'} |`);
  push('');
  for (const x of list) {
    push(`### ${x.id} ${x.title.en}`, '');
    push(`- **Priority:** ${x.priority} (${{ P0: 'launch-critical', P1: 'important', P2: 'complementary' }[x.priority]}).`);
    push(`- **Page and section:** ${x.pages.length ? x.pages.join(', ') + ' · ' : 'Showroom only · '}${x.section}.`);
    push(`- **On screen:** ${x.description.en}`);
    push(`- **Spec:** ${x.aspect}, ${x.width}x${x.height}${x.scale2x ? ' (also a 2x master)' : ''}, ${x.format}.`);
    push(`- **State:** theme ${x.theme}, mode ${x.mode}, layout ${x.layout}, wallpaper ${x.wallpaper}.`);
    push('- **Setup:**');
    x.setup.forEach((step, i) => push(`  ${i + 1}. ${step}`));
    push(`- **Privacy:** ${x.privacy}`);
    push(`- **Alt text (EN):** ${x.alt.en}`);
    push(`- **Alt text (ES):** ${x.alt.es}`, '');
  }
}
push(
  '## Notes for the maintainer',
  '',
  '- Javi and the nest (S08): shoot after the final Javi and nest art lands (feature ledger `javi-final-art` is planned).',
  '- Greeter and installer (S12) need the QA VM or a fresh install; the greeter cannot be captured from a running session.',
  '- Social cards stay brand-only (`scripts/build-og.mjs`); the archived fastfetch crop must never become an OG image.',
  '',
);

const text = `${lines.join('\n').replace(/\n+$/, '')}\n`;
if (process.argv.includes('--stdout')) {
  process.stdout.write(text);
} else if (process.argv.includes('--check')) {
  if (!existsSync(out) || readFileSync(out, 'utf8') !== text) {
    console.error('docs/CAPTURE-SHOT-LIST.md is out of date');
    process.exit(1);
  }
  console.log('gen-shot-list: OK (docs/CAPTURE-SHOT-LIST.md is current)');
} else {
  writeFileSync(out, text);
  console.log(`wrote docs/CAPTURE-SHOT-LIST.md (${slots.length} slots)`);
}
