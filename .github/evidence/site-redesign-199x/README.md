# Site redesign: before and after

Captured with Chromium (puppeteer) from a production build of `main`
("before") and of this branch ("after"). The "before" desktop and phone shots
come from the live site at <https://horneroos.com>.

## Screenshots

- `before-*` / `after-*-desktop-1440.png`: first viewport at 1440 × 900 for the
  homepage, showroom, extensions, roots, install and editions.
- `before-home-mobile-390.png` / `after-home-mobile-390.png`: homepage first
  screen at 390 × 844. The real desktop capture is now visible without
  scrolling.
- `after-home-desktop-1920.png`, `after-home-tablet-768.png`,
  `after-home-light-1440.png`, `after-home-light-mobile-390.png`: other sizes
  and Light mode.
- `after-showroom-session-1440.png`: the new "One morning on the Beagle Channel"
  section with four contributor-provided captures from one live session.
- `before-home-full-1440.png` / `after-home-full-1440.png`: full pages, scaled to
  720 px wide. The page is shorter and every section has one job.
- `after-nav-keyboard-open-1440.png`, `after-nav-mobile-open-390.png`: the
  grouped navigation, opened with the keyboard (Enter opens, Escape closes and
  returns focus to the summary) and by touch.

## Homepage performance

Homepage, first load, median of 5 runs. Network: 1.6 Mbit/s down, 150 ms
latency. Mobile also throttles the CPU 4×. Both builds were served locally
from the same machine.

| Profile | Metric | Before | After |
| --- | --- | --- | --- |
| Mobile 390 × 844 | Largest Contentful Paint | 784 ms (a text paragraph) | 856 ms (the real desktop capture) |
| Mobile 390 × 844 | Cumulative Layout Shift | 0.0007 | 0.0001 |
| Mobile 390 × 844 | Transferred | 253 KB | 172 KB |
| Desktop 1440 × 900 | Largest Contentful Paint | 2100 ms (a photograph) | 1272 ms (the real desktop capture) |
| Desktop 1440 × 900 | Cumulative Layout Shift | 0.0011 | 0.0006 |
| Desktop 1440 × 900 | Transferred | 288 KB | 229 KB |

On a phone the LCP element is now the product image instead of text, so the
number is higher by design: the first screen paints the thing a visitor came to
see. Client JavaScript on first load is unchanged at zero external scripts
(menus, the colour switch and the look comparison are small inline scripts).
The hero capture is eager and `fetchpriority="high"`; all other captures are
lazy.

## Checks

```sh
npm run data:check   # product data matches pins
npm run lint         # clean
npm run type-check   # 0 errors, 0 warnings, 0 hints
npm run build        # 59 pages, all internal links resolve
npm run a11y         # no new violations
```

Also verified in a rendered browser: no horizontal overflow at 360, 390, 768,
1366, 1440 and 1920 px on all 15 routes; `prefers-reduced-motion` disables the
cover animation, the signal bars and the view transition; with JavaScript off
the dark/light comparison falls back to two side-by-side captures; the
comparison slider and the timeline rail work from the keyboard; every page's
`og:image` resolves to a 1200 × 630 PNG with alt text.
