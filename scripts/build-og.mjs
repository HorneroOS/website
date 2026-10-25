#!/usr/bin/env node
// Renders the 1200x630 Open Graph cards in public/og/.
//
// Every card pairs the Hornero 199X identity with something real: a QA or
// contributor desktop capture (assets/screenshots/), or live site data (the
// extensions catalogue, the story timeline, the install packages). Nothing is
// mocked up. Re-run after changing a card, then commit the PNGs:
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
const fonts = (name, f) => file(`node_modules/@fontsource-variable/${name}/files/${f}`);
const logo = readFileSync(join(root, 'src/assets/brand/logo-dark.svg'), 'utf8').replace(/<svg /, '<svg width="54" height="54" ');
const plugins = JSON.parse(readFileSync(join(root, 'src/data/product/extensions.json'), 'utf8')).plugins;

const shot = (path, w, h, label) => `
  <div class="shot" style="width:${w}px;height:${h}px"><img src="${file(path)}" alt="" /></div>
  <p class="cap"><b>Real capture</b> ${label}</p>`;

const cards = {
  default: {
    title: 'A Linux desktop, lived in since 2018.',
    line: 'Arch-based and Wayland-first, from Argentina. Development preview.',
    panel: shot('assets/screenshots/curated/dashboard-extensions-2026-10-25.webp', 660, 371, 'Dashboard · live desktop · 2026-10-25'),
  },
  showroom: {
    title: 'Hornero desktop captures.',
    line: 'Each one lists its source, date and theme.',
    panel: shot('assets/screenshots/curated/terminal-tools-2026-10-25.webp', 660, 371, 'btop and yazi · live desktop · 2026-10-25'),
  },
  editions: {
    title: 'Desktop now, three profiles planned.',
    line: 'Server, Agents and Studio are defined but have no image.',
    panel: shot('assets/screenshots/certified/hornero-left.png', 594, 371, 'Hornero Left · Hornero Dark · QA 2026-10-03'),
  },
  extensions: {
    title: 'Official extensions.',
    line: 'Each plugin lists its checksum and declared permissions.',
    panel: `<ul class="ledger">${plugins
      .filter((p) => p.trust === 'official')
      .slice(0, 5)
      .map((p) => `<li><b>${p.name}</b><span>${p.placement}</span></li>`)
      .join('')}</ul><p class="cap"><b>Official catalogue</b> Extensions are not sandboxed</p>`,
  },
  roots: {
    title: 'History, with sources.',
    line: 'From one workstation to separate projects.',
    panel: `<ol class="ledger dates">
      <li class="dash"><b>2018</b><span>Personal Arch workstation</span></li>
      <li><b>2019.11</b><span>Dotfiles go public</span></li>
      <li><b>2026.02</b><span>Quickshell, from Caelestia</span></li>
      <li><b>2026.09</b><span>Own repos and horneroctl</span></li>
      <li><b>2026.10</b><span>QA lab and extensions</span></li>
    </ol><p class="cap"><b>Timeline</b> each date after 2018 links to a commit</p>`,
  },
  install: {
    title: 'Install on Arch. No ISO yet.',
    line: 'Desktop preview packages. The installer is in development.',
    panel: `<ul class="ledger mono">
      <li><b>horneroctl-bin</b><span>system CLI</span></li>
      <li><b>hornero-shell</b><span>Quickshell shell</span></li>
      <li><b>hornero-config</b><span>defaults, themes</span></li>
      <li><b>hornero-greeter</b><span>SDDM login</span></li>
    </ul><p class="cap"><b>AUR packages</b> development preview</p>`,
  },
  greeter: {
    title: 'The HorneroOS greeter.',
    line: 'An interactive recreation of the login screen.',
    panel: shot('public/media/greeter/ar-er-el-palmar-golden-hour.webp', 660, 371, 'Browser recreation · El Palmar, Entre Ríos').replace('Real capture', 'Not a screenshot'),
  },
};

const page = ({ title, line, panel }) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:B;src:url(${fonts('bricolage-grotesque', 'bricolage-grotesque-latin-wght-normal.woff2')});font-weight:200 800}
@font-face{font-family:R;src:url(${fonts('rubik', 'rubik-latin-wght-normal.woff2')});font-weight:300 900}
@font-face{font-family:M;src:url(${fonts('martian-mono', 'martian-mono-latin-wght-normal.woff2')});font-weight:100 800}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;position:relative;overflow:hidden;background:#0b1018;color:#fff6e6;font-family:R}
.grid{position:absolute;inset:0;background:
 repeating-linear-gradient(45deg,rgba(240,139,67,.07) 0 1px,transparent 1px 112px),
 linear-gradient(rgba(127,176,230,.06) 1px,transparent 1px) 0 0/56px 56px,
 linear-gradient(90deg,rgba(127,176,230,.06) 1px,transparent 1px) 0 0/56px 56px,
 radial-gradient(700px 420px at 100% 0,rgba(240,139,67,.16),transparent 70%)}
.plate{position:absolute;left:64px;top:52px;font:600 15px M;letter-spacing:.12em;text-transform:uppercase;color:#91c8a2}
.plate b{color:#fff6e6}
h1{position:absolute;left:64px;top:104px;width:470px;font:800 62px/1 B;letter-spacing:-.04em;text-wrap:balance}
.line{position:absolute;left:64px;top:392px;width:420px;font-size:25px;line-height:1.4;color:#b9c6de}
.brand{position:absolute;left:64px;bottom:48px;display:flex;align-items:center;gap:14px;font:800 26px B;letter-spacing:.04em;text-transform:uppercase}
.brand i{font-style:normal;color:#f08b43}
.bars{position:absolute;left:64px;bottom:118px;display:flex;gap:4px;width:150px}
.bars s{flex:1;height:5px;background:#427ccd}.bars s:nth-child(2){background:#f08b43}.bars s:nth-child(3){background:#91c8a2}
.panel{position:absolute;left:500px;top:112px;width:660px}
.shot{position:relative;padding:8px;border:1px solid rgba(127,176,230,.5);background:rgba(20,39,69,.6);box-shadow:0 30px 60px rgba(0,0,0,.5)}
.shot img{display:block;width:100%;height:100%;object-fit:contain}
.shot::before,.shot::after{content:"";position:absolute;width:20px;height:20px}
.shot::before{left:-8px;top:-8px;border-left:3px solid #f08b43;border-top:3px solid #f08b43}
.shot::after{right:-8px;bottom:-8px;border-right:3px solid #f08b43;border-bottom:3px solid #f08b43}
.cap{margin-top:16px;font:500 14px M;color:#b9c6de}.cap b{color:#f08b43;margin-right:10px}
.ledger{list-style:none;padding:0;border-top:1px solid #2e4a73;width:660px}
.ledger li{display:flex;justify-content:space-between;align-items:baseline;padding:20px 4px;border-bottom:1px solid #2e4a73}
.ledger li b{font:700 34px B;letter-spacing:-.02em}.ledger li span{font:500 17px M;color:#91c8a2}
.ledger.mono li b{font:600 28px M}
.dates li b{color:#f08b43;font:700 28px M;min-width:140px}.dates li span{color:#fff6e6;font:500 22px R}
.dates li{justify-content:flex-start;gap:12px}.dates li.dash{border-bottom-style:dashed}
</style></head><body>
<div class="grid"></div>
<p class="plate"><b>Transmisión 001</b> &nbsp; ARG / 199X</p>
<h1>${title}</h1>
<p class="line">${line}</p>
<div class="bars"><s></s><s></s><s></s></div>
<div class="brand">${logo}<span>Hornero <i>OS</i></span></div>
<div class="panel">${panel}</div>
</body></html>`;

mkdirSync(out, { recursive: true });
const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
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
