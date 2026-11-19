# Information architecture and the world-expression plan

This page records the November 2026 audit of the site against the rest of
HorneroOS (Signal, Chromatic, experience modes, PluginKit 3, Javi), the
information architecture that follows from it, and how the site's visual
system maps to the shell's shared design tokens. The mission requirement is
L11 in the Hornero Signal mission matrix: the site expresses the same world
as the OS (a cozy, retrofuturist, Argentine personal workstation), shows only
authentic captures, says plainly what is released, experimental, unreleased
or planned, and stays fast and accessible.

## Audit (main at `ea5577a`, preview32 published)

Measured on a local production build, headless Chromium, 1440 / 1024 / 390
px, plus Lighthouse 12 (desktop-less default mobile profile):

| Measure | Result |
| --- | --- |
| Lighthouse `/`, `/en/`, `/studio` | performance 98, accessibility 100, best practices 100, SEO 100 |
| LCP / TBT / CLS | 2.1–2.3 s / 0 ms / 0 |
| Build | data pins, i18n parity, link check (142 pages) all green |

What was stale or missing relative to the OS:

1. **No page or section for Hornero Chromatic.** The word does not appear in
   `src/`. RFC 0002 and the engine (shell#567, #570, hornero#430) are on main.
2. **Experience modes are a footnote.** The homepage mentions them in a small
   concept note; there is no page. Focus, Everyday, Signal, Gaming and Studio
   are the product's most distinctive behaviour.
3. **No Desktop product page.** Studio and Gaming have pages; Desktop is an
   anchor on `/editions`.
4. **Javi is hidden.** `/companion` is a good page built from real shell
   frames, but it sits last in a menu and the homepage never mentions him.
5. **PluginKit is described as a catalogue only.** `/extensions` lists 36
   extensions well but does not tell the story of personal worlds
   (contribution surfaces, deck, per-instance settings).
6. **Capture currency.** The 18 pre-Signal captures were withdrawn. Every
   place that shows the desktop is now a pending capture slot with an
   honest plate; replacement captures are a QA hand-off (slots below).
7. **No machine-readable maturity for features.** Edition maturity came from
   the catalogue, but everything else was prose. Fixed by the feature ledger.
8. **Tone.** The Signal chrome is precise and calm, and the page copy is
   accurate, but warmth (Javi, play, the cozy half of the brief) lives only
   on one route.

What is already right and stays: Astro static output, self-hosted OFL fonts,
view-transition on navigation, reduced-motion handling, real provenance
labels, ES/EN parity gates, link and a11y gates.

## Information architecture

Navigation keeps the three groups plus Docs and Search.

| Group | Routes |
| --- | --- |
| Sistema / System | **`/why-horneroos`** (comparison + FAQ, no standalone `/faq/` route), `/editions`, **`/desktop`**, `/studio`, `/gaming`, `/install`, `/releases` |
| Experiencia / Experience | `/showroom`, **`/modes`**, **`/chromatic`**, `/layouts`, `/themes`, `/extensions`, `/companion` (Javi), `/wallpapers`, `/terminals`, `/greeter` |
| Proyecto / Project | `/roots`, `/releases`, design language |

Bold routes are new. Every route is bilingual with the existing `isEs`
conventions (`docs/I18N.md`) and has a localized wrapper under `src/pages/en/`.

### Status vocabulary

One vocabulary everywhere, from `src/data/features.ts`:

| Stage | Meaning | Source of truth |
| --- | --- | --- |
| Released / Lanzado | Contained in a published, tagged release | `features.json` `releasedIn` must name a tagged release in `releases.json`; editions derive from catalogue maturity |
| Experimental | Merged and flagged experimental | ledger, or compositor maturity |
| On main, unreleased | Merged to `main`, in no published release | ledger |
| Planned / Planificado | Not built yet | ledger or edition catalogue |

`scripts/check-feature-ledger.mjs` runs in `npm run build` and fails when a
feature claims `shipping` without a tagged release. When a release is cut and
`npm run data:bump` brings it in, the release PR flips the matching ledger
entries and `reviewedAgainst`; a stale `reviewedAgainst` warns. Page copy
renders `<StageBadge>`; it never types a status by hand.

### Capture slots

Every place that shows a desktop declares a slot in
`src/data/capture-slots.json`. A `pending` slot renders through
`<CaptureFigure>` as an instrument-panel plate that says "Pending — host
capture" and prints QA's brief. Nothing drawn ever stands in for a desktop.
See [`CAPTURES.md`](./CAPTURES.md).

## Visual system and shared tokens

The site reuses the shell's Hornero Signal roles as CSS custom properties
(`docs/DESIGN_SYSTEM_SIGNAL.md`): the kebab-case names are the shell's
`Signal.*` role names (`signal`, `cue`, `phosphor`, `ink`, `rule`, ...), the
values are the RFC 0001 palettes. No new site-wide colour is introduced for
this work. Chromatic pages show palette swatches as data (hex values in
labelled swatches), not as page theming.

Additions are structural, not decorative:

- `.stage-badge` — ledger stage (text label plus shape: solid, dotted, dashed).
- `.capture-plate` — the labelled pending-capture plate inside
  `CaptureFigure`.
- Motion stays within RFC 0001 §3.6 tokens; one orchestrated moment per page,
  none under `prefers-reduced-motion`.

Type: IBM Plex Sans Condensed / Sans / Mono (OFL-1.1), self-hosted.
