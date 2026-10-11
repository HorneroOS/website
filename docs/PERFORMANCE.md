# Website performance

The website is a static product showcase, so its default performance strategy
is to render pages at build time and keep browser JavaScript limited to real
interactions.

## Keep delivery small

- Prefer Astro-rendered HTML and CSS; do not hydrate a whole page for static
  copy or a small control.
- `astro.config.mjs` emits static output and inlines the shared stylesheet.
  Review the generated HTML and asset sizes if global styles grow materially.
- The System/Light/Dark selector and mobile navigation are small shared
  interactions. Avoid adding a client state framework for them.
- Pagefind's search script loads on `/search/`, not every route.
- Self-host the site's fonts; do not introduce third-party font or analytics
  requests without a deliberate product decision.

## Images

- Use Astro's image pipeline to emit responsive AVIF/WebP with a fallback,
  suitable `widths` and accurate `sizes`.
- Give the first viewport's key image eager/high priority loading; defer
  below-the-fold captures and decode asynchronously.
- Use the smallest source image that still preserves visible interface text
  at its rendered size. Keep responsive variants instead of shipping a single
  oversized PNG to every device.
- Preserve meaningful alt text and provenance when optimizing or replacing a
  capture.
- Avoid autoplay video and large client-side galleries. Use a poster and
  native controls when motion genuinely improves product understanding.
- The interactive greeter recreation loads only its active, muted 10-second
  preview. Its scene cards use 1280x720 WebP posters; video playback pauses
  when the preview leaves the viewport or the document is hidden. Reduced
  motion and Save-Data start with still images.

## Validation

Run `npm run build` to exercise static generation, Pagefind indexing and
internal-link checks. For a presentation change, compare desktop and mobile
renders and inspect the browser network panel for oversized media or scripts.
Use Lighthouse or WebPageTest when investigating a measured regression; do
not report a performance score without a current run and its test conditions.
