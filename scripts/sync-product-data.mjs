#!/usr/bin/env node
// Generate the site's product data from pinned Hornero sources.
//
// Inputs:  src/data/product/pins.json  (repo + 40-hex SHA per source)
// Usage:   npm run data:sync   (regenerate from pins, refresh release tags)
//          npm run data:bump   (move pins to current mains, then sync)
//          npm run data:check  (CI: committed data == data from pins)
// Outputs: src/data/product/{layouts,themes,releases}.json
//
// Every fact on /layouts, /themes and /releases comes from these files, and
// these files come only from the pinned commits: never edit them by hand.
// `--check` regenerates into memory and fails when the committed files
// differ (CI), so the data can never drift from its pins.
//
// Sources are fetched with a shallow `git fetch <sha>` into .cache/, so the
// script needs git and network access but no GitHub token.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src/data/product');
const CACHE = join(ROOT, '.cache/product-src');
const CHECK = process.argv.includes('--check');
const BUMP = process.argv.includes('--bump');

const MODULE_LABELS = {
  activeWindow: 'Active window',
  audioSlider: 'Volume',
  battery: 'Battery',
  brightnessSlider: 'Brightness',
  clock: 'Clock',
  kbLayout: 'Keyboard layout',
  logo: 'Logo',
  media: 'Media',
  pinnedApps: 'Pinned apps',
  power: 'Power',
  quickActions: 'Quick actions',
  resources: 'Resources',
  statusIcons: 'Status icons',
  tray: 'Tray',
  weather: 'Weather',
  workspaces: 'Workspaces',
};
const EDGES = ['top', 'bottom', 'left', 'right'];
const STYLES = ['attached', 'floating', 'dock', 'islands', 'inset'];

function fail(msg) {
  console.error(`sync-product-data: ${msg}`);
  process.exit(1);
}

function checkout(name, { repo, sha }) {
  if (!/^[0-9a-f]{40}$/.test(sha)) fail(`${name}: pin must be a full 40-hex SHA, got ${sha}`);
  const dir = join(CACHE, name);
  const git = (...args) => execFileSync('git', ['-C', dir, ...args], { encoding: 'utf8' }).trim();
  if (!existsSync(join(dir, '.git'))) {
    mkdirSync(dir, { recursive: true });
    git('init', '-q');
    git('remote', 'add', 'origin', repo);
  }
  let head = '';
  try {
    head = execFileSync('git', ['-C', dir, 'rev-parse', '--verify', '-q', 'HEAD'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    head = '';
  }
  if (head !== sha) {
    git('fetch', '-q', '--depth', '1', 'origin', sha);
    git('checkout', '-q', '--detach', sha);
  }
  if (git('rev-parse', 'HEAD') !== sha) fail(`${name}: checkout is not at ${sha}`);
  return dir;
}

const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));
const label = (id) => MODULE_LABELS[id] ?? id;

function enabledIds(list) {
  return (Array.isArray(list) ? list : []).filter((e) => e && e.enabled !== false && e.id).map((e) => e.id);
}

// Legacy single-bar presets list `entries` split by spacers: before the
// first spacer is the start group, between spacers the centre, after the
// last spacer the end (the same rule horneroctl's preset summary uses).
function splitLegacy(ids) {
  const spacers = ids.flatMap((id, i) => (id === 'spacer' ? [i] : []));
  if (spacers.length === 0) return { start: ids, center: [], end: [] };
  const first = spacers[0];
  const last = spacers[spacers.length - 1];
  const strip = (xs) => xs.filter((id) => id !== 'spacer');
  return {
    start: strip(ids.slice(0, first)),
    center: first === last ? [] : strip(ids.slice(first + 1, last)),
    end: strip(ids.slice(last + 1)),
  };
}

function presetBars(bar) {
  const groupsOf = (g = {}) => ({
    start: enabledIds(g.start).map(label),
    center: enabledIds(g.center).map(label),
    end: enabledIds(g.end).map(label),
  });
  if (Array.isArray(bar.bars) && bar.bars.length > 0) {
    const seen = new Set();
    return bar.bars
      .filter((b) => EDGES.includes(b.edge) && !seen.has(b.edge) && seen.add(b.edge))
      .map((b) => ({
        edge: b.edge,
        style: STYLES.includes(b.style) ? b.style : 'attached',
        clear: b.backdrop === 'clear',
        groups: groupsOf(b.groups),
      }));
  }
  const split = splitLegacy(enabledIds(bar.entries));
  return [
    {
      edge: EDGES.includes(bar.position) ? bar.position : 'top',
      style: STYLES.includes(bar.style) ? bar.style : 'attached',
      clear: bar.backdrop === 'clear',
      groups: { start: split.start.map(label), center: split.center.map(label), end: split.end.map(label) },
    },
  ];
}

function layouts(shellDir) {
  const dir = join(shellDir, 'presets');
  return readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => {
      const p = readJson(join(dir, f));
      return {
        id: f.replace(/\.json$/, ''),
        name: p._name ?? f,
        description: p._description ?? '',
        icon: p._iconMaterial ?? null,
        bars: presetBars(p.bar ?? {}),
      };
    });
}

// The official trio is defined by horneroctl (`appearance theme set` only
// accepts these), so read it from the pinned hornero source.
function officialThemes(horneroDir) {
  const src = readFileSync(join(horneroDir, 'cli/modules/hornero_core/theme_switch.v'), 'utf8');
  const m = /fn official_theme_ids\(\) \[\]string \{\s*return \[([^\]]*)\]/.exec(src);
  if (!m) fail('official_theme_ids() not found in hornero theme_switch.v');
  return [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]);
}

function themes(configDir, official) {
  const dir = join(configDir, 'profiles/themes');
  const keep = ['background', 'surface', 'text', 'primary', 'secondary', 'accent'];
  const list = readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, 'theme.json')))
    .map((d) => {
      const t = readJson(join(dir, d.name, 'theme.json'));
      return {
        id: t.id,
        name: t.name,
        mode: t.mode ?? (t.darkMode ? 'dark' : 'light'),
        description: t.description ?? '',
        official: official.includes(t.id),
        gtkTheme: t.gtkTheme ?? null,
        iconTheme: t.iconTheme ?? null,
        // Packs without a static palette derive their colours from the
        // wallpaper when applied (Material You scheme of this type).
        schemeType: t.schemeType ?? null,
        palette: Object.fromEntries(keep.filter((k) => t.palette?.[k]).map((k) => [k, t.palette[k].toUpperCase()])),
      };
    });
  const rank = (t) => (official.includes(t.id) ? official.indexOf(t.id) : 100);
  return list.sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name));
}

function releases(horneroDir, tags) {
  const relDir = join(horneroDir, 'releases');
  const manDir = join(horneroDir, 'manifests');
  const candidate = readFileSync(join(manDir, 'candidate'), 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .find((l) => l && !l.startsWith('#'));
  const manifests = new Map();
  for (const f of readdirSync(manDir).filter((f) => f.endsWith('.yaml'))) {
    const m = parseYaml(readFileSync(join(manDir, f), 'utf8'));
    manifests.set(m.name, { file: f, ...m });
  }
  const out = readdirSync(relDir)
    .filter((f) => /^v.*\.yaml$/.test(f))
    .map((f) => {
      const r = parseYaml(readFileSync(join(relDir, f), 'utf8'));
      // One release = one version = one manifest (hornero check-manifests).
      if (r.name !== `v${r.version}` || r.manifest !== `hornero-${r.version}`) {
        fail(`${f}: name ${r.name}, version ${r.version} and manifest ${r.manifest} disagree`);
      }
      const m = manifests.get(r.manifest);
      if (!m) fail(`${f}: manifest ${r.manifest} not found`);
      // Git tags are the truth (checklists were not always ticked): tagged,
      // else the current candidate, else an untagged composition record.
      const tagged = tags.includes(r.tag ?? r.name);
      const pin = (c) =>
        m.components?.[c]?.sha ? { sha: m.components[c].sha, subject: m.components[c].subject ?? '' } : null;
      return {
        name: r.name,
        version: r.version,
        date: String(m.date),
        status: tagged ? 'tagged' : m.file === candidate ? 'candidate' : 'untagged',
        summary: (r.summary ?? '').trim(),
        manifest: r.manifest,
        shell: pin('shell'),
        config: pin('config'),
        installer: m.components?.installer?.status ?? 'future',
        iso: m.components?.iso?.status ?? 'future',
      };
    });
  // Newest first: compare major.minor.patch, then the pre-release number
  // (draft < preview2 < preview14).
  const key = (v) => {
    const [core, pre = ''] = v.version.split('-');
    const nums = core.split('.').map(Number);
    const n = /(\d+)$/.exec(pre);
    return [...nums, pre.startsWith('draft') ? -1 : n ? Number(n[1]) : 0];
  };
  const cmp = (a, b) => {
    const [ka, kb] = [key(a), key(b)];
    for (let i = 0; i < ka.length; i += 1) if (ka[i] !== kb[i]) return kb[i] - ka[i];
    return 0;
  };
  return out.sort(cmp);
}

const pinsPath = join(DATA, 'pins.json');
const pins = readJson(pinsPath);
if (BUMP && CHECK) fail('--bump and --check are exclusive');
// --bump moves every pin to its repository's current main (reviewed through
// the product-data pull request, never deployed unreviewed).
if (BUMP) {
  for (const [name, pin] of Object.entries(pins.sources)) {
    const line = execFileSync('git', ['ls-remote', pin.repo, 'refs/heads/main'], { encoding: 'utf8' });
    const sha = line.split('\t')[0].trim();
    if (!/^[0-9a-f]{40}$/.test(sha)) fail(`${name}: could not resolve main of ${pin.repo}`);
    if (sha !== pin.sha) console.log(`bump ${name}: ${pin.sha.slice(0, 7)} -> ${sha.slice(0, 7)}`);
    pin.sha = sha;
  }
}
const dirs = Object.fromEntries(Object.entries(pins.sources).map(([name, pin]) => [name, checkout(name, pin)]));

// Release tags are snapshotted into pins.json by a sync, so --check stays
// deterministic (it never asks the network what was tagged since).
if (!CHECK) {
  const remote = execFileSync('git', ['ls-remote', '--tags', pins.sources.hornero.repo], { encoding: 'utf8' });
  pins.releaseTags = [
    ...new Set(
      remote
        .split('\n')
        .map((l) => l.split('\t')[1] ?? '')
        .filter((ref) => ref && !ref.endsWith('^{}'))
        .map((ref) => ref.replace('refs/tags/', ''))
        .filter((t) => /^v\d/.test(t)),
    ),
  ].sort();
  writeFileSync(pinsPath, `${JSON.stringify(pins, null, 2)}\n`);
}

const generated = {
  'layouts.json': layouts(dirs.shell),
  'themes.json': themes(dirs.config, officialThemes(dirs.hornero)),
  'releases.json': releases(dirs.hornero, pins.releaseTags ?? []),
};

let drift = 0;
for (const [file, data] of Object.entries(generated)) {
  const body = `${JSON.stringify(data, null, 2)}\n`;
  const path = join(DATA, file);
  if (CHECK) {
    const current = existsSync(path) ? readFileSync(path, 'utf8') : '';
    if (current !== body) {
      console.error(`DRIFT: src/data/product/${file} does not match its pins (run npm run data:sync)`);
      drift += 1;
    }
  } else {
    writeFileSync(path, body);
    console.log(`wrote src/data/product/${file} (${data.length} entries)`);
  }
}
if (drift) process.exit(1);
if (CHECK) console.log('product data matches pins');
