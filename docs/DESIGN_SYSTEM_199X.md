# Hornero 199X design system

Hornero 199X is the visual identity direction for HorneroOS: Argentine
retrofuturism from 1985–1995, realized with modern open-source technology.
It names the artistic direction and the optional desktop theme. It does not
rename the operating system, and it is not presented as a historical product.

## Creative ground

Principles are extracted from period sources, never copied artwork:

- Argentine broadcast graphics (ATC / Canal 7 era): strong geometric
  composition, identification numbers, television-safe type, diagonal motion.
- Argentine home computing (Talent MSX, Drean Commodore, K64 magazine):
  computing presented as exciting, approachable, and printed in warm manuals.
- Neighborhood arcades (Sacoa as historical reference): score-plate labels,
  mechanical panels, playful moments in small doses.
- La Plata: the orthogonal grid cut by diagonals becomes the site's
  signature background motif and layout geometry.
- The hornero: nest-arch curves (`--arch`) contrast the mechanical grid;
  the canonical bird mark is unchanged.

Balance: roughly 70% editorial/broadcast, 20% retrocomputing/arcade,
10% optimistic alternative-history science fiction. No vaporwave gradients,
no synthwave sunsets, no copied broadcaster logos, no fabricated screenshots.

## Dual modes

| Role | Nighttime / Broadcast (dark) | Daytime / Editorial (light) |
| --- | --- | --- |
| Background | Deep CRT ink `#0B1018` | Warm printed paper `#EDE5D2` |
| Surface | Midnight broadcast blue `#142745` | Printed card `#E3D8BF` |
| Raised | `#1B335C` | Warm white `#FFF6E6` |
| Text | Warm white `#FFF6E6` | Midnight `#142745` |
| Muted text | `#B9C6DE` | `#3D4E6B` |
| Accent (signal orange) | `#F08B43` | Burnt signal `#9A4A12` |
| Highlight (broadcast blue) | `#7FB0E6` (electric `#427CCD` decorative) | `#1F4E79` |
| Secondary (phosphor) | `#91C8A2` | `#7C4D0F` |
| Focus | `#91C8A2` | `#1F4E79` |

All text pairs above are ≥ 4.5:1 (WCAG AA) on their backgrounds; verified
when the tokens changed. Electric `#427CCD` is decorative in dark mode —
text on it uses CRT ink, and text in electric uses the lightened `#7FB0E6`.

## Typography

Self-hosted, unchanged from the previous system (investigated, retained):

- Display: Bricolage Grotesque Variable — editorial grotesque headlines.
- UI/body: Rubik Variable.
- Technical identification: Martian Mono Variable — plates, provenance,
  chapter numbers, metadata only. Never body copy.

Scale: `--step--1` to `--step-4` in `src/styles/global.css`.

## Grammar

- `.chapter` — numbered editorial chapter head (`01 / LA SEÑAL`). Numbers
  encode the homepage narrative order; they are not decoration elsewhere.
- `.broadcast-plate` / `.plate-id` — mechanical identification frame with
  registration corners and a mono ID line (`TRANSMISIÓN 001 · ARG / 199X`).
- `.signal-bars` — one brief signal-acquisition settle on load (electric,
  orange, phosphor). Disabled under `prefers-reduced-motion`.
- La Plata diagonal: a single 45° repeating line layer over the orthogonal
  grid in the global canvas.
- `--arch` keeps the hornero nest curve for framed imagery.

## Motion

CSS only, no dependencies. Mechanical panel timing (`--motion-panel`),
fast state changes (`--motion-fast`). Nothing loops, hijacks scroll, plays
audio, or blocks interaction. All decorative motion stops under
`prefers-reduced-motion: reduce`, and the design is complete without it.

## Language and truth

English is the product language. Spanish appears selectively as identity
("El futuro se construye acá", chapter names), never inside technical
explanations. Maturity labels (preview / experimental / planned) come from
the pinned product data; the 199X framing never upgrades a claim.

## Artwork provenance

`src/assets/brand/hornero-199x-poster.jpg` is original artwork generated
for this project (AI-assisted illustration, directed and reviewed by the
project): a hornero and its nest over the La Plata grid. It contains no
third-party imagery, no copied broadcaster artwork and no text. On the
homepage it is explicitly captioned as artwork, never as a screenshot.
The config wallpaper (`assets/brand/wallpaper/hornero-199x.svg` in
HorneroOS/config) is hand-authored original vector artwork.

The terminal logos in `src/assets/apps/` (`kitty.png`, `alacritty.svg`,
`ghostty.png`) are the official upstream application icons, vendored
unmodified from the Kitty, Alacritty and Ghostty projects for nominative
identification only. They remain the trademarks of their respective
projects and are not HorneroOS artwork.

## Desktop counterpart

`HorneroOS/config` ships an optional `hornero-199x` theme pack using the
same palette through the existing semantic-token pipeline (merged in
HorneroOS/config#83). Hornero Dark remains the factory default. The website
catalogue picks the theme up only through the pinned product-data workflow
(`npm run data:bump`) — never by hand-editing generated files.
