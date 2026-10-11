# Cyberpunk Argentina visual and color-mode review

Captured from the local static Astro build using headless Chromium 153 on 2026-10-11. The screenshots use real current site pages and the shared color switch.

| Capture                        | Route         |   Viewport | Preference                   |
| ------------------------------ | ------------- | ---------: | ---------------------------- |
| `site-color-dark-desktop.png`  | Home          | 1366 × 900 | Dark                         |
| `site-color-light-desktop.png` | Home          | 1366 × 900 | Light                        |
| `themes-desktop.png`           | Themes        | 1366 × 900 | Dark                         |
| `themes-light-desktop.png`     | Themes        | 1366 × 900 | Light                        |
| `themes-dark-mobile.png`       | Themes        |  390 × 844 | System, OS emulated as Dark  |
| `themes-mobile.png`            | Themes        |  390 × 844 | System, OS emulated as Light |
| `docs-system-dark-mobile.png`  | Documentation |  390 × 844 | System, OS emulated as Dark  |
| `docs-system-light-mobile.png` | Documentation |  390 × 844 | System, OS emulated as Light |

Browser validation visited all 46 generated HTML routes at desktop and mobile widths. Each route exposed all three color choices, rendered the requested Dark/Light/System mode, and stayed within the viewport at 390 px. System mode followed a simulated operating-system preference change; explicit Dark persisted in local storage and across navigation.
