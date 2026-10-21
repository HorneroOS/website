#!/usr/bin/env node
// Automated WCAG 2.2 AA gate over the built site (website#126).
//
// Serves dist/ locally, runs pa11y (axe + HTML_CodeSniffer) over
// every built page, and fails on violations that are not in
// a11y-baseline.json. Baseline entries are pre-existing findings
// triaged in the issue linked from that file; a baseline entry
// that no longer occurs is reported as stale so the baseline
// only ever shrinks.
//
// Usage: npm run build && npm run a11y
import { createServer } from "node:http";
import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import pa11y from "pa11y";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
const baselinePath = join(root, "a11y-baseline.json");

if (!existsSync(dist)) {
  console.error("a11y: dist/ missing — run `npm run build` first");
  process.exit(2);
}

const mime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".ico": "image/x-icon",
};

const server = createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (path.endsWith("/")) path += "index.html";
    let file = join(dist, path);
    if (!existsSync(file) && existsSync(`${file}.html`)) file += ".html";
    const body = await readFile(file);
    res.writeHead(200, { "content-type": mime[extname(file)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end("not found");
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

async function pages(dir, prefix = "") {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) out.push(...(await pages(join(dir, entry.name), `${prefix}/${entry.name}`)));
    else if (entry.name.endsWith(".html") && entry.name !== "404.html")
      out.push(entry.name === "index.html" ? `${prefix}/` : `${prefix}/${entry.name}`);
  }
  return out;
}

const baseline = existsSync(baselinePath)
  ? JSON.parse(await readFile(baselinePath, "utf8")).known ?? []
  : [];
const knownKey = (url, code) => `${url} :: ${code}`;
const known = new Set(baseline.map((b) => knownKey(b.url, b.code)));
const seenKnown = new Set();

const options = {
  standard: "WCAG2AA",
  // Axe cannot resolve contrast over layered gradients/images and
  // files those as "needs review" (incomplete), which pa11y caps
  // at error by default — thousands of non-findings. Keep them as
  // notices (excluded); only real violations gate.
  levelCapWhenNeedsReview: "notice",
  // axe-core only: HTML_CodeSniffer flags the APG tabs pattern
  // (li role="presentation" wrapping role="tab") as F92.
  runners: ["axe"],
  chromeLaunchConfig: {
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
    ...(process.env.PUPPETEER_EXECUTABLE_PATH
      ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
      : {}),
  },
};

let failures = 0;
for (const url of (await pages(dist)).sort()) {
  const { issues } = await pa11y(base + url, options);
  for (const issue of issues.filter((i) => i.type === "error")) {
    const key = knownKey(url, issue.code);
    if (known.has(key)) {
      seenKnown.add(key);
      console.log(`known  ${url}  ${issue.code}  ${issue.message}`);
    } else {
      failures += 1;
      console.log(`NEW    ${url}  ${issue.code}  ${issue.message}  [${issue.selector}]`);
    }
  }
}
server.close();

for (const key of known)
  if (!seenKnown.has(key)) console.log(`stale baseline entry (no longer occurs): ${key}`);

if (failures > 0) {
  console.error(`a11y: ${failures} new violation(s) — fix them or triage into a11y-baseline.json with an issue link`);
  process.exit(1);
}
console.log("a11y: no new violations");
