# Homepage provenance first screen

These captures show the static production build of the homepage at desktop and
mobile sizes. The hero uses a real Hornero QA capture; its provenance plate is
visible beneath the image. The captures were taken with Playwright Chromium on
2026-10-06 and reviewed at native size.

The first screen states the eight-year Linux origin, links the public dotfiles
history, names the principal maintainer and contributor, and labels the
Calamares installer as a provisional development path awaiting VM acceptance.

## Capture details

- URL: `http://127.0.0.1:4323/` (Astro static production preview)
- Browser: Chromium revision 1247 through Playwright 1.63
- Desktop: 1280 × 720, [capture](desktop-1280x720.png)
- Mobile: 390 × 844, [capture](mobile-390x844.png)
- Source: `src/pages/index.astro`, SHA-256 `ad74aab7a543ef6a24c7f013c3bf43165b2ed281210a840071442a10d06bb27a`

## Desktop performance sample

| Viewport / metric | Before | After |
|---|---:|---:|
| Desktop JavaScript transfer (1280 × 720) | 0 B | 0 B |
| Desktop image transfer | 55,839 B | 55,839 B |
| Desktop page weight | 180,296 B | 141,885 B |
| Desktop LCP | 200 ms | 180 ms |
| Desktop CLS | 0 | 0.0064 |
| Mobile JavaScript transfer (390 × 844) | 0 B | 0 B |
| Mobile image transfer | 24,341 B | 24,341 B |
| Mobile page weight | 148,798 B | 110,387 B |
| Mobile LCP | 184 ms | 168 ms |
| Mobile CLS | 0.00016 | 0.00015 |

Before and after are production static builds served locally and measured in
fresh Chromium contexts at the same two viewports. Both builds transfer no
JavaScript. The first-screen content reduces transfer by about 21% on desktop
and 26% on mobile while retaining the same responsive image bytes. The desktop
0.0064 layout shift comes from the self-hosted provenance font changing the
width of metadata tokens after load; it remains below the 0.1 “good” CLS
threshold.
