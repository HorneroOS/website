# Wallpaper gallery visual QA

Screenshots show the Astro production build of `/wallpapers` served locally after the six preview images finished loading. They are captures of the website page, not screenshots of the HorneroOS desktop.

| Capture | Viewport | Contents |
| --- | ---: | --- |
| `desktop.webp` | 1440 px wide | Full page with all six photographic cards and credits |
| `mobile.webp` | 390 px wide | Full page in the mobile navigation and single-column layout |

The browser check also exercised the “Urban night” filter (one matching scene) and confirmed there was no horizontal overflow at either viewport. Images are WebP exports of the raw Chromium screenshots, quality 82.
