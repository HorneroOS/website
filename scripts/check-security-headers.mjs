#!/usr/bin/env node
/**
 * Security headers gate (node scripts/check-security-headers.mjs).
 *
 * Verifies that vercel.json defines production HTTP security headers on
 * `/(.*)` and that Content-Security-Policy retains the strict baseline
 * without breaking Pagefind WASM search or Astro static inline assets.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
const failures = [];

const rules = Array.isArray(config.headers) ? config.headers : [];
const globalRule = rules.find((rule) => rule.source === '/(.*)');
if (!globalRule || !Array.isArray(globalRule.headers)) {
  failures.push('vercel.json: missing headers rule for source "/(.*)"');
} else {
  const map = new Map(globalRule.headers.map((h) => [String(h.key).toLowerCase(), String(h.value)]));
  const expectedExact = {
    'strict-transport-security': 'max-age=63072000; includeSubDomains; preload',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'DENY',
    'referrer-policy': 'strict-origin-when-cross-origin',
    'permissions-policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  };

  for (const [key, value] of Object.entries(expectedExact)) {
    const actual = map.get(key);
    if (actual !== value) {
      failures.push(`vercel.json: header "${key}" expected "${value}", got "${actual ?? '<missing>'}"`);
    }
  }

  const csp = map.get('content-security-policy');
  if (!csp) {
    failures.push('vercel.json: missing Content-Security-Policy header');
  } else {
    const directives = new Map(
      csp
        .split(';')
        .map((part) => part.trim())
        .filter(Boolean)
        .map((part) => {
          const [name, ...tokens] = part.split(/\s+/);
          return [name.toLowerCase(), tokens];
        }),
    );

    const requireTokens = (name, tokens) => {
      const actual = directives.get(name);
      if (!actual) {
        failures.push(`CSP: missing directive "${name}"`);
        return;
      }
      for (const token of tokens) {
        if (!actual.includes(token)) {
          failures.push(`CSP: directive "${name}" must include ${token}`);
        }
      }
    };

    requireTokens('default-src', ["'self'"]);
    requireTokens('script-src', ["'self'", "'unsafe-inline'", "'wasm-unsafe-eval'"]);
    requireTokens('style-src', ["'self'", "'unsafe-inline'"]);
    requireTokens('img-src', ["'self'", 'data:']);
    requireTokens('font-src', ["'self'"]);
    requireTokens('media-src', ["'self'"]);
    requireTokens('connect-src', ["'self'"]);
    requireTokens('object-src', ["'none'"]);
    requireTokens('base-uri', ["'self'"]);
    requireTokens('frame-ancestors', ["'none'"]);
    requireTokens('form-action', ["'self'"]);

    if ((directives.get('script-src') ?? []).includes("'unsafe-eval'")) {
      failures.push("CSP: script-src must not allow 'unsafe-eval' (use 'wasm-unsafe-eval' for Pagefind)");
    }
  }
}

if (failures.length) {
  console.error('check-security-headers: FAILED');
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log('check-security-headers: OK (6 security headers verified on /(.*))');
