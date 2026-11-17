#!/usr/bin/env node
// Fails when the site's vendored brand marks drift back to the retired
// clay/terracotta palette. The canonical sources live in HorneroOS/config
// (assets/brand); copy from there when the mark changes.
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const files = ['public/favicon.svg', 'src/assets/brand/logo-dark.svg', 'src/assets/brand/logo-light.svg'];
const retired = ['#e07856', '#b24827', '#f2b749', '#2b1a11', '#7c4a2c', '#fffdf7', '#f6e9db', '#e89a55'];
let failed = false;
for (const f of files) {
  const text = readFileSync(join(root, f), 'utf8').toLowerCase();
  for (const c of retired) {
    if (text.includes(c)) {
      console.error(`BRAND-FAIL: ${f} contains retired colour ${c}`);
      failed = true;
    }
  }
  if (!text.includes('#ffb650')) {
    console.error(`BRAND-FAIL: ${f} lacks the Signal sun colour #FFB650`);
    failed = true;
  }
}
if (failed) process.exit(1);
console.log(`BRAND-PASS: ${files.length} vendored marks use Signal colours`);
