#!/usr/bin/env node
// Fail the build when a page links to a route or file that dist/ does not
// contain (internal links only; external URLs are not fetched).
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) pages.push(p);
  }
};
walk(DIST);

const exists = (path) => {
  const clean = decodeURIComponent(path.split(/[?#]/)[0]);
  const target = join(DIST, clean);
  return (
    (existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')))) ||
    existsSync(`${target}.html`)
  );
};

let broken = 0;
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const m of html.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) {
    const url = m[1];
    if (url.startsWith('//')) continue;
    if (!exists(url)) {
      console.error(`BROKEN: /${relative(DIST, page)} -> ${url}`);
      broken += 1;
    }
  }
}
if (broken) {
  console.error(`check-links: ${broken} broken internal link(s)`);
  process.exit(1);
}
console.log(`check-links: ${pages.length} pages, all internal links resolve`);
