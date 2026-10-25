# October 2026 redesign: decisions

The redesign changes how the site introduces HorneroOS. It keeps the Hornero
199X identity ([`DESIGN_SYSTEM_199X.md`](./DESIGN_SYSTEM_199X.md)), the Astro
static architecture, the pinned product-data model and every provenance rule.

## What problem it solves

The previous homepage opened on licensed Buenos Aires photography. A visitor met
a mood before they met the product, and the default social card repeated that
photograph. The history, the engineering evidence and the real desktop were all
on the site, but far below the first screen.

## Decisions

- **The desktop is the first thing on the page.** The homepage cover pairs the
  headline with the real `dashboard` QA capture at its native 16:9, loaded
  eagerly with high priority. On phones the capture sits directly under the
  headline.
- **The headline states something checkable.** "A Linux desktop, lived in since
  2018." refers to the maintainer's daily workstation. "El futuro se construye
  acá" stays as the broadcast ident in the identification plate.
- **Proof before claims.** Each homepage section is a capability shown on a real
  capture (layouts, theme change, a working session) or a source-backed record
  (timeline, ledger). The wallpaper atlas, greeter feature and poster moved to
  their own routes.
- **Two histories, never merged.** The 2018 workstation and the standalone
  HorneroOS repositories (September 2026) are different chapters. The timeline in
  `src/data/story.ts` gives every dated claim a commit or tag. The 2018 stage is
  the one claim public git history cannot confirm (the first public dotfiles
  commit is 2019-11-02), so it is marked "maintainer's account" and drawn with a
  dashed rule. The Caelestia ancestry and GPL-3.0 license are stated on the
  homepage and linked to the shell `NOTICE`.
- **Navigation follows visitor tasks.** Desktop, Editions, Extensions, Story,
  Docs, Search and Get HorneroOS replace a row of eight equal links and a "More"
  menu. Secondary routes live inside the Desktop and Story menus.
- **Progressive disclosure.** Extension cards show placement and declared
  capabilities first; checksums, source and install commands open on demand. The
  showroom ends with a ledger of every capture's source, theme, resolution and
  date.
- **Social previews are designed.** `scripts/build-og.mjs` renders 1200×630
  cards into `public/og/` from real captures, or from live site data where no
  capture exists (extensions, roots, install). The greeter card says "Not a
  screenshot".

## Motion

One orchestrated moment: the signal bars settle and the cover capture "tube-on"
wipe plays once on load. Cross-page navigation uses a 180 ms CSS view transition
with a stable header. Both are disabled under `prefers-reduced-motion`, nothing
loops, and no animation library is used.

## Truth guarantees that did not change

- No mock desktop UI: every product image is a real capture with provenance.
- Edition maturity, theme and layout counts, plugin lists and release status come
  from `src/data/product/`.
- QML extensions are never described as sandboxed.
- No ISO is advertised; `/install` states the real readiness of each step.
- AI-assisted artwork is labelled as such wherever it appears.
