# Homepage provenance first screen

These captures show the static production build of the homepage at desktop and
mobile sizes. The hero uses a real Hornero QA capture; its provenance plate is
visible beneath the image. The captures were taken with Playwright Chromium on
2026-10-06 and reviewed at native size. The first screen credits Ulises
Jeremías as principal maintainer and Panda Foss as contributor, names Panda's
Anarchy Linux maintainer role, and explains that he will lead the future custom
HorneroOS installer.

The first screen states the eight-year Arch Linux origin, links the public
dotfiles history, names both maintainers and their roles, and labels the
Calamares installer as provisional until Panda Foss's custom version is ready.

## Capture details

- URL: `http://127.0.0.1:4323/` (Astro static production preview)
- Browser: Chromium revision 1247 through Playwright 1.63
- Desktop: 1280 × 720, [capture](desktop-1280x720.png)
- Mobile: 390 × 844, [capture](mobile-390x844.png)
- Source: `src/pages/index.astro`, SHA-256 `aabc9fbff0642fee54ad74afbbcc38807b3056534ee29c600838a985ceec1a28`

## Desktop performance sample

| Viewport / metric | Before | After |
|---|---:|---:|
| Desktop JavaScript transfer (1280 × 720) | 0 B | 0 B |
| Desktop image transfer | 55,839 B | 55,839 B |
| Desktop page weight | 180,296 B | 141,931 B |
| Desktop LCP | 200 ms | 264 ms |
| Desktop CLS | 0 | 0 |
| Mobile JavaScript transfer (390 × 844) | 0 B | 0 B |
| Mobile image transfer | 24,341 B | 13,954 B |
| Mobile page weight | 148,798 B | 15,154 B |
| Mobile LCP | 184 ms | 44 ms |
| Mobile CLS | 0.00016 | 0 |

Before and after are production static builds served locally and measured in
fresh Chromium contexts at the same two viewports. Both builds transfer no
JavaScript. The refreshed mobile screenshot uses the smaller responsive hero
image. Desktop image dimensions and transfer remain unchanged. The refreshed
copy introduces no measurable layout shift in the local preview. The final
desktop sample is a fresh Chromium session; the final mobile transfer sample
is a warm second viewport in that session and is not directly comparable to
the earlier cold-context mobile sample. These local preview figures are not a
network-performance claim.
