# Components and styling

The website is built with Astro components and plain CSS. Most routes render
to static HTML and need no client-side framework. Its visual language draws
from Buenos Aires after rain and the southern blue hour: city-grid lines,
river cyan, electric-sign magenta and sodium amber carry through the shared
canvas and navigation, while real Hornero captures provide the strongest
visual statements.

## Component boundaries

- `SiteLayout.astro` owns the shared document shell, main navigation, color
  mode selector and footer.
- `BaseHead.astro` owns document metadata and shared head tags.
- `ArchFrame.astro` renders responsive product imagery and its provenance
  plate. `KilnStamp.astro` carries capture metadata.
- `LayoutDiagram.astro` and `SourcePlate.astro` render focused product
  explanations.
- Route components under `src/pages/` own page-specific stories and styles.

Prefer `.astro` for content and interfaces that do not need browser state.
Extract a component when markup or behavior is reused; keep single-use,
page-specific composition with its route.

## Design tokens and color modes

`src/styles/global.css` defines the shared role tokens used across the site:
canvas, surface, line, text, muted text, accent, highlight, secondary and
focus. The palette is a cyberpunk interpretation of Buenos Aires: night ink,
river cyan, electric-sign magenta and sodium amber. The page-wide urban grid
and atmospheric color fields use those same tokens, so informational routes
keep the product identity without placing decoration over their reading
surfaces. Light mode carries the same signals over mineral daylight. A scene
may use local overlay tokens when text must remain legible over artwork; do
not replace role tokens with ad-hoc colors across ordinary UI.

The `SiteLayout` control exposes System, Light and Dark on every route.
System follows `prefers-color-scheme`; explicit choices persist in local
storage and sync across tabs. Dark mode draws from wet asphalt and night
signage. Light mode reads as river fog over city concrete, with the same cyan,
magenta and sodium signals. Keep all three options keyboard accessible,
visibly focused and available at desktop and mobile widths. Respect reduced
motion and preserve readable contrast in both palettes.

Rubik is the UI/display face and Martian Mono is reserved for provenance and
data. Both are self-hosted through Fontsource packages.

## Images and provenance

Use Astro's image pipeline for responsive formats, widths, sizes and loading
priority. Real product captures need meaningful alt text and a provenance
plate with available source, context, revision, theme, resolution and date.
The schema lives in `src/content.config.ts`. Keep the full image visible in
product frames; do not crop away controls or interface details that the
caption claims to show.

## Accessibility and motion

- Use semantic landmarks, ordered headings, descriptive link names and image
  alternatives.
- Preserve visible focus styles and sufficient contrast in both color modes.
- Use native controls (`button`, `fieldset`, `details`) where they fit.
- Keep decorative background grids and glow effects out of the accessibility
  tree.
- Disable nonessential transitions under `prefers-reduced-motion: reduce`.
- Avoid adding client-side state when CSS, native HTML or URL state is enough.

## Styling conventions

Use the global token system for site-wide styles and scoped `<style>` blocks
for route-specific composition. Keep selectors local, avoid a second utility
framework, and avoid introducing a UI framework island for static product
content. When a behavior genuinely needs JavaScript, keep it small, progressive
and test it with keyboard input as well as pointer interaction.

For content collections, schemas and source pins, see
[`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md) and
[`PRODUCT_DATA.md`](./PRODUCT_DATA.md).

The website's visual language is a presentation layer, not the desktop's
theme contract. For shared product identity and the sources that govern the
desktop, greeter, and installer, see the
[HorneroOS design language](/docs/development/design-language/).
