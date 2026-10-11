# Components and styling

The website is built with Astro components and plain CSS. Most routes render
to static HTML and need no client-side framework.

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
river cyan, electric-sign magenta and sodium amber. Light mode carries those
signals over a mineral daylight canvas. A scene may use local overlay tokens
when text must remain legible over artwork; do not replace role tokens with
ad-hoc colors across ordinary UI.

The `SiteLayout` control exposes System, Light and Dark. System follows
`prefers-color-scheme`; explicit choices persist in local storage and sync
across tabs. Keep all three options keyboard accessible, visibly focused and
available in desktop and mobile navigation. Respect reduced motion.

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
