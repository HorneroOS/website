#!/usr/bin/env node
// Renders the 1200x630 Open Graph cards in public/og/.
//
// Every card pairs the Hornero Signal identity with pinned site data
// (edition maturity, catalogues, the story timeline, the capture-slot
// ledger). Cards do not embed a desktop screenshot while captures are
// pending: product captures live in capture slots (docs/CAPTURES.md), and a
// pending slot's card falls back to brand and data only. Nothing is mocked up. Re-run after changing a card, then commit the PNGs:
//
//   node scripts/build-og.mjs
//
// Uses the Chromium that pa11y already installs (puppeteer); the fonts are the
// site's own self-hosted Fontsource files.
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public/og');
const file = (path) => pathToFileURL(join(root, path)).href;
const fonts = (name, f) => file(`node_modules/@fontsource/${name}/files/${f}`);
const logo = readFileSync(join(root, 'src/assets/brand/logo-dark.svg'), 'utf8').replace(/<svg /, '<svg width="54" height="54" ');
const plugins = JSON.parse(readFileSync(join(root, 'src/data/product/extensions.json'), 'utf8')).plugins;
const studioApps = new Map(
  JSON.parse(readFileSync(join(root, 'src/data/product/editions.json'), 'utf8')).studio.applications.map((a) => [a.id, a.title]),
);

const editionsData = JSON.parse(readFileSync(join(root, 'src/data/product/editions.json'), 'utf8'));
const gamingApps = new Map((editionsData.gaming?.applications ?? []).map((a) => [a.id, a.title]));
const releases = JSON.parse(readFileSync(join(root, 'src/data/product/releases.json'), 'utf8'));
const latest = releases.find((r) => r.status === 'tagged');
const download = JSON.parse(readFileSync(join(root, 'src/data/download.json'), 'utf8'));
const ledger = JSON.parse(readFileSync(join(root, 'src/data/features.json'), 'utf8')).features;
const releasedVersions = new Set(releases.filter((r) => r.status === 'tagged' || r.status === 'published').map((r) => r.version));
const order = (v) => releases.findIndex((r) => r.version === v);
// Ledger stage as card text; the same rule as src/data/features.ts.
const stageLabel = (f) =>
  f.stage === 'shipping'
    ? !releasedVersions.has(f.releasedIn)
      ? 'On main, unreleased'
      : order(f.releasedIn) < order(download.version)
        ? 'Released as packages'
        : 'Released'
    : f.stage === 'main'
      ? 'On main, unreleased'
      : f.stage === 'experimental'
        ? 'Experimental'
        : 'Planned';
const featureLine = (id) => {
  const f = ledger.find((x) => x.id === id);
  return `<li><b>${f.title.en}</b><span>${stageLabel(f)}</span></li>`;
};
const maturityName = { planned: 'Planned', experimental: 'Experimental', preview: 'Preview', supported: 'Supported' };
const level = { planned: 1, experimental: 2, preview: 3, supported: 4 };
const meter = (m) => `<span class="meter">${[1, 2, 3, 4].map((i) => `<i class="${i <= level[m] ? 'on ' + m : ''}"></i>`).join('')}</span>`;

// No card embeds a photograph or a screenshot: product captures live in
// capture slots (docs/CAPTURES.md), so every panel is brand plus data.
const greeterData = JSON.parse(readFileSync(join(root, 'src/data/product/greeter.json'), 'utf8'));
// Capture-slot ledger for the showroom card: counts come from the data
// file, so the card stays truthful as slots are filled.
const captureSlots = JSON.parse(readFileSync(join(root, 'src/data/capture-slots.json'), 'utf8')).slots;
const slotsByPriority = ['P0', 'P1', 'P2'].map((priority) => ({
  priority,
  total: captureSlots.filter((s) => s.priority === priority).length,
  captured: captureSlots.filter((s) => s.priority === priority && s.status === 'captured').length,
}));
const priorityName = { P0: 'Launch-critical', P1: 'Important', P2: 'Complete the story' };

const cards = {
  default: {
    eyebrow: `HorneroOS · ${latest ? latest.version : 'Preview'}`,
    title: 'A workstation for building, creating and playing.',
    line: 'Arch-based, with a desktop of its own. Desktop, Studio and Gaming on one signed ISO.',
    panel: `<ul class="ledger">${['signal', 'layouts', 'chromatic', 'pluginkit', 'companion'].map(featureLine).join('')}</ul><p class="cap"><b>Feature ledger</b> status from the project data</p>`,
  },
  showroom: {
    eyebrow: 'Showroom',
    title: 'Every capture, planned.',
    line: 'The full shot list for the Signal desktop: what each capture must show, and how to take it on a real machine.',
    panel: `<ul class="ledger">${slotsByPriority
      .map((g) => `<li><b>${g.priority} · ${priorityName[g.priority]}</b><span>${g.captured}/${g.total} captured</span></li>`)
      .join('')}</ul><p class="cap"><b>Capture slots</b> ${captureSlots.length} planned captures, from src/data/capture-slots.json</p>`,
  },
  editions: {
    eyebrow: 'Editions',
    title: 'One base. One craft per edition.',
    line: 'Desktop, Studio and Gaming install from one signed ISO. Server and Agents are planned.',
    panel: `<ul class="ledger">${['desktop', 'studio', 'gaming', 'server', 'agents']
      .map((id) => editionsData.editions.find((e) => e.id === id))
      .filter(Boolean)
      .map((e) => `<li><b>${e.title.replace('HorneroOS ', '')}</b><span>${meter(e.maturity)}${maturityName[e.maturity]}</span></li>`)
      .join('')}</ul><p class="cap"><b>Edition catalogue</b> maturity from the pinned HorneroOS data</p>`,
  },
  extensions: {
    eyebrow: 'Extensions',
    title: 'Official extensions.',
    line: 'Each plugin lists its checksum and declared permissions.',
    panel: `<ul class="ledger">${plugins
      .filter((p) => p.trust === 'official')
      .slice(0, 5)
      .map((p) => `<li><b>${p.name.replace('Hornero ', '')}</b><span>${p.placement}</span></li>`)
      .join('')}</ul><p class="cap"><b>Official catalogue</b> extensions are not sandboxed</p>`,
  },
  roots: {
    eyebrow: 'History',
    title: 'From dotfiles to HorneroOS.',
    line: 'One person’s workstation, then public dotfiles, then an operating system.',
    panel: `<ol class="ledger dates">
      <li class="dash"><b>2018</b><span>Personal Arch workstation</span></li>
      <li><b>2019.11</b><span>Dotfiles go public</span></li>
      <li><b>2026.02</b><span>Quickshell, from Caelestia</span></li>
      <li><b>2026.09</b><span>Own repos and horneroctl</span></li>
      <li><b>2026.10</b><span>QA lab and extensions</span></li>
    </ol><p class="cap"><b>Timeline</b> each date after 2018 links to a commit</p>`,
  },
  install: {
    eyebrow: `Download · ${latest ? latest.version : 'Preview'}`,
    title: 'Download HorneroOS.',
    line: 'One signed x86_64 ISO with Desktop, Studio and Gaming Preview. Checksum and GPG signature on the release.',
    panel: `<ol class="ledger steps">
      <li><b>01</b><span>Download the ISO (${download.iso.sizeLabel})</span></li>
      <li><b>02</b><span>Verify SHA-256 and signature</span></li>
      <li><b>03</b><span>Pick edition and compositor</span></li>
    </ol><p class="cap"><b>Signed ISO</b> plus Arch packages for existing Arch systems</p>`,
  },
  studio: {
    eyebrow: 'CH 02 · Studio',
    title: 'Studio: make something real.',
    line: 'Preview creative edition: audio, video, streaming, design, photo and 3D. Not Supported yet.',
    panel: `<ul class="ledger">${['ardour', 'obs-studio', 'blender', 'krita', 'godot']
      .map((id) => `<li><b>${studioApps.get(id) ?? id}</b><span>Studio catalogue</span></li>`)
      .join('')}</ul><p class="cap"><b>Catalogue</b> generated from the pinned edition catalogue</p>`,
  },
  gaming: {
    eyebrow: 'CH 03 · Gaming',
    title: 'Gaming: play on your terms.',
    line: 'Preview gaming edition: Steam with Proton, Gamescope, GameMode and MangoHud, all opt-in.',
    panel: `<ul class="ledger">${['steam', 'lutris', 'bottles', 'wine', 'obs-studio']
      .map((id) => `<li><b>${gamingApps.get(id) ?? id}</b><span>${id === 'steam' ? 'proprietary · opt-in' : 'opt-in'}</span></li>`)
      .join('')}</ul><p class="cap"><b>Catalogue</b> nothing installs silently</p>`,
  },
  modes: {
    eyebrow: 'Atmospheres',
    title: 'One desktop, five atmospheres.',
    line: 'Focus, Everyday, Signal, Gaming and Studio change how the desktop behaves, not your layout or theme.',
    panel: `<ul class="ledger">${['Focus', 'Everyday', 'Signal', 'Gaming', 'Studio'].map((m, i) => `<li><b>${m}</b><span>CH 0${i + 1}</span></li>`).join('')}</ul><p class="cap"><b>${stageLabel(ledger.find((f) => f.id === 'experience-modes'))}</b> not in a published ISO yet</p>`,
  },
  chromatic: {
    eyebrow: 'Hornero Chromatic',
    title: 'Colour from your wallpaper.',
    line: 'Optional dynamic colour with contrast guarantees. Signal Night and Day stay the default.',
    panel: `<ol class="ledger steps"><li><b>01</b><span>Image</span></li><li><b>02</b><span>Seeds</span></li><li><b>03</b><span>Signal roles</span></li><li><b>04</b><span>Contrast gate</span></li></ol><p class="cap"><b>${stageLabel(ledger.find((f) => f.id === 'chromatic'))}</b> a diagram, not a screenshot</p>`,
  },
  desktop: {
    eyebrow: 'CH 01 · Desktop',
    title: 'Desktop: your desktop, your way.',
    line: 'The base edition: its own shell, layouts, themes, extensions and a Wayland compositor.',
    panel: `<ul class="ledger">${['layouts', 'themes', 'experience-modes', 'chromatic', 'pluginkit'].map(featureLine).join('')}</ul><p class="cap"><b>Feature ledger</b> status from the project data</p>`,
  },
  greeter: {
    eyebrow: 'Greeter',
    title: 'The Hornero greeter.',
    line: 'An original Signal login screen: a generative Pampa horizon, Javi, and accounts as channels. No third-party media.',
    panel: `<ul class="ledger">${[
      ['Background', greeterData.defaults.background],
      ['Palettes', greeterData.palettes.map((p) => p.name.replace('Signal ', '')).join(' · ')],
      ['Languages', greeterData.languages.join(' · ')],
      ['Bundled media', greeterData.bundledMedia ? 'yes' : 'none'],
    ]
      .map(([name, value]) => `<li><b>${name}</b><span>${value}</span></li>`)
      .join('')}</ul><p class="cap"><b>${stageLabel(ledger.find((f) => f.id === 'greeter-signal-original'))}</b> data from the pinned greeter, not a screenshot</p>`,
  },
};

// Hornero Signal Bezel, Signal Night values (RFC 0001 §3.2, amendment 2).
const page = ({ eyebrow, title, line, panel }) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:D;src:url(${fonts('ibm-plex-sans-condensed', 'ibm-plex-sans-condensed-latin-700-normal.woff2')});font-weight:700}
@font-face{font-family:S;src:url(${fonts('ibm-plex-sans', 'ibm-plex-sans-latin-400-normal.woff2')});font-weight:400}
@font-face{font-family:S;src:url(${fonts('ibm-plex-sans', 'ibm-plex-sans-latin-600-normal.woff2')});font-weight:600}
@font-face{font-family:M;src:url(${fonts('ibm-plex-mono', 'ibm-plex-mono-latin-500-normal.woff2')});font-weight:500}
*{box-sizing:border-box;margin:0;padding:0}
body{width:1200px;height:630px;position:relative;overflow:hidden;background:#0c0f13;color:#ece6da;font-family:S}
.band{position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(242,163,58,.09) 0 1px,transparent 1px 9px);clip-path:polygon(66% 0,82% 0,62% 100%,46% 100%)}
.edge{position:absolute;inset:0;background:#f2a33a;opacity:.55;clip-path:polygon(82% 0,calc(82% + 2px) 0,calc(62% + 2px) 100%,62% 100%)}
.rail{position:absolute;left:0;right:0;top:0;height:44px;display:flex;align-items:center;gap:14px;padding:0 48px;background:#13171d;border-bottom:1px solid #2c333c;font:500 14px M;letter-spacing:.08em;text-transform:uppercase;color:#a8abad}
.rail svg{width:26px;height:26px}.rail b{color:#ece6da;font:700 20px D;letter-spacing:.01em;text-transform:none}
.rail i{margin-left:auto;font-style:normal}
.eyebrow{position:absolute;left:48px;top:86px;font:500 15px M;letter-spacing:.08em;text-transform:uppercase;color:#f2a33a}
.eyebrow::before{content:"";display:inline-block;width:2px;height:12px;background:#f2a33a;margin-right:10px}
h1{position:absolute;left:48px;top:122px;width:500px;font:700 64px/1 D;letter-spacing:-.01em}
.line{position:absolute;left:48px;bottom:64px;width:470px;font-size:22px;line-height:1.4;color:#a8abad}
.panel{position:absolute;right:48px;top:100px;width:600px}
.shot{position:relative;padding:6px;border:1px solid #707a85;border-radius:5px;background:#101419}
.shot img{display:block;width:100%;height:100%;object-fit:contain}
.shot::before,.shot::after{content:"";position:absolute;width:16px;height:16px}
.shot::before{left:-7px;top:-7px;border-left:2px solid #f2a33a;border-top:2px solid #f2a33a}
.shot::after{right:-7px;bottom:-7px;border-right:2px solid #f2a33a;border-bottom:2px solid #f2a33a}
.shot{width:600px!important;height:340px!important}
.cap{margin-top:14px;font:500 14px M;color:#a8abad;letter-spacing:.03em}
.cap b{display:inline-block;margin-right:10px;padding:2px 8px;border-radius:3px;background:#16303f;color:#cde8f8;font-weight:500;text-transform:uppercase;letter-spacing:.06em;font-size:12px}
.ledger{list-style:none;border-top:1px solid #707a85;background:#181d24;border-radius:0 0 5px 5px}
.ledger li{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid #2c333c}
.ledger li b{font:700 30px D}
.ledger li span{display:flex;align-items:center;gap:12px;font:500 16px M;color:#a8abad;text-transform:uppercase;letter-spacing:.06em}
.meter{display:inline-flex;gap:3px}.meter i{width:14px;height:10px;background:#101419;box-shadow:inset 0 0 0 1px #2c333c}
.meter i.on.preview{background:#f2a33a;box-shadow:none}.meter i.on.planned{background:#707a85;box-shadow:none}
.meter i.on.experimental{background:#7ec1ea;box-shadow:none}.meter i.on.supported{background:#8bd49a;box-shadow:none}
.dates li{justify-content:flex-start;gap:20px}.dates li b{color:#f2a33a;font:500 24px M;min-width:120px}.dates li span{color:#ece6da;font:400 20px S;text-transform:none;letter-spacing:0}
.dates li.dash{border-bottom-style:dashed}
.steps li{justify-content:flex-start;gap:20px}.steps li b{color:#f2a33a;font:500 22px M}.steps li span{color:#ece6da;font:400 22px S;text-transform:none;letter-spacing:0}
</style></head><body>
<div class="band"></div><div class="edge"></div>
<div class="rail">${logo.replace('width="54" height="54"', '')}<b>HorneroOS</b><span>Workstation · Arch-based</span><i>horneroos.com</i></div>
<p class="eyebrow">${eyebrow}</p>
<h1>${title}</h1>
<p class="line">${line}</p>
<div class="panel">${panel}</div>
</body></html>`;

mkdirSync(out, { recursive: true });
const browser = await puppeteer.launch({ executablePath: process.env.CHROME || undefined, args: ['--no-sandbox'] });
for (const [name, card] of Object.entries(cards)) {
  const tab = await browser.newPage();
  await tab.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  const html = join(mkdtempSync(join(tmpdir(), 'hornero-og-')), `${name}.html`);
  writeFileSync(html, page(card));
  await tab.goto(pathToFileURL(html).href, { waitUntil: 'load' });
  await tab.evaluate(() => document.fonts.ready);
  await tab.screenshot({ path: join(out, `${name}.png`), type: 'png' });
  await tab.close();
  console.log(`og/${name}.png`);
}
await browser.close();
