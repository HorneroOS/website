#!/usr/bin/env node
/**
 * Capture-slot gate (docs/CAPTURES.md).
 *
 *   node scripts/check-capture-slots.mjs          source checks (before the build)
 *   node scripts/check-capture-slots.mjs --dist   rendered-page checks (after the build)
 *
 * Source checks:
 *  - src/data/capture-slots.json is well formed (ids, priority, kind, aspect
 *    matches width x height, session exists, ES/EN copy, setup steps).
 *  - A `captured` slot has its file, checksum and a poster for clips; a
 *    `pending` slot has none.
 *  - Every slot id mentioned in src/ or docs/ exists in the data file.
 *  - No showcase image remains unaccounted for: every image or video file in
 *    public/, src/assets/ and assets/ is either a captured slot file or is
 *    listed in src/data/kept-images.json with a category; every file in
 *    public/ is also referenced from src/ or scripts/. The old showroom
 *    collection and public/images cannot come back.
 *  - docs/CAPTURE-SHOT-LIST.md matches the data file (scripts/gen-shot-list.mjs).
 *
 * Dist checks:
 *  - Every `data-capture-slot` in a built page names a declared slot.
 *  - Every pending slot renders on /showroom, and on each route in `pages`,
 *    in both locales.
 */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');
const failures = [];
const fail = (message) => failures.push(message);

const data = JSON.parse(read('src/data/capture-slots.json'));
const kept = JSON.parse(read('src/data/kept-images.json'));
const slots = data.slots;
const byId = new Map(slots.map((slot) => [slot.id, slot]));
const sessionIds = new Set(data.sessions.map((session) => session.id));

const walk = (dir, out = []) => {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.git') continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else out.push(path);
  }
  return out;
};

if (process.argv.includes('--dist')) {
  checkDist();
} else {
  checkSource();
}

if (failures.length) {
  console.error('check-capture-slots: FAILED');
  for (const message of failures) console.error(`  - ${message}`);
  process.exit(1);
}
const pending = slots.filter((slot) => slot.status === 'pending').length;
console.log(`check-capture-slots: OK (${slots.length} slots, ${pending} pending, ${slots.length - pending} captured${process.argv.includes('--dist') ? ', rendered pages' : ''})`);

function checkSource() {
  const idPattern = /^CAP-[A-Z]+-\d{2}$/;
  const ratioOf = (aspect) => {
    const [w, h] = aspect.split(':').map(Number);
    return w / h;
  };
  const seen = new Set();
  for (const slot of slots) {
    const where = slot.id;
    if (!idPattern.test(slot.id)) fail(`${where}: id must look like CAP-AREA-01`);
    if (seen.has(slot.id)) fail(`${where}: duplicate id`);
    seen.add(slot.id);
    if (!['P0', 'P1', 'P2'].includes(slot.priority)) fail(`${where}: priority must be P0, P1 or P2`);
    if (!['screenshot', 'clip', 'photo'].includes(slot.kind)) fail(`${where}: unknown kind ${slot.kind}`);
    if (!['pending', 'captured'].includes(slot.status)) fail(`${where}: unknown status ${slot.status}`);
    if (!sessionIds.has(slot.session)) fail(`${where}: unknown session ${slot.session}`);
    if (!/^\d+:\d+$/.test(slot.aspect) || Math.abs(ratioOf(slot.aspect) - slot.width / slot.height) > 0.01) {
      fail(`${where}: aspect ${slot.aspect} does not match ${slot.width}x${slot.height}`);
    }
    for (const field of ['title', 'description', 'alt']) {
      for (const lang of ['es', 'en']) {
        if (!slot[field]?.[lang]) fail(`${where}: ${field}.${lang} is missing`);
      }
    }
    if (slot.alt?.en && slot.alt.en.length < 20) fail(`${where}: alt.en is too short to describe the image`);
    if (!Array.isArray(slot.setup) || slot.setup.length === 0) fail(`${where}: setup steps are required`);
    for (const page of slot.pages) if (!page.startsWith('/')) fail(`${where}: page ${page} must be a root-relative route`);
    if (!slot.section || !slot.privacy || !slot.format) fail(`${where}: section, privacy and format are required`);

    if (slot.status === 'pending') {
      if (slot.file) fail(`${where}: pending slots must have file: null`);
    } else {
      if (!slot.file) fail(`${where}: captured slots need a file`);
      else if (slot.kind === 'clip') {
        const base = slot.file.replace(/\.[^.]+$/, '');
        for (const ext of ['webm', 'mp4']) {
          if (!existsSync(join(root, 'public/captures', `${base}.${ext}`))) fail(`${where}: public/captures/${base}.${ext} is missing`);
        }
        if (!slot.poster || !existsSync(join(root, 'src/assets/captures', slot.poster))) fail(`${where}: poster is missing`);
      } else {
        const file = join(root, 'src/assets/captures', slot.file);
        if (!existsSync(file)) fail(`${where}: src/assets/captures/${slot.file} is missing`);
        else if (slot.sha256 && createHash('sha256').update(readFileSync(file)).digest('hex') !== slot.sha256) fail(`${where}: checksum mismatch for ${slot.file}`);
      }
    }
  }

  // Slot ids mentioned in source or docs must exist.
  const mentioned = [...walk(join(root, 'src')), ...walk(join(root, 'docs')).filter((f) => f.endsWith('.md')), join(root, 'README.md'), join(root, 'AGENTS.md')]
    .filter((f) => existsSync(f) && !f.endsWith('capture-slots.json') && !f.includes('/assets/'));
  for (const file of mentioned) {
    for (const match of readFileSync(file, 'utf8').matchAll(/CAP-[A-Z]+-\d{2}/g)) {
      if (!byId.has(match[0]) && !/CAP-AREA-01|CAP-[A-Z]+-NN/.test(match[0])) fail(`${relative(root, file)} mentions undeclared slot ${match[0]}`);
    }
    for (const match of readFileSync(file, 'utf8').matchAll(/<CaptureFigure[^>]*slot="([^"]+)"/g)) {
      if (!byId.has(match[1])) fail(`${relative(root, file)} renders undeclared slot ${match[1]}`);
    }
  }

  // Slots promising a page must be placed by that page or by its gallery.
  const pageSources = walk(join(root, 'src/components/pages')).map((f) => readFileSync(f, 'utf8')).join('\n') + read('src/components/LookCompare.astro');
  for (const slot of slots) {
    for (const page of slot.pages) {
      const placed = pageSources.includes(`"${slot.id}"`) || pageSources.includes(`'${slot.id}'`) || pageSources.includes(`route="${page}"`);
      if (!placed) fail(`${slot.id}: declared for ${page} but no page component renders it`);
    }
  }

  // Image inventory.
  const mediaExt = /\.(png|jpe?g|webp|avif|gif|svg|mp4|webm|mov|ico)$/i;
  const slotFiles = new Set();
  for (const slot of slots) {
    if (slot.status !== 'captured' || !slot.file) continue;
    slotFiles.add(`src/assets/captures/${slot.file}`);
    // Docs pages serve stills from public/captures (remark-docs-links).
    slotFiles.add(`public/captures/${slot.file}`);
    if (slot.poster) slotFiles.add(`src/assets/captures/${slot.poster}`);
    if (slot.kind === 'clip') for (const ext of ['webm', 'mp4']) slotFiles.add(`public/captures/${slot.file.replace(/\.[^.]+$/, '')}.${ext}`);
  }
  const keptByPath = new Map(kept.entries.filter((e) => e.path).map((e) => [e.path, e]));
  const keptPrefixes = kept.entries.filter((e) => e.prefix);
  for (const entry of kept.entries) {
    if (!kept.categories[entry.category]) fail(`kept-images.json: unknown category ${entry.category}`);
    if (entry.path && !existsSync(join(root, entry.path))) fail(`kept-images.json: ${entry.path} does not exist`);
    if (entry.prefix && walk(join(root, entry.prefix)).length === 0) fail(`kept-images.json: ${entry.prefix} matches no file`);
  }
  const sourceText = [...walk(join(root, 'src')), ...walk(join(root, 'scripts'))]
    .filter((f) => /\.(astro|ts|mjs|json|md)$/.test(f))
    .map((f) => readFileSync(f, 'utf8'))
    .join('\n');
  for (const dir of ['public', 'src/assets', 'assets']) {
    for (const abs of walk(join(root, dir))) {
      const rel = relative(root, abs);
      if (!mediaExt.test(rel)) continue;
      if (slotFiles.has(rel)) continue;
      if (rel.startsWith('src/assets/captures/') || rel.startsWith('public/captures/')) {
        fail(`${rel}: a captured file is not owned by any slot (run scripts/capture-ingest.mjs)`);
        continue;
      }
      if (!keptByPath.has(rel) && !keptPrefixes.some((e) => rel.startsWith(e.prefix))) {
        fail(`${rel}: unreferenced showcase image. Remove it, or list it in src/data/kept-images.json if it is brand or licensed media`);
        continue;
      }
      // Everything served from public/ must actually be used.
      if (rel.startsWith('public/')) {
        const url = rel.slice('public'.length);
        const stem = url.replace(/-(?:720|1280)\.webp$/, '');
        if (!sourceText.includes(url) && !sourceText.includes(stem)) fail(`${rel}: served from public/ but referenced nowhere in src/ or scripts/`);
      }
    }
  }
  for (const forbidden of ['src/content/showroom', 'public/images', 'assets/screenshots', 'src/assets/concepts']) {
    if (existsSync(join(root, forbidden))) fail(`${forbidden} must not exist: product captures live in capture slots only`);
  }

  // The shot list is generated from the data file.
  try {
    execFileSync(process.execPath, [join(root, 'scripts/gen-shot-list.mjs'), '--check'], { stdio: 'pipe' });
  } catch (error) {
    fail(`docs/CAPTURE-SHOT-LIST.md is stale: run \`node scripts/gen-shot-list.mjs\` (${String(error.stderr ?? error.message).trim().split('\n')[0]})`);
  }
}

function checkDist() {
  const dist = join(root, 'dist');
  if (!existsSync(dist)) {
    fail('dist/ does not exist: run the build first');
    return;
  }
  const html = (route, locale) => {
    const path = locale === 'en' ? `/en${route === '/' ? '' : route}` : route;
    const file = join(dist, path, 'index.html');
    return existsSync(file) ? readFileSync(file, 'utf8') : null;
  };
  const ids = (page) => new Set([...(page ?? '').matchAll(/data-capture-slot="([^"]+)"/g)].map((m) => m[1]));
  for (const file of walk(dist).filter((f) => f.endsWith('.html'))) {
    for (const id of ids(readFileSync(file, 'utf8'))) {
      if (!byId.has(id)) fail(`${relative(dist, file)} renders undeclared slot ${id}`);
    }
  }
  for (const locale of ['es', 'en']) {
    const wall = html('/showroom', locale);
    const onWall = ids(wall);
    for (const slot of slots) if (!onWall.has(slot.id)) fail(`${locale} /showroom does not render ${slot.id}`);
    for (const slot of slots) {
      for (const route of slot.pages) {
        const page = html(route, locale);
        if (!page) fail(`${locale} ${route} is not built`);
        else if (!ids(page).has(slot.id)) fail(`${locale} ${route} does not render ${slot.id}`);
      }
    }
  }
  // Pending plates must tell the visitor so, in text.
  const sample = html('/showroom', 'en') ?? '';
  if (slots.some((s) => s.status === 'pending') && !/Pending — host capture/.test(sample)) fail('pending plates are missing their "Pending — host capture" label');
}
