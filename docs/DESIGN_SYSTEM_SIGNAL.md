# Hornero Signal — website design system

The website implements **Hornero Signal**, the HorneroOS design language
defined by RFC 0001
([`development/rfc-0001-hornero-signal.md`](https://github.com/HorneroOS/docs/blob/main/development/rfc-0001-hornero-signal.md)
in HorneroOS/docs). The RFC is the authority; this page records how the
site maps it to CSS. Signal replaced the earlier Hornero 199X site identity
and its Rubik / Bricolage Grotesque / Martian Mono type.

> A contemporary engineering workstation from an alternate 1990s Argentina:
> broadcast control rooms, oscilloscope bezels, test cards, technical drawing
> sheets and the diagonal geometry of La Plata — executed with modern
> restraint.

The site has two jobs at once: a strong first impression (WOW) and the
quiet confidence of a dependable workstation (WORK). It must look finished
with every animation disabled.

## Colour roles

`src/styles/global.css` defines every RFC §3.1 role as a custom property in
kebab-case: `--ground --sunken --base --panel --raised --lifted --ink
--ink-muted --ink-faint --rule --rule-strong --signal --on-signal
--signal-well --on-signal-well --cue --on-cue --cue-well --on-cue-well
--phosphor --on-phosphor --phosphor-well --on-phosphor-well --alert
--on-alert --alert-well --on-alert-well --inverse --on-inverse
--inverse-signal --scrim --shadow --focus`.

Values are the RFC §3.2 flagship palettes as amended (amendment 2 tightens
Night `ruleStrong` and the Day `ruleStrong`, `signal`, `cue`/`focus`,
`phosphor` and `alert` so every role passes on `sunken` wells too):

- **Signal Night** (`:root`) — cool graphite instrument panels, warm
  phosphor-cream ink.
- **Signal Day** (`prefers-color-scheme: light`, or the Light choice) —
  warm technical-drawing paper with ink-black text.
- **Signal High Contrast** values apply at night under
  `prefers-contrast: more`.

`--glow` (Night `#FFB650`) is the optional emission role: a halo of at most
40 % alpha and 4 px blur on live items only, never text, never animated, and
never rendered in Signal Day.

The visual direction is **Signal Bezel**
([`development/signal-visual-language.md`](https://github.com/HorneroOS/docs/blob/main/development/signal-visual-language.md)):
rack-instrument faceplates, matte slabs split by short hairlines, readout
wells for changing values, amber only for what is live.

Usage on the site:

| Role | Use |
| --- | --- |
| `base` | Page background and the top rail |
| `ground` | Footer and brand bands (hero diagonal field) |
| `panel` / `raised` | Framed content, menus, hovered rows |
| `sunken` | Inline code, tracks, segmented-switch wells |
| `ink` / `ink-muted` | Body text / secondary text and eyebrows |
| `ink-faint` | Decorative separators only — never essential text |
| `rule` / `rule-strong` | Hairlines inside surfaces / control boundaries |
| `signal` | Primary action, current page (on-air bar), registration ticks |
| `cue` | Links, focus, informational labels |
| `phosphor` | Healthy / available / Supported |

Pages use roles only. A scene over artwork (the greeter recreation, theme
previews) may use local overlay values where text must stay legible over a
photograph; it never introduces new site-wide colours.

## Type

RFC §3.3 families, self-hosted through Fontsource (OFL-1.1), imported in
`SiteLayout.astro` with the latin subset:

| Token | Family | Use |
| --- | --- | --- |
| `--font-display` | IBM Plex Sans Condensed 500–700 | Headings, edition names |
| `--font-sans` | IBM Plex Sans 400–600 | Body and UI |
| `--font-mono` | IBM Plex Mono 400–500 | Eyebrows, readouts, provenance, code |

Numbers use tabular figures site-wide. The web scale is `--step--2` to
`--step-4`; the shell's pixel scale is tuned for 13 px chrome and is not
reused for long-form reading.

## Signature details

Each detail encodes state or structure; none is ornament.

- **Eyebrow** (`.eyebrow`, `.plate-id`) — Plex Mono, uppercase, +8 %
  tracking, `ink-muted`; the first item (`<b>`/`<strong>`) is a channel
  label in `signal`, e.g. `CH 02 · STUDIO`.
- **Hairline rules** — 1 px `rule` between sections and rows; `.rule-head`
  opens a section with a rule and an eyebrow.
- **On-air bar** — the current navigation item gets a 3 px `signal` bar on
  the edge facing the content; segmented switches mark their selected
  segment the same way.
- **Registration tick** — open menus and broadcast plates carry a 2×10 px
  `signal` tick on their leading top corner; `.ticked` frames real
  captures with corner registration marks.
- **Segmented meter** (`.meter`) — discrete VU-style segments with a mono
  readout; used for edition maturity (Planned → Experimental → Preview →
  Supported), always next to the text label.
- **Maturity tag** (`.maturity[data-maturity]`) — text label from the pinned
  edition catalogue; planned/in-development tags are dashed.
- **La Plata diagonal** — the 45° diagonal appears only in brand surfaces
  (the homepage hero field), never inside controls or reading surfaces.

Not part of the language: gradient blobs, glassmorphism or backdrop blur,
glow, neon gradients, pills everywhere, generic feature-card grids, glitch
effects, constant blinking or random hex decoration.

## Geometry

Radius `--radius-small 3px`, `--radius 5px`, `--radius-large 8px`; full
rounding only for genuinely circular elements. Spacing follows the 4 px grid
(`--space-*`). Elevation is the surface role plus one restrained shadow
(`--elevation`: `shadow` at 35 %, 12 px blur, 4 px offset).

## Motion

RFC §3.6 curves and durations are tokens: `--ease-standard --ease-enter
--ease-exit --ease-sweep --ease-settle --ease-settle-fast` and `--dur-quick
--dur-short --dur-medium --dur-long --dur-scan --dur-settle-fast
--dur-settle`.

- **Scan-in** — menus and the hero capture reveal with a clip wipe from the
  trigger/anchor edge plus 6 px travel and a fade (`scan-in-down`).
- **Settle** — small overshoot (≤ 4 % of travel) only for spatial motion:
  the on-air bar and meter segments. Never for opacity or colour.
- One orchestrated moment per page at most; sections do not fade in on
  scroll.
- `prefers-reduced-motion: reduce` sets durations to ~0; the page is
  complete without motion.

## Colour modes

`SiteLayout` offers System, Light and Dark. System is the default and follows
`prefers-color-scheme`; an explicit choice persists in `localStorage`
(`hornero-color-mode`) and syncs across tabs. Without JavaScript the CSS
media query alone selects Night or Day.

## Artwork provenance

`src/assets/brand/hornero-199x-poster.jpg` is original artwork generated
for this project (AI-assisted illustration, directed and reviewed by the
project): a hornero and its nest over the La Plata grid. It contains no
third-party imagery and no text. It belongs to the project's history (the
Hornero 199X direction that preceded Signal) and appears only on the Roots
page, captioned as an AI-assisted illustration, never as a screenshot.

The application logos in `src/assets/apps/` are the official upstream
icons, vendored unmodified from their projects for nominative
identification only: `kitty.png`, `alacritty.svg` and `ghostty.png` from
the Kitty, Alacritty and Ghostty projects; `btop.svg` from btop;
`yazi.png` from Yazi (downscaled from the 1254 px upstream original);
`niri.svg` from Niri (CC BY-SA 4.0, per the project's Name-and-Logo
page); and `hyprland.svg`, the Hyprland droplet mark extracted from the
official Hyprland logo lockup (`assets/header.svg` in hyprwm/Hyprland).
The Studio application icons (`ardour.png`, `guitarix.png`, `carla.png`,
`audacity.png`, `obs-studio.png`, `kdenlive.png`, `blender.png`,
`krita.png`, `gimp.png`, `inkscape.png`, `darktable.png`,
`rawtherapee.png`, `scribus.png`, `freecad.png`, `godot.png`) are the
official upstream app icons as published by Flathub's appstream
(metadata extracted from each project's own packaging), vendored
unmodified at 128 px for the Studio page and its docs chips.
`reaper.png` is the 32 px frame of the official favicon from
reaper.fm; REAPER is proprietary and its mark is shown for
identification only. yabridge, Graphite and Penpot have no official
icon vendored, so they render name-only — never a substitute glyph
presented as their logo.
The Gaming application icons (`steam.png`, `lutris.png`,
`bottles.png`, `wine.png`, `heroic-games-launcher.png`) are the
official upstream app icons as published by Flathub's appstream
(metadata extracted from each project's own packaging), vendored
unmodified at 128 px for the Gaming page. Steam is proprietary
(Valve Corporation) and its mark is shown for identification only,
always beside explicit proprietary/opt-in labelling; it is never
installed silently. vkBasalt and SteamVR have no official icon
vendored, so they render name-only. Proton, Gamescope, GameMode
and MangoHud likewise have no vendored logo on the Gaming page —
they appear as styled text badges only, never as substitute glyphs
presented as their logos.
They remain the trademarks of their respective projects and are not
HorneroOS artwork. `thunar.svg` (XFCE Thunar) and `copyq.svg` (CopyQ)
follow the same rule for the docs featured-tools chips. They render
through `src/components/AppLogo.astro`, always beside the visible
application name. Docs pages show at most three chips, mapped per slug
in `src/data/docs-apps.ts`, only for tools Hornero actually configures
or integrates on that page. Cava ships no official logo
upstream, so `AppLogo` draws a generic audio-visualizer glyph for it
in-house; that glyph is site iconography, never presented as Cava's
logo. Prose-only mentions (Polybar, Waybar, Calamares, SDDM and similar
lineage or status references) intentionally carry no logo.

## Imagery honesty

Every product image is a real capture with provenance
(`src/content/showroom/`). Captures taken before Hornero Signal shipped
carry `provenance.appearance: pre-signal` and render a visible
"Preview — previous appearance" label (`CaptureLabel.astro`,
`KilnStamp.astro`) until a Signal capture replaces them. See
[`CAPTURES.md`](./CAPTURES.md) for the capture slots QA fills.
