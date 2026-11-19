#!/usr/bin/env node
/**
 * Fill a capture slot with a real host capture (docs/CAPTURES.md).
 *
 *   node scripts/capture-ingest.mjs CAP-HERO-01 ~/Pictures/hornero-captures/CAP-HERO-01.png \
 *     [--source "Maintainer host"] [--pins shell=6e1874e,config=fb8bd68] [--credit "Wallpaper: ..."]
 *   node scripts/capture-ingest.mjs CAP-CLIP-01 --webm a.webm --mp4 a.mp4 --poster a.png
 *   node scripts/capture-ingest.mjs CAP-HERO-01 --reset      (back to a pending plate)
 *
 * It validates the size and aspect ratio against the slot, copies the file to
 * src/assets/captures/ (clips: public/captures/ plus a poster), records its
 * checksum and flips the slot to `captured`. Nothing else changes: the shared
 * CaptureFigure component renders the real image in the same box.
 */
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataPath = join(root, 'src/data/capture-slots.json');
const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? undefined : args[i + 1];
};
const positional = args.filter((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--') && args[i - 1] !== '--reset'));
const [id, input] = positional;
const die = (message) => {
  console.error(`capture-ingest: ${message}`);
  process.exit(1);
};

if (!id) die('usage: capture-ingest.mjs <SLOT-ID> <file> [--source text] [--pins a=b,c=d] [--credit text] | --reset');
const data = JSON.parse(readFileSync(dataPath, 'utf8'));
const slot = data.slots.find((s) => s.id === id);
if (!slot) die(`${id} is not declared in src/data/capture-slots.json`);

const stem = id.toLowerCase();
const sha = (file) => createHash('sha256').update(readFileSync(file)).digest('hex');
const save = () => writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`);

if (args.includes('--reset')) {
  const drop = (rel) => existsSync(join(root, rel)) && rmSync(join(root, rel));
  if (slot.file) {
    if (slot.kind === 'clip') {
      for (const ext of ['webm', 'mp4']) drop(`public/captures/${slot.file.replace(/\.[^.]+$/, '')}.${ext}`);
      if (slot.poster) drop(`src/assets/captures/${slot.poster}`);
    } else drop(`src/assets/captures/${slot.file}`);
  }
  Object.assign(slot, { status: 'pending', file: null });
  for (const key of ['poster', 'capturedAt', 'sha256', 'source', 'pins', 'credit']) delete slot[key];
  save();
  console.log(`${id}: back to pending`);
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const source = flag('source') ?? 'Maintainer host';
const pins = flag('pins')
  ? Object.fromEntries(flag('pins').split(',').map((pair) => pair.split('=')))
  : undefined;
const meta = () => {
  slot.status = 'captured';
  slot.capturedAt = today;
  slot.source = { en: source, es: source === 'Maintainer host' ? 'Host del maintainer' : source };
  if (pins) slot.pins = pins;
  if (flag('credit')) slot.credit = { en: flag('credit'), es: flag('credit') };
};

if (slot.kind === 'clip') {
  const webm = flag('webm');
  const mp4 = flag('mp4');
  const poster = flag('poster');
  if (!webm || !mp4 || !poster) die('clips need --webm, --mp4 and --poster');
  for (const f of [webm, mp4, poster]) if (!existsSync(f)) die(`${f} does not exist`);
  const info = await sharp(poster).metadata();
  checkSize(info);
  mkdirSync(join(root, 'public/captures'), { recursive: true });
  mkdirSync(join(root, 'src/assets/captures'), { recursive: true });
  copyFileSync(webm, join(root, 'public/captures', `${stem}.webm`));
  copyFileSync(mp4, join(root, 'public/captures', `${stem}.mp4`));
  const posterName = `${stem}-poster${extname(poster).toLowerCase()}`;
  copyFileSync(poster, join(root, 'src/assets/captures', posterName));
  slot.file = `${stem}.mp4`;
  slot.poster = posterName;
  slot.sha256 = sha(mp4);
  meta();
} else {
  if (!input) die('pass the image file');
  if (!existsSync(input)) die(`${input} does not exist`);
  const ext = extname(input).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.webp', '.avif'].includes(ext)) die(`unsupported image type ${ext}`);
  const info = await sharp(input).metadata();
  checkSize(info);
  mkdirSync(join(root, 'src/assets/captures'), { recursive: true });
  const name = `${stem}${ext === '.jpeg' ? '.jpg' : ext}`;
  copyFileSync(input, join(root, 'src/assets/captures', name));
  slot.file = name;
  slot.sha256 = sha(input);
  meta();
}
save();
console.log(`${id}: captured (${slot.file}). Run \`npm run check:captures\` and \`npm run build\`.`);

function checkSize(info) {
  const { width = 0, height = 0 } = info;
  if (width < slot.width || height < slot.height) die(`${id} needs at least ${slot.width}x${slot.height}, got ${width}x${height}`);
  if (Math.abs(width / height - slot.width / slot.height) > 0.01) {
    die(`${id} needs aspect ${slot.aspect} (${slot.width}x${slot.height}), got ${width}x${height}`);
  }
}
