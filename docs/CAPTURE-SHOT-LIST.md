# Capture shot list

> Generated from `src/data/capture-slots.json` by `node scripts/gen-shot-list.mjs`. Do not edit by hand:
> change the data file and regenerate. `npm run check:captures` fails when this file is stale.

The site currently shows **no product imagery**. Every place that will show how HorneroOS looks is a
pending-capture plate driven by one slot in the data file. This is the definitive list of what the best
possible showcase needs: **144 slots** (33 P0, 71 P1, 40 P2) in
13 capture sessions, roughly 16 hours of work if done in order.

| Priority | Meaning | Slots |
| --- | --- | --- |
| P0 | Launch-critical: a page looks broken or dishonest without it | 33 |
| P1 | Important: makes the page convincing | 71 |
| P2 | Complementary: depth for people who keep reading | 40 |

## How to deliver a capture

1. Prepare the machine with the rules below, then shoot a session with `scripts/capture-helper.sh`.
2. Verify: `scripts/capture-helper.sh verify CAP-ID file`.
3. Fill the slot: `node scripts/capture-ingest.mjs CAP-ID file` (copies the file into `src/assets/captures/`,
   records its checksum and flips `status` to `captured`). By hand it is exactly two edits: drop the file
   in `src/assets/captures/` and set `status` and `file` on the slot.
4. `npm run build`; the plate becomes the real image in the same box, with no layout shift.

Send the files to the maintainer who runs the ingest, or open a PR containing the ingest result.

## Global rules

### Capture environment

- **Demo user.** Create a clean Linux user (for example `demo`, hostname `hornero`) with only HorneroOS-shipped
  applications, or use the QA VM (`uv run hornero-qa`). Never capture from a personal account.
- **Fixed output.** One output at 1920x1080, scale 1, 60 Hz. For P0 desktop slots marked "2x master" also
  capture a 3840x2160 output at scale 2 (logical size stays 1920x1080). `scripts/capture-helper.sh headless`
  creates a throw-away headless output so the physical monitor and its windows never appear.
- **Release pins.** Capture on the released composition (hornero-shell 1.3.0, hornero-config 0.4.0, hornero-greeter 1.1.0
  at the time of writing), not a dev checkout. Record the shell and config short SHAs with `--pins`.
- **Wallpapers.** Only HorneroOS-shipped, credited wallpapers (the Argentina collection). Each slot names its
  wallpaper; do not use personal or third-party images.
- **Clean desktop.** No popups unless the slot is about one, no stale notifications, do-not-disturb on while
  staging, Num Lock as found, cursor parked off the subject.
- **Shell safety.** Only restart the shell when `qs ipc call lock isLocked` is false; do not hot-reload.

### Privacy rules (apply to every slot)

- No personal names, e-mail addresses, hostnames, account avatars, process lists with personal paths, git remotes,
  browser tabs, chat or mail tray badges, calendar entries, Wi-Fi or Bluetooth device names, or location (weather).
- Editor, terminal and file-manager content must be a demo repository and demo files created for the shoot.
- Media must be CC0, CC BY with credit recorded, or made by the project. No copyrighted video, music or album art.
- Games and apps shown must be free software or freely redistributable demos. No storefront account visible.
- Review every file at 100 % before ingesting. If in doubt, retake.

### Format, naming and export

- Masters: PNG (lossless) at the slot size or larger with the exact aspect ratio; photographs as AVIF or JPG
  (sRGB, 3000x2000). The site builds AVIF and WebP from the master; do not pre-compress.
- Clips: 6 to 12 s, no audio, 1280x720, a seamless loop where possible, WebM (VP9) plus MP4 (H.264) and a PNG
  poster of the best frame, each file under 2.5 MB. They never autoplay for visitors who prefer reduced motion.
- Name files `CAP-ID.png` (suffix `-a`, `-b` for multi-part slots). Day and Night are separate slots.
- Alt text below is the planned text; adjust it to what the final frame really shows before ingesting.

## Sessions

| Session | Where | Slots | Time |
| --- | --- | --- | --- |
| [S01 Hero set, Signal Night and Day](#session-s01-hero-set-signal-night-and-day) | Host, demo user | 11 | 90 min |
| [S02 Layout sweep](#session-s02-layout-sweep) | Host, demo user (scripted) | 14 | 45 min |
| [S03 Themes and Appearance](#session-s03-themes-and-appearance) | Host, demo user | 17 | 90 min |
| [S04 Hornero Chromatic](#session-s04-hornero-chromatic) | Host, demo user | 9 | 60 min |
| [S05 Control Center tour](#session-s05-control-center-tour) | Host, demo user | 15 | 75 min |
| [S06 Shell surfaces and lock screen](#session-s06-shell-surfaces-and-lock-screen) | Host, demo user | 12 | 60 min |
| [S07 Extensions and instrument deck](#session-s07-extensions-and-instrument-deck) | Host, demo user | 6 | 45 min |
| [S08 Javi and the nest](#session-s08-javi-and-the-nest) | Host, demo user (after final art) | 10 | 60 min |
| [S09 Modes, Studio and Gaming](#session-s09-modes-studio-and-gaming) | Host, demo user, Studio and Gaming installed | 14 | 90 min |
| [S10 Terminals and horneroctl](#session-s10-terminals-and-horneroctl) | Host, demo user | 6 | 40 min |
| [S11 Multi-monitor and physical photography](#session-s11-multi-monitor-and-physical-photography) | Host + camera | 6 | 90 min |
| [S12 Greeter, boot, installer and updates](#session-s12-greeter-boot-installer-and-updates) | QA VM or a fresh install | 16 | 120 min |
| [S13 Motion clips](#session-s13-motion-clips) | Host, demo user (recorder) | 8 | 90 min |

Run the sessions in order: S01 sets the arrangement and wallpapers that S02 to S09 reuse.

## Session S01: Hero set, Signal Night and Day

Where: Host, demo user. About 90 minutes, 11 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-COMPARE-01 | P0 | screenshot | / |
| CAP-COMPARE-02 | P0 | screenshot | / |
| CAP-DESKTOP-01 | P0 | screenshot | /desktop |
| CAP-DESKTOP-02 | P0 | screenshot | /desktop |
| CAP-HERO-01 | P0 | screenshot | /, /editions |
| CAP-HERO-02 | P0 | screenshot | Showroom only |
| CAP-SIGNAL-01 | P0 | screenshot | / |
| CAP-SIGNAL-02 | P0 | screenshot | / |
| CAP-DESKTOP-03 | P1 | screenshot | Showroom only |
| CAP-DESKTOP-04 | P1 | screenshot | Showroom only |
| CAP-OG-01 | P2 | screenshot | Showroom only |

### CAP-COMPARE-01 Shell comparison, Night half

- **Priority:** P0 (launch-critical).
- **Page and section:** / · Home, shell comparison (wipe).
- **On screen:** Hornero Left in Signal Night with a terminal and a file manager open, framed to read as the left half of a day/night wipe.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Hornero Left, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply hornero-left --yes`.
  2. Open kitty (running `horneroctl doctor`) and yazi in `~/Pictures` of the demo user; tile them.
  3. Do NOT move the windows between this shot and CAP-COMPARE-02: they must overlay pixel for pixel.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Hornero Left in Signal Night with a terminal and a file manager open, framed to read as the left half of a day/night wipe.
- **Alt text (ES):** Hornero Left en Signal Night con una terminal y un administrador de archivos abiertos, encuadrado como la mitad izquierda de un barrido día/noche.

### CAP-COMPARE-02 Shell comparison, Day half

- **Priority:** P0 (launch-critical).
- **Page and section:** / · Home, shell comparison (wipe).
- **On screen:** The identical Hornero Left arrangement in Signal Day, same windows, same positions, same wallpaper brightness bracket.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Day, mode Everyday, layout Hornero Left, wallpaper patagonia.
- **Setup:**
  1. Switch only the theme: `horneroctl appearance theme set hornero-signal-day --yes`.
  2. Use `capture-helper.sh shot CAP-COMPARE-02` without touching any window.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The identical Hornero Left arrangement in Signal Day, same windows, same positions, same wallpaper brightness bracket.
- **Alt text (ES):** La disposición Hornero Left idéntica en Signal Day: mismas ventanas, mismas posiciones.

### CAP-DESKTOP-01 Desktop page hero

- **Priority:** P0 (launch-critical).
- **Page and section:** /desktop · Desktop, hero.
- **On screen:** A working Cockpit session across two workspaces: editor, terminal and a file manager, with the workspace needle visible on the bottom strip.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper pampa.
- **Setup:**
  1. Start from CAP-HERO-01, then open Thunar on a demo folder with ordinary file names and tile it on the right.
  2. Use a different wallpaper than the home hero: Pampa (`horneroctl wallpaper --help` or Settings, Appearance).
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** A working Cockpit session across two workspaces: editor, terminal and a file manager, with the workspace needle visible on the bottom strip.
- **Alt text (ES):** Una sesión de trabajo en Cockpit con tres ventanas (editor, terminal y administrador de archivos) y la aguja de espacios de trabajo visible en la franja inferior.

### CAP-DESKTOP-02 Layout Picker with live preview

- **Priority:** P0 (launch-critical).
- **Page and section:** /desktop · Desktop, customisation.
- **On screen:** The Layout Picker (Super+Shift+B) open over Cockpit with a different preset previewing live, the preset cards readable.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. From CAP-HERO-01 press Super+Shift+B.
  2. Hover (do not click) Hornero Left so the live preview is visible; capture while hovering using `capture-helper.sh shot --delay 3 CAP-DESKTOP-02`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Layout Picker (Super+Shift+B) open over Cockpit with a different preset previewing live, the preset cards readable.
- **Alt text (ES):** El selector de layouts (Super+Shift+B) abierto sobre Cockpit con otro preset en vista previa en vivo y las tarjetas legibles.

### CAP-HERO-01 Home hero, Cockpit at work

- **Priority:** P0 (launch-critical).
- **Page and section:** /, /editions · Home hero monitor; Editions, Desktop row.
- **On screen:** Cockpit in Signal Night over Buenos Aires Nocturno: an editor and a terminal running a build side by side, the top rail and bottom strip fully visible, no popups.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Apply Signal Night and Cockpit: `horneroctl appearance theme set hornero-signal-night --yes` then `horneroctl shell preset apply cockpit --yes`.
  2. Set the wallpaper to Buenos Aires Nocturno (Settings, Appearance, Wallpapers).
  3. Open a code editor on a small demo project and kitty running `cargo build` or `npm run build` (output must be a demo repo, not a personal one).
  4. Tile the two windows 50/50 on workspace 1; leave workspaces 2 and 3 holding one window each so the workspace needle shows activity.
  5. Close every popup, wait 10 s for telemetry to settle, then `capture-helper.sh shot CAP-HERO-01`.
- **Privacy:** Editor tab names, git branch, window titles and the terminal prompt must show the demo user and the demo repo.
- **Alt text (EN):** Cockpit in Signal Night over Buenos Aires Nocturno: an editor and a terminal running a build side by side, the top rail and bottom strip fully visible, no popups.
- **Alt text (ES):** Cockpit en Signal Night sobre Buenos Aires Nocturno: un editor y una terminal compilando lado a lado, con la barra superior y la franja inferior completas y sin popups.

### CAP-HERO-02 Home hero, Signal Day twin

- **Priority:** P0 (launch-critical).
- **Page and section:** Showroom only · Home hero (light colour mode).
- **On screen:** The same Cockpit arrangement as CAP-HERO-01 in Signal Day over Patagonia: editor and terminal, both rails visible.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Day, mode Everyday, layout Cockpit, wallpaper patagonia.
- **Setup:**
  1. Keep every window, size and workspace exactly as in CAP-HERO-01.
  2. `horneroctl appearance theme set hornero-signal-day --yes`; wallpaper Patagonia.
  3. Wait for the theme apply to finish (no transition in flight), then capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The same Cockpit arrangement as CAP-HERO-01 in Signal Day over Patagonia: editor and terminal, both rails visible.
- **Alt text (ES):** La misma disposición Cockpit de CAP-HERO-01 en Signal Day sobre Patagonia: editor y terminal, con ambas barras visibles.

### CAP-SIGNAL-01 Signal Bezel, Night detail

- **Priority:** P0 (launch-critical).
- **Page and section:** / · Home, Signal Bezel direction (replaces the concept render).
- **On screen:** Cockpit in Signal Night with the telemetry panel and one audio popout anchored to its trigger: the segmented meters and the bezel detail at full resolution.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Signal, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Switch to Signal mode (launcher: "Signal mode") so the instrument deck shows real telemetry.
  2. Click the volume item on the top rail to open its anchored popout.
  3. Keep the cursor off the popout; capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Cockpit in Signal Night with the telemetry panel and one audio popout anchored to its trigger: the segmented meters and the bezel detail at full resolution.
- **Alt text (ES):** Cockpit en Signal Night con el panel de telemetría y un popout de audio anclado a su disparador: medidores segmentados y detalle del bisel a resolución completa.

### CAP-SIGNAL-02 Signal Bezel, Day detail

- **Priority:** P0 (launch-critical).
- **Page and section:** / · Home, Signal Bezel direction.
- **On screen:** The same Signal Bezel framing in Signal Day over a Perito Moreno wallpaper: top rail, deck and one anchored popout.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Day, mode Signal, layout Cockpit, wallpaper patagonia.
- **Setup:**
  1. Same arrangement as CAP-SIGNAL-01 after `horneroctl appearance theme set hornero-signal-day --yes`.
  2. Keep Signal mode on.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The same Signal Bezel framing in Signal Day over a Perito Moreno wallpaper: top rail, deck and one anchored popout.
- **Alt text (ES):** El mismo encuadre Signal Bezel en Signal Day sobre un fondo del Perito Moreno: barra superior, deck y un popout anclado.

### CAP-DESKTOP-03 Cockpit rails, close-up

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Desktop, anatomy (planned).
- **On screen:** A tight 2x crop strip of the Cockpit top rail (launcher mark, quick actions, clock, tray, power) with the workspace strip, showing glyph and meter detail.
- **Spec:** 16:5, 1920x600 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Capture at output scale 2 (see helper `headless 3840 2160 2`) then crop the top 600 px with `capture-helper.sh crop`.
  2. Telemetry meters must be mid-range, not pinned at 0 or 100 %.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** A tight 2x crop strip of the Cockpit top rail (launcher mark, quick actions, clock, tray, power) with the workspace strip, showing glyph and meter detail.
- **Alt text (ES):** Una franja recortada a 2x de la barra superior de Cockpit (marca del launcher, acciones rápidas, reloj, bandeja, energía) con la franja de espacios, mostrando el detalle de glifos y medidores.

### CAP-DESKTOP-04 Workspace needle

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Desktop, workspaces (planned).
- **On screen:** Close view of the bottom strip with the workspace needle resting on workspace 2 and windows on three workspaces.
- **Spec:** 16:5, 1920x600 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Place one window on each of workspaces 1, 2, 3 and switch to 2.
  2. Capture the bottom 600 px strip.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Close view of the bottom strip with the workspace needle resting on workspace 2 and windows on three workspaces.
- **Alt text (ES):** Vista cercana de la franja inferior con la aguja de espacios sobre el espacio 2 y ventanas en tres espacios.

### CAP-OG-01 Social card photo crop

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Social cards.
- **On screen:** A 1200x630 crop of CAP-HERO-01 for the optional photographic social card, not used until captured.
- **Spec:** 40:21, 1200x630, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Crop from the CAP-HERO-01 master with `capture-helper.sh crop`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** A 1200x630 crop of CAP-HERO-01 for the optional photographic social card, not used until captured.
- **Alt text (ES):** Un recorte de 1200x630 de CAP-HERO-01 para la tarjeta social fotográfica opcional, sin uso hasta que exista.

## Session S02: Layout sweep

Where: Host, demo user (scripted). About 45 minutes, 14 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-LAYOUT-01 | P1 | screenshot | /layouts |
| CAP-LAYOUT-02 | P1 | screenshot | /layouts |
| CAP-LAYOUT-03 | P1 | screenshot | /layouts |
| CAP-LAYOUT-04 | P1 | screenshot | /layouts |
| CAP-LAYOUT-05 | P1 | screenshot | /layouts |
| CAP-LAYOUT-14 | P1 | screenshot | Showroom only |
| CAP-LAYOUT-06 | P2 | screenshot | Showroom only |
| CAP-LAYOUT-07 | P2 | screenshot | Showroom only |
| CAP-LAYOUT-08 | P2 | screenshot | Showroom only |
| CAP-LAYOUT-09 | P2 | screenshot | Showroom only |
| CAP-LAYOUT-10 | P2 | screenshot | Showroom only |
| CAP-LAYOUT-11 | P2 | screenshot | Showroom only |
| CAP-LAYOUT-12 | P2 | screenshot | Showroom only |
| CAP-LAYOUT-13 | P2 | screenshot | Showroom only |

### CAP-LAYOUT-01 Layout: Hornero Left

- **Priority:** P1 (important).
- **Page and section:** /layouts · Layouts, selected presets.
- **On screen:** Hornero Left in Signal Night: a full-featured side rail on the left edge. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Hornero Left, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply hornero-left --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Hornero Left in Signal Night: a full-featured side rail on the left edge. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Hornero Left en Signal Night: Un riel lateral completo sobre el borde izquierdo. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-02 Layout: Cockpit Clear

- **Priority:** P1 (important).
- **Page and section:** /layouts · Layouts, selected presets.
- **On screen:** Cockpit Clear in Signal Night: the Cockpit anatomy with no bar background: controls and telemetry straight on the wallpaper. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit Clear, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply cockpit-clear --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Cockpit Clear in Signal Night: the Cockpit anatomy with no bar background: controls and telemetry straight on the wallpaper. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Cockpit Clear en Signal Night: la anatomía de Cockpit sin fondo de barra: controles y telemetría sobre el fondo. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-03 Layout: Horizon

- **Priority:** P1 (important).
- **Page and section:** /layouts · Layouts, selected presets.
- **On screen:** Horizon in Signal Night: one top slab carrying every control, workspaces on a clear line below. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Horizon, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply horizon --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Horizon in Signal Night: one top slab carrying every control, workspaces on a clear line below. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Horizon en Signal Night: una losa superior con todos los controles y los espacios sobre una línea clara. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-04 Layout: Islands

- **Priority:** P1 (important).
- **Page and section:** /layouts · Layouts, selected presets.
- **On screen:** Islands in Signal Night: three floating islands: controls, time, status. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Islands, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply islands --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Islands in Signal Night: three floating islands: controls, time, status. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Islands en Signal Night: tres islas flotantes: controles, hora y estado. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-05 Layout: Dock Bottom

- **Priority:** P1 (important).
- **Page and section:** /layouts · Layouts, selected presets.
- **On screen:** Dock Bottom in Signal Night: a bottom dock with launcher, workspaces, pinned apps, tools and status. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Dock Bottom, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply dock-bottom --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Dock Bottom in Signal Night: a bottom dock with launcher, workspaces, pinned apps, tools and status. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Dock Bottom en Signal Night: un dock inferior con launcher, espacios, apps fijadas y estado. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-14 Cockpit Clear, day

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Layouts, Cockpit Clear.
- **On screen:** Cockpit Clear in Signal Day: labels legible straight over a bright wallpaper, proving the contrast treatment.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Day, mode Everyday, layout Cockpit Clear, wallpaper patagonia.
- **Setup:**
  1. `horneroctl shell preset apply cockpit-clear --yes` and Signal Day.
  2. Pick the brightest area of the wallpaper behind the rails.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Cockpit Clear in Signal Day: labels legible straight over a bright wallpaper, proving the contrast treatment.
- **Alt text (ES):** Cockpit Clear en Signal Day: etiquetas legibles directamente sobre un fondo claro, que demuestran el tratamiento de contraste.

### CAP-LAYOUT-06 Layout: Hornero Right

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Layouts, selected presets.
- **On screen:** Hornero Right in Signal Night: the full side rail on the right edge. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Hornero Right, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply hornero-right --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Hornero Right in Signal Night: the full side rail on the right edge. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Hornero Right en Signal Night: el riel lateral completo sobre el borde derecho. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-07 Layout: Minimal Left

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Layouts, selected presets.
- **On screen:** Minimal Left in Signal Night: a minimal rail with workspaces and power only. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Minimal Left, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply minimal-left --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Minimal Left in Signal Night: a minimal rail with workspaces and power only. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Minimal Left en Signal Night: un riel mínimo con espacios y energía. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-08 Layout: Minimal Top

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Layouts, selected presets.
- **On screen:** Minimal Top in Signal Night: a minimal top bar with workspaces and the clock. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Minimal Top, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply minimal-top --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Minimal Top in Signal Night: a minimal top bar with workspaces and the clock. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Minimal Top en Signal Night: una barra superior mínima con espacios y reloj. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-09 Layout: Classic Top

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Layouts, selected presets.
- **On screen:** Classic Top in Signal Night: a traditional top bar with the full set of status icons. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Classic Top, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply classic-top --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Classic Top in Signal Night: a traditional top bar with the full set of status icons. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Classic Top en Signal Night: una barra superior tradicional con todos los íconos de estado. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-10 Layout: Classic Bottom

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Layouts, selected presets.
- **On screen:** Classic Bottom in Signal Night: a traditional bottom bar with the full set of status icons. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Classic Bottom, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply classic-bottom --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Classic Bottom in Signal Night: a traditional bottom bar with the full set of status icons. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Classic Bottom en Signal Night: una barra inferior tradicional con todos los íconos de estado. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-11 Layout: Minimal Float

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Layouts, selected presets.
- **On screen:** Minimal Float in Signal Night: a soft floating top ribbon with workspaces, the time and a few tools. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Minimal Float, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply cozy-minimal --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Minimal Float in Signal Night: a soft floating top ribbon with workspaces, the time and a few tools. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Minimal Float en Signal Night: una cinta flotante superior con espacios, hora y pocas herramientas. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-12 Layout: Studio

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Layouts, selected presets.
- **On screen:** Studio in Signal Night: a creative top bar with media and audio at hand and a stable reserved canvas. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Studio, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply studio --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Studio in Signal Night: a creative top bar with media and audio at hand and a stable reserved canvas. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Studio en Signal Night: una barra superior creativa con medios y audio a mano y un lienzo reservado estable. Mismas dos ventanas y mismo fondo que el resto de los layouts.

### CAP-LAYOUT-13 Layout: Gaming

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Layouts, selected presets.
- **On screen:** Gaming in Signal Night: a minimal bottom bar with no logo. Same two windows and wallpaper as every other layout shot.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Gaming, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl shell preset apply gaming --yes` (dry run first with `--dry-run`).
  2. Keep the sweep arrangement: kitty (`horneroctl doctor`) left, yazi right, workspace 1, no popups.
  3. Wait 5 s for the bar to settle after the preset change.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Gaming in Signal Night: a minimal bottom bar with no logo. Same two windows and wallpaper as every other layout shot.
- **Alt text (ES):** Gaming en Signal Night: una barra inferior mínima sin logo. Mismas dos ventanas y mismo fondo que el resto de los layouts.

## Session S03: Themes and Appearance

Where: Host, demo user. About 90 minutes, 17 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-APPEARANCE-01 | P0 | screenshot | /themes |
| CAP-APPEARANCE-02 | P0 | screenshot | /themes |
| CAP-APPEARANCE-03 | P1 | screenshot | Showroom only |
| CAP-THEME-01 | P1 | screenshot | /themes |
| CAP-THEME-02 | P1 | screenshot | /themes |
| CAP-THEME-03 | P1 | screenshot | /themes |
| CAP-THEME-04 | P1 | screenshot | /themes |
| CAP-APPEARANCE-04 | P2 | screenshot | Showroom only |
| CAP-THEME-05 | P2 | screenshot | Showroom only |
| CAP-THEME-06 | P2 | screenshot | Showroom only |
| CAP-THEME-07 | P2 | screenshot | Showroom only |
| CAP-THEME-08 | P2 | screenshot | Showroom only |
| CAP-THEME-09 | P2 | screenshot | Showroom only |
| CAP-THEME-10 | P2 | screenshot | Showroom only |
| CAP-THEME-11 | P2 | screenshot | Showroom only |
| CAP-THEME-12 | P2 | screenshot | Showroom only |
| CAP-THEME-13 | P2 | screenshot | Showroom only |

### CAP-APPEARANCE-01 Control Center, Appearance themes

- **Priority:** P0 (launch-critical).
- **Page and section:** /themes · Themes, Appearance pane.
- **On screen:** Settings, Appearance, Themes page with the Signal themes row and the Hornero Originals cards visible, one card selected.
- **Spec:** 16:10, 1600x1000 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane appearance`.
  2. Resize the window to 1600x1000 (`capture-helper.sh window` does this).
  3. Scroll to the themes grid; select Signal Night.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Settings, Appearance, Themes page with the Signal themes row and the Hornero Originals cards visible, one card selected.
- **Alt text (ES):** Ajustes, Apariencia, página de temas con la fila de temas Signal y las tarjetas de Hornero Originals visibles, una seleccionada.

### CAP-APPEARANCE-02 Appearance: applied versus preview

- **Priority:** P0 (launch-critical).
- **Page and section:** /themes · Themes, apply and undo.
- **On screen:** Appearance page with a theme card hovered for preview while the applied theme stays marked, showing the preview and applied states side by side.
- **Spec:** 16:10, 1600x1000 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Open Appearance with Signal Night applied.
  2. Hover Signal Day (preview) without clicking; capture with `--delay 3`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Appearance page with a theme card hovered for preview while the applied theme stays marked, showing the preview and applied states side by side.
- **Alt text (ES):** Página de Apariencia con una tarjeta de tema en vista previa mientras el tema aplicado sigue marcado, mostrando ambos estados a la vez.

### CAP-APPEARANCE-03 Wallpaper picker

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Wallpapers.
- **On screen:** Appearance, Wallpapers: the Argentina collection grid with one wallpaper selected.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane appearance`, Wallpapers tab.
  2. Only HorneroOS-shipped wallpapers may be in the folder the picker scans (remove personal folders from the picker first).
- **Privacy:** The picker must not list personal wallpaper folders or third-party images.
- **Alt text (EN):** Appearance, Wallpapers: the Argentina collection grid with one wallpaper selected.
- **Alt text (ES):** Apariencia, Fondos: la grilla de la colección argentina con un fondo seleccionado.

### CAP-THEME-01 Signal Night, factory default

- **Priority:** P1 (important).
- **Page and section:** /themes · Themes, desktop gallery.
- **On screen:** Signal Night applied across shell, GTK app and terminal on the factory wallpaper.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl appearance theme set hornero-signal-night --yes`.
  2. Open kitty, Thunar and Settings (Appearance) together to show consistency; capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Signal Night applied across shell, GTK app and terminal on the factory wallpaper.
- **Alt text (ES):** Signal Night aplicado a shell, app GTK y terminal con el fondo de fábrica.

### CAP-THEME-02 Signal Day

- **Priority:** P1 (important).
- **Page and section:** /themes · Themes, desktop gallery.
- **On screen:** Signal Day applied across the same three windows.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Day, mode Everyday, layout Cockpit, wallpaper patagonia.
- **Setup:**
  1. Same arrangement as CAP-THEME-01; `horneroctl appearance theme set hornero-signal-day --yes`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Signal Day applied across the same three windows.
- **Alt text (ES):** Signal Day aplicado a las mismas tres ventanas.

### CAP-THEME-03 Signal Dusk

- **Priority:** P1 (important).
- **Page and section:** /themes · Themes, desktop gallery.
- **On screen:** Signal Dusk applied across the same three windows.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Dusk, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl appearance theme apply hornero-signal-dusk --yes`; same arrangement.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Signal Dusk applied across the same three windows.
- **Alt text (ES):** Signal Dusk aplicado a las mismas tres ventanas.

### CAP-THEME-04 Signal High Contrast

- **Priority:** P1 (important).
- **Page and section:** /themes · Themes, desktop gallery.
- **On screen:** Signal High Contrast applied across the same three windows, glow and scanlines off.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal High Contrast, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl appearance theme apply hornero-signal-contrast --yes`; same arrangement.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Signal High Contrast applied across the same three windows, glow and scanlines off.
- **Alt text (ES):** Signal Alto Contraste aplicado a las mismas tres ventanas, sin brillo ni scanlines.

### CAP-APPEARANCE-04 Fonts, icons and transparency

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Customisation.
- **On screen:** Appearance controls for fonts, icon theme, transparency and animations, all with live values.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Scroll the Appearance pane to the fonts and transparency block; capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Appearance controls for fonts, icon theme, transparency and animations, all with live values.
- **Alt text (ES):** Controles de Apariencia para fuentes, tema de íconos, transparencia y animaciones, con valores en vivo.

### CAP-THEME-05 Hornero Original: Patagonia

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Themes, Hornero Originals.
- **On screen:** The Patagonia Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Patagonia, mode Everyday, layout Cockpit, wallpaper patagonia.
- **Setup:**
  1. `horneroctl appearance theme apply patagonia --yes`.
  2. Same three-window arrangement as CAP-THEME-01.
  3. Credit line comes from the wallpaper catalogue; do not add one to the capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Patagonia Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Alt text (ES):** El Hornero Original Patagonia aplicado: su paleta regional en la shell, una terminal y una ventana GTK, sobre su fotografía acreditada.

### CAP-THEME-06 Hornero Original: Quebrada

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Themes, Hornero Originals.
- **On screen:** The Quebrada Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Quebrada, mode Everyday, layout Cockpit, wallpaper quebrada.
- **Setup:**
  1. `horneroctl appearance theme apply quebrada --yes`.
  2. Same three-window arrangement as CAP-THEME-01.
  3. Credit line comes from the wallpaper catalogue; do not add one to the capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Quebrada Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Alt text (ES):** El Hornero Original Quebrada aplicado: su paleta regional en la shell, una terminal y una ventana GTK, sobre su fotografía acreditada.

### CAP-THEME-07 Hornero Original: Iberá

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Themes, Hornero Originals.
- **On screen:** The Iberá Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Iberá, mode Everyday, layout Cockpit, wallpaper ibera.
- **Setup:**
  1. `horneroctl appearance theme apply ibera --yes`.
  2. Same three-window arrangement as CAP-THEME-01.
  3. Credit line comes from the wallpaper catalogue; do not add one to the capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Iberá Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Alt text (ES):** El Hornero Original Iberá aplicado: su paleta regional en la shell, una terminal y una ventana GTK, sobre su fotografía acreditada.

### CAP-THEME-08 Hornero Original: Fin del Mundo

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Themes, Hornero Originals.
- **On screen:** The Fin del Mundo Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Fin del Mundo, mode Everyday, layout Cockpit, wallpaper fin-del-mundo.
- **Setup:**
  1. `horneroctl appearance theme apply fin-del-mundo --yes`.
  2. Same three-window arrangement as CAP-THEME-01.
  3. Credit line comes from the wallpaper catalogue; do not add one to the capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Fin del Mundo Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Alt text (ES):** El Hornero Original Fin del Mundo aplicado: su paleta regional en la shell, una terminal y una ventana GTK, sobre su fotografía acreditada.

### CAP-THEME-09 Hornero Original: Buenos Aires Nocturno

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Themes, Hornero Originals.
- **On screen:** The Buenos Aires Nocturno Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Buenos Aires Nocturno, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl appearance theme apply buenos-aires-nocturno --yes`.
  2. Same three-window arrangement as CAP-THEME-01.
  3. Credit line comes from the wallpaper catalogue; do not add one to the capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Buenos Aires Nocturno Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Alt text (ES):** El Hornero Original Buenos Aires Nocturno aplicado: su paleta regional en la shell, una terminal y una ventana GTK, sobre su fotografía acreditada.

### CAP-THEME-10 Hornero Original: Pampa

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Themes, Hornero Originals.
- **On screen:** The Pampa Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Pampa, mode Everyday, layout Cockpit, wallpaper pampa.
- **Setup:**
  1. `horneroctl appearance theme apply pampa --yes`.
  2. Same three-window arrangement as CAP-THEME-01.
  3. Credit line comes from the wallpaper catalogue; do not add one to the capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Pampa Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Alt text (ES):** El Hornero Original Pampa aplicado: su paleta regional en la shell, una terminal y una ventana GTK, sobre su fotografía acreditada.

### CAP-THEME-11 Hornero Original: Cuyo

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Themes, Hornero Originals.
- **On screen:** The Cuyo Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Cuyo, mode Everyday, layout Cockpit, wallpaper cuyo.
- **Setup:**
  1. `horneroctl appearance theme apply cuyo --yes`.
  2. Same three-window arrangement as CAP-THEME-01.
  3. Credit line comes from the wallpaper catalogue; do not add one to the capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Cuyo Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Alt text (ES):** El Hornero Original Cuyo aplicado: su paleta regional en la shell, una terminal y una ventana GTK, sobre su fotografía acreditada.

### CAP-THEME-12 Hornero Original: Iguazú

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Themes, Hornero Originals.
- **On screen:** The Iguazú Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Iguazú, mode Everyday, layout Cockpit, wallpaper iguazu.
- **Setup:**
  1. `horneroctl appearance theme apply iguazu --yes`.
  2. Same three-window arrangement as CAP-THEME-01.
  3. Credit line comes from the wallpaper catalogue; do not add one to the capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Iguazú Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Alt text (ES):** El Hornero Original Iguazú aplicado: su paleta regional en la shell, una terminal y una ventana GTK, sobre su fotografía acreditada.

### CAP-THEME-13 Hornero Original: Sierras

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Themes, Hornero Originals.
- **On screen:** The Sierras Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Sierras, mode Everyday, layout Cockpit, wallpaper sierras.
- **Setup:**
  1. `horneroctl appearance theme apply sierras --yes`.
  2. Same three-window arrangement as CAP-THEME-01.
  3. Credit line comes from the wallpaper catalogue; do not add one to the capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Sierras Hornero Original applied: its regional palette on the shell, a terminal and a GTK window, over its credited photograph.
- **Alt text (ES):** El Hornero Original Sierras aplicado: su paleta regional en la shell, una terminal y una ventana GTK, sobre su fotografía acreditada.

## Session S04: Hornero Chromatic

Where: Host, demo user. About 60 minutes, 9 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-CHROMA-01 | P0 | screenshot | /chromatic |
| CAP-CHROMA-02 | P0 | screenshot | /chromatic |
| CAP-CHROMA-07 | P0 | screenshot | /chromatic |
| CAP-CHROMA-03 | P1 | screenshot | Showroom only |
| CAP-CHROMA-04 | P1 | screenshot | Showroom only |
| CAP-CHROMA-05 | P1 | screenshot | Showroom only |
| CAP-CHROMA-06 | P1 | screenshot | Showroom only |
| CAP-CHROMA-08 | P1 | screenshot | Showroom only |
| CAP-CHROMA-09 | P1 | screenshot | Showroom only |

### CAP-CHROMA-01 Chromatic, wallpaper A

- **Priority:** P0 (launch-critical).
- **Page and section:** /chromatic · Chromatic, before/after pair.
- **On screen:** Hornero Chromatic active over the Pampa wallpaper: Cockpit with a terminal and Settings, Appearance, the generated warm palette on shell, terminal and GTK.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper pampa.
- **Setup:**
  1. Settings, Appearance: choose Hornero Chromatic, then set the wallpaper to Pampa.
  2. Wait until the status shows the palette applied and the contrast gate passed.
  3. Arrangement for all Chromatic pairs: kitty left (`horneroctl appearance status`), Settings Appearance right.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Hornero Chromatic active over the Pampa wallpaper: Cockpit with a terminal and Settings, Appearance, the generated warm palette on shell, terminal and GTK.
- **Alt text (ES):** Hornero Chromatic activo sobre el fondo Pampa: Cockpit con una terminal y Ajustes, Apariencia, con la paleta cálida generada en shell, terminal y GTK.

### CAP-CHROMA-02 Chromatic, wallpaper B

- **Priority:** P0 (launch-critical).
- **Page and section:** /chromatic · Chromatic, before/after pair.
- **On screen:** The same arrangement as CAP-CHROMA-01 over the Fin del Mundo wallpaper: the cool palette now on every surface.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper fin-del-mundo.
- **Setup:**
  1. Change only the wallpaper (Fin del Mundo); do not move any window.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The same arrangement as CAP-CHROMA-01 over the Fin del Mundo wallpaper: the cool palette now on every surface.
- **Alt text (ES):** La misma disposición que CAP-CHROMA-01 sobre el fondo Fin del Mundo: la paleta fría en todas las superficies.

### CAP-CHROMA-07 Chromatic settings and contrast gate

- **Priority:** P0 (launch-critical).
- **Page and section:** /chromatic · Chromatic, how it works.
- **On screen:** The Chromatic section of Settings, Appearance: the toggle, the seed colours extracted from the wallpaper and the contrast result for each Signal role.
- **Spec:** 16:10, 1600x1000 (also a 2x master), PNG master (lossless).
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper pampa.
- **Setup:**
  1. Appearance pane scrolled to the Chromatic block with the wallpaper from CAP-CHROMA-01.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Chromatic section of Settings, Appearance: the toggle, the seed colours extracted from the wallpaper and the contrast result for each Signal role.
- **Alt text (ES):** La sección Chromatic de Ajustes, Apariencia: el interruptor, los colores semilla extraídos del fondo y el resultado de contraste de cada rol Signal.

### CAP-CHROMA-03 Chromatic palette: Quebrada

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Chromatic, palette gallery.
- **On screen:** Hornero Chromatic over Quebrada: the same arrangement as the pair, a distinct palette family.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper quebrada.
- **Setup:**
  1. Change only the wallpaper to Quebrada; keep the pair arrangement.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Hornero Chromatic over Quebrada: the same arrangement as the pair, a distinct palette family.
- **Alt text (ES):** Hornero Chromatic sobre Quebrada: la misma disposición del par, con una familia de paleta distinta.

### CAP-CHROMA-04 Chromatic palette: Iberá

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Chromatic, palette gallery.
- **On screen:** Hornero Chromatic over Iberá: the same arrangement as the pair, a distinct palette family.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper ibera.
- **Setup:**
  1. Change only the wallpaper to Iberá; keep the pair arrangement.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Hornero Chromatic over Iberá: the same arrangement as the pair, a distinct palette family.
- **Alt text (ES):** Hornero Chromatic sobre Iberá: la misma disposición del par, con una familia de paleta distinta.

### CAP-CHROMA-05 Chromatic palette: Iguazú

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Chromatic, palette gallery.
- **On screen:** Hornero Chromatic over Iguazú: the same arrangement as the pair, a distinct palette family.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper iguazu.
- **Setup:**
  1. Change only the wallpaper to Iguazú; keep the pair arrangement.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Hornero Chromatic over Iguazú: the same arrangement as the pair, a distinct palette family.
- **Alt text (ES):** Hornero Chromatic sobre Iguazú: la misma disposición del par, con una familia de paleta distinta.

### CAP-CHROMA-06 Chromatic palette: Sierras

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Chromatic, palette gallery.
- **On screen:** Hornero Chromatic over Sierras: the same arrangement as the pair, a distinct palette family.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper sierras.
- **Setup:**
  1. Change only the wallpaper to Sierras; keep the pair arrangement.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Hornero Chromatic over Sierras: the same arrangement as the pair, a distinct palette family.
- **Alt text (ES):** Hornero Chromatic sobre Sierras: la misma disposición del par, con una familia de paleta distinta.

### CAP-CHROMA-08 Chromatic rejects a bad palette

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Chromatic, contrast gate.
- **On screen:** Chromatic over a low-contrast wallpaper showing the fallback or the corrected roles with the contrast gate message.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Use a flat grey HorneroOS-licensed or self-made wallpaper (not third-party).
  2. Capture the Appearance pane message.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Chromatic over a low-contrast wallpaper showing the fallback or the corrected roles with the contrast gate message.
- **Alt text (ES):** Chromatic sobre un fondo de bajo contraste mostrando el respaldo o los roles corregidos y el mensaje del control de contraste.

### CAP-CHROMA-09 Terminals follow the palette

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Chromatic and terminals.
- **On screen:** kitty, Alacritty and Ghostty tiled side by side, each showing `horneroctl appearance status` in the active Chromatic palette.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper ibera.
- **Setup:**
  1. Install the three terminals on the capture machine only.
  2. Open each running the same command; capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** kitty, Alacritty and Ghostty tiled side by side, each showing `horneroctl appearance status` in the active Chromatic palette.
- **Alt text (ES):** kitty, Alacritty y Ghostty en mosaico, cada una mostrando `horneroctl appearance status` con la paleta Chromatic activa.

## Session S05: Control Center tour

Where: Host, demo user. About 75 minutes, 15 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-CC-01 | P0 | screenshot | Showroom only |
| CAP-CC-03 | P0 | screenshot | /desktop |
| CAP-CC-04 | P0 | screenshot | /modes |
| CAP-CC-07 | P0 | screenshot | /extensions |
| CAP-CC-02 | P1 | screenshot | Showroom only |
| CAP-CC-05 | P1 | screenshot | Showroom only |
| CAP-CC-06 | P1 | screenshot | Showroom only |
| CAP-CC-08 | P1 | screenshot | Showroom only |
| CAP-CC-09 | P1 | screenshot | Showroom only |
| CAP-CC-10 | P1 | screenshot | Showroom only |
| CAP-CC-13 | P1 | screenshot | Showroom only |
| CAP-CC-14 | P1 | screenshot | Showroom only |
| CAP-CC-11 | P2 | screenshot | Showroom only |
| CAP-CC-12 | P2 | screenshot | Showroom only |
| CAP-CC-15 | P2 | screenshot | Showroom only |

### CAP-CC-01 Control Center: Find a setting

- **Priority:** P0 (launch-critical).
- **Page and section:** Showroom only · Desktop, Control Center.
- **On screen:** Control Center, the Control Center with Find a setting (Ctrl+,) open and a query such as "wallpaper" matched.
- **Spec:** 16:10, 1600x1000 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Open with `horneroctl config gui`, press Ctrl+, and type `wallpaper`.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-01`), pane id `search`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Control Center with Find a setting (Ctrl+,) open and a query such as "wallpaper" matched.
- **Alt text (ES):** Centro de control, el Centro de control con Buscar un ajuste (Ctrl+,) abierto y una consulta como «wallpaper» resuelta.

### CAP-CC-03 Control Center: Bars pane with live preview

- **Priority:** P0 (launch-critical).
- **Page and section:** /desktop · Desktop, customisation.
- **On screen:** Control Center, the Bars pane showing which entries each bar carries and their order, with the live preview of the bar on the left.
- **Spec:** 16:10, 1600x1000 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane taskbar`; drag one entry so the preview moves, capture while the live preview shows the change.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-03`), pane id `taskbar`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Bars pane showing which entries each bar carries and their order, with the live preview of the bar on the left.
- **Alt text (ES):** Centro de control, el panel Barras con las entradas de cada barra y su orden, con la vista previa en vivo de la barra.

### CAP-CC-04 Control Center: Experience pane

- **Priority:** P0 (launch-critical).
- **Page and section:** /modes · Modes.
- **On screen:** Control Center, the Experience pane listing the five modes with Signal selected and the Switch button visible.
- **Spec:** 16:10, 1600x1000 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane experience`.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-04`), pane id `experience`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Experience pane listing the five modes with Signal selected and the Switch button visible.
- **Alt text (ES):** Centro de control, el panel Experiencia con los cinco modos, Signal seleccionado y el botón Cambiar visible.

### CAP-CC-07 Control Center: Extensions pane

- **Priority:** P0 (launch-critical).
- **Page and section:** /extensions · Extensions.
- **On screen:** Control Center, the Extensions pane listing official extensions with their trust and load state, and one extension expanded to its declared permissions.
- **Spec:** 16:10, 1600x1000 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane extensions`; enable 3 official extensions first; expand one.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-07`), pane id `extensions`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Extensions pane listing official extensions with their trust and load state, and one extension expanded to its declared permissions.
- **Alt text (ES):** Centro de control, el panel Extensiones con las extensiones oficiales, su confianza y estado de carga, y una expandida con sus permisos declarados.

### CAP-CC-02 Control Center: Layout pane

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Customisation.
- **On screen:** Control Center, the Layout pane with the preset cards and the Cockpit Clear styles.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane layout`.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-02`), pane id `layout`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Layout pane with the preset cards and the Cockpit Clear styles.
- **Alt text (ES):** Centro de control, el panel Layout con las tarjetas de presets y los estilos de Cockpit Clear.

### CAP-CC-05 Control Center: Keybinds pane

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Shortcuts.
- **On screen:** Control Center, the Keybinds pane with a search filter applied and one binding in rebind state.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane keybinds`; search "workspace"; click a binding to enter capture state; capture; press Escape.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-05`), pane id `keybinds`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Keybinds pane with a search filter applied and one binding in rebind state.
- **Alt text (ES):** Centro de control, el panel Atajos con un filtro de búsqueda aplicado y un atajo en estado de reasignación.

### CAP-CC-06 Control Center: Displays pane

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Multi-monitor.
- **On screen:** Control Center, the Displays pane with two monitors arranged side by side.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Needs two outputs (or one real plus one headless). `horneroctl config gui --pane displays`.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-06`), pane id `displays`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Displays pane with two monitors arranged side by side.
- **Alt text (ES):** Centro de control, el panel Pantallas con dos monitores dispuestos lado a lado.

### CAP-CC-08 Control Center: Javi pane

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Javi, customisation.
- **On screen:** Control Center, the Javi pane with skin, habitat and behaviour controls.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane companion`.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-08`), pane id `companion`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Javi pane with skin, habitat and behaviour controls.
- **Alt text (ES):** Centro de control, el panel de Javi con controles de personaje, hábitat y comportamiento.

### CAP-CC-09 Control Center: Accessibility pane

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Accessibility.
- **On screen:** Control Center, the Accessibility pane with text size, reduce motion and animation speed.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane accessibility`.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-09`), pane id `accessibility`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Accessibility pane with text size, reduce motion and animation speed.
- **Alt text (ES):** Centro de control, el panel Accesibilidad con tamaño de texto, reducir movimiento y velocidad de animación.

### CAP-CC-10 Control Center: Updates pane

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Install, updating.
- **On screen:** Control Center, the Updates pane listing available repository and AUR packages with the check result.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run `horneroctl package check` first so the pane has data; `horneroctl config gui --pane updates`. Never press an upgrade button.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-10`), pane id `updates`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Updates pane listing available repository and AUR packages with the check result.
- **Alt text (ES):** Centro de control, el panel Actualizaciones con los paquetes disponibles de repositorio y AUR y el resultado del chequeo.

### CAP-CC-13 Control Center: Studio pane

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Studio.
- **On screen:** Control Center, the Studio pane with the creative workloads and the low-latency audio opt-in.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane studio`.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-13`), pane id `studio`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Studio pane with the creative workloads and the low-latency audio opt-in.
- **Alt text (ES):** Centro de control, el panel Studio con las cargas creativas y la opción de audio de baja latencia.

### CAP-CC-14 Control Center: Gaming pane

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Gaming.
- **On screen:** Control Center, the Gaming pane with readiness checks, profiles and the gaming-mode toggle.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane gaming`.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-14`), pane id `gaming`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Gaming pane with readiness checks, profiles and the gaming-mode toggle.
- **Alt text (ES):** Centro de control, el panel Gaming con chequeos de preparación, perfiles y el interruptor del modo gaming.

### CAP-CC-11 Control Center: Notifications and OSD panes

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Shell surfaces.
- **On screen:** Control Center, the Notifications pane with placement, history and do-not-disturb controls.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane notifications`; history must hold only demo notifications.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-11`), pane id `notifications`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Notifications pane with placement, history and do-not-disturb controls.
- **Alt text (ES):** Centro de control, el panel Notificaciones con ubicación, historial y no molestar.

### CAP-CC-12 Control Center: Lock screen pane

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Shell surfaces.
- **On screen:** Control Center, the Lock screen pane with privacy and idle-lock options.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane lockscreen`; do not touch the fingerprint section.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-12`), pane id `lockscreen`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the Lock screen pane with privacy and idle-lock options.
- **Alt text (ES):** Centro de control, el panel Pantalla de bloqueo con privacidad y bloqueo por inactividad.

### CAP-CC-15 Control Center: System and diagnostics

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Diagnostics.
- **On screen:** Control Center, the System pane with diagnostics output.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. `horneroctl config gui --pane system`; hostname must be the demo hostname, no serials.
  2. Window geometry 1600x1000 (`capture-helper.sh window CAP-CC-15`), pane id `system`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Control Center, the System pane with diagnostics output.
- **Alt text (ES):** Centro de control, el panel Sistema con la salida de diagnóstico.

## Session S06: Shell surfaces and lock screen

Where: Host, demo user. About 60 minutes, 12 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-LOCK-01 | P0 | screenshot | /greeter |
| CAP-SHELL-01 | P0 | screenshot | /desktop |
| CAP-SHELL-07 | P0 | screenshot | /desktop |
| CAP-SHELL-02 | P1 | screenshot | Showroom only |
| CAP-SHELL-03 | P1 | screenshot | Showroom only |
| CAP-SHELL-04 | P1 | screenshot | Showroom only |
| CAP-SHELL-08 | P1 | screenshot | Showroom only |
| CAP-SHELL-10 | P1 | screenshot | Showroom only |
| CAP-SHELL-11 | P1 | screenshot | Showroom only |
| CAP-SHELL-05 | P2 | screenshot | Showroom only |
| CAP-SHELL-06 | P2 | screenshot | Showroom only |
| CAP-SHELL-09 | P2 | screenshot | Showroom only |

### CAP-LOCK-01 Lock screen

- **Priority:** P0 (launch-critical).
- **Page and section:** /greeter · Greeter, lock screen.
- **On screen:** The Hornero lock screen over a shipped wallpaper: clock, the unlock field and the demo user only.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Use the demo user; Super+L; capture from a second TTY or SSH session with `grim` on the Wayland socket (`WAYLAND_DISPLAY=wayland-1 grim ...`), or record with `capture-helper.sh shot --delay 5` and lock first.
  2. Never type a password on camera; unlock afterwards.
- **Privacy:** No real user name, avatar, notification preview or media metadata on the lock screen.
- **Alt text (EN):** The Hornero lock screen over a shipped wallpaper: clock, the unlock field and the demo user only.
- **Alt text (ES):** La pantalla de bloqueo de Hornero sobre un fondo incluido: reloj, campo de desbloqueo y solo el usuario de demostración.

### CAP-SHELL-01 Shell: Launcher

- **Priority:** P0 (launch-critical).
- **Page and section:** /desktop · Desktop, launcher.
- **On screen:** The the launcher (Ctrl+Space) open over Cockpit with a search typed and the first result highlighted; only HorneroOS-shipped apps listed.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Use a demo user with only shipped apps installed.
  2. Ctrl+Space, type `term`; capture.
- **Privacy:** No personal apps (chat, mail, work tools) may be installed on the demo user.
- **Alt text (EN):** The the launcher (Ctrl+Space) open over Cockpit with a search typed and the first result highlighted; only HorneroOS-shipped apps listed.
- **Alt text (ES):** El launcher (Ctrl+Espacio) abierto sobre Cockpit con una búsqueda escrita y el primer resultado resaltado; solo apps incluidas en HorneroOS.

### CAP-SHELL-07 Shell: Dashboard overview

- **Priority:** P0 (launch-critical).
- **Page and section:** /desktop · Desktop, Dashboard.
- **On screen:** The the Dashboard (Super+D) overview tab with its five tabs visible and demo-safe cards.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Super+D.
  2. Weather card must use a neutral location (set location to "Buenos Aires" or hide the card); uptime must not be a revealing value.
- **Privacy:** The weather location and uptime must not reveal where the host lives.
- **Alt text (EN):** The the Dashboard (Super+D) overview tab with its five tabs visible and demo-safe cards.
- **Alt text (ES):** El Dashboard (Super+D) en la pestaña general con sus cinco pestañas visibles y tarjetas aptas para demostración.

### CAP-SHELL-02 Shell: Notifications

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Shell surfaces.
- **On screen:** The two stacked notification toasts and the notification history open, using demo content such as "Build finished" and "Update available".
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Send with `notify-send -a Demo "Build finished" "cargo build in 12 s"`; repeat with a second.
- **Privacy:** Only notify-send demo content; clear history first.
- **Alt text (EN):** The two stacked notification toasts and the notification history open, using demo content such as "Build finished" and "Update available".
- **Alt text (ES):** Dos toasts de notificación apilados y el historial abierto, con contenido de demostración como «Build finished» y «Update available».

### CAP-SHELL-03 Shell: Quick settings

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Shell surfaces.
- **On screen:** The the quick settings panel with Wi-Fi, Bluetooth, microphone, Keep Awake and the screen recorder.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Open from the top rail quick-actions item.
- **Privacy:** Wi-Fi network names and Bluetooth device names must be neutral or hidden.
- **Alt text (EN):** The the quick settings panel with Wi-Fi, Bluetooth, microphone, Keep Awake and the screen recorder.
- **Alt text (ES):** El panel de ajustes rápidos con Wi-Fi, Bluetooth, micrófono, Keep Awake y el grabador de pantalla.

### CAP-SHELL-04 Shell: Session menu

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Shell surfaces.
- **On screen:** The the session and power menu (Super+X) with its actions and no pending confirmation.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Super+X; do not activate anything.
- **Privacy:** None beyond global rules.
- **Alt text (EN):** The the session and power menu (Super+X) with its actions and no pending confirmation.
- **Alt text (ES):** El menú de sesión y energía (Super+X) con sus acciones y sin confirmaciones pendientes.

### CAP-SHELL-08 Shell: Keybind overlay

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Shortcuts.
- **On screen:** The the keybind help overlay (Super+/) with the shell and workspace shortcut tables.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Super+/ over the clean Cockpit.
- **Privacy:** None beyond global rules.
- **Alt text (EN):** The the keybind help overlay (Super+/) with the shell and workspace shortcut tables.
- **Alt text (ES):** La superposición de ayuda de atajos (Super+/) con las tablas de atajos de shell y espacios.

### CAP-SHELL-10 Shell: Anchored popout

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Shell surfaces.
- **On screen:** The an audio popout anchored to its bar trigger showing real output devices (neutral names).
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Click the volume item on the top rail.
- **Privacy:** Audio device names must be neutral (no personal headphones names).
- **Alt text (EN):** The an audio popout anchored to its bar trigger showing real output devices (neutral names).
- **Alt text (ES):** Un popout de audio anclado a su disparador en la barra con dispositivos de salida reales (nombres neutros).

### CAP-SHELL-11 Shell: Apply and undo

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Themes, apply and undo.
- **On screen:** The the apply-and-undo toast after a theme change, with the Undo action visible.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Apply any theme from Settings, then capture within the toast lifetime.
- **Privacy:** None beyond global rules.
- **Alt text (EN):** The the apply-and-undo toast after a theme change, with the Undo action visible.
- **Alt text (ES):** El toast de aplicar y deshacer tras cambiar de tema, con la acción Deshacer visible.

### CAP-SHELL-05 Shell: Volume OSD

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Shell surfaces.
- **On screen:** The the volume on-screen display after a change, over a clean desktop.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Press the volume key once; capture within 1 s with `capture-helper.sh shot --delay 0`.
- **Privacy:** None beyond global rules.
- **Alt text (EN):** The the volume on-screen display after a change, over a clean desktop.
- **Alt text (ES):** El OSD de volumen tras un cambio, sobre un escritorio limpio.

### CAP-SHELL-06 Shell: Clipboard history

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Shell surfaces.
- **On screen:** The clipboard history (Super+V) holding three neutral demo snippets.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Copy three demo strings (`hornero`, a lorem line, a colour hex).
- **Privacy:** Clipboard must hold only demo strings, no tokens or URLs from real accounts.
- **Alt text (EN):** The clipboard history (Super+V) holding three neutral demo snippets.
- **Alt text (ES):** El historial del portapapeles (Super+V) con tres fragmentos de demostración neutros.

### CAP-SHELL-09 Shell: Reload cover

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Shell surfaces.
- **On screen:** The the shell reload cover shown while the shell restarts, brand-only.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Only restart the shell when `qs ipc call lock isLocked` is false; capture with `shot --delay 0` immediately after triggering; may need a 2 s recording and a frame grab.
- **Privacy:** None beyond global rules.
- **Alt text (EN):** The the shell reload cover shown while the shell restarts, brand-only.
- **Alt text (ES):** La cubierta de recarga que se ve mientras la shell reinicia, solo con la marca.

## Session S07: Extensions and instrument deck

Where: Host, demo user. About 45 minutes, 6 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-EXT-01 | P0 | screenshot | /extensions |
| CAP-DECK-01 | P1 | screenshot | /modes |
| CAP-DECK-02 | P1 | screenshot | Showroom only |
| CAP-EXT-02 | P1 | screenshot | Showroom only |
| CAP-EXT-03 | P2 | screenshot | Showroom only |
| CAP-EXT-04 | P2 | screenshot | Showroom only |

### CAP-EXT-01 Extensions on bar, desktop and Dashboard

- **Priority:** P0 (launch-critical).
- **Page and section:** /extensions · Extensions, lead.
- **On screen:** One session with three official extensions: one on the bar (for example Pomodoro), one on the desktop (for example Calendar) and the Dashboard open on an extension card (for example System Health).
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Enable `hornero-pomodoro`, `hornero-calendar` and `hornero-system-health` in Settings, Extensions.
  2. Open the Dashboard (Super+D) on the Extensions tab; capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** One session with three official extensions: one on the bar (for example Pomodoro), one on the desktop (for example Calendar) and the Dashboard open on an extension card (for example System Health).
- **Alt text (ES):** Una sola sesión con tres extensiones oficiales: una en la barra (por ejemplo Pomodoro), una en el escritorio (por ejemplo Calendar) y el Dashboard abierto en una tarjeta de extensión (por ejemplo System Health).

### CAP-DECK-01 Signal instrument deck

- **Priority:** P1 (important).
- **Page and section:** /modes · Modes, Signal deck.
- **On screen:** The Signal mode instrument deck on an empty desktop: telemetry widgets from the official plugins (oscilloscope, meters, network scope).
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Signal, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Switch to Signal mode; close all windows; wait 20 s for traces to fill.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Signal mode instrument deck on an empty desktop: telemetry widgets from the official plugins (oscilloscope, meters, network scope).
- **Alt text (ES):** El deck de instrumentos del modo Signal en un escritorio vacío: widgets de telemetría de los plugins oficiales (osciloscopio, medidores, network scope).

### CAP-DECK-02 Media deck

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Instrument deck.
- **On screen:** The media deck with a currently playing track from a royalty-free demo file.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Play a CC0 track in a media player; capture the deck.
- **Privacy:** Track title, artist and cover art must be CC0 or HorneroOS-made.
- **Alt text (EN):** The media deck with a currently playing track from a royalty-free demo file.
- **Alt text (ES):** El deck de medios con una pista en reproducción de un archivo de demostración libre de derechos.

### CAP-EXT-02 Extension install and permissions

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Extensions, trust.
- **On screen:** The extension detail with its checksum, source revision and declared permissions, and the explicit trust prompt before enabling.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Open an official extension in Settings, Extensions; scroll to permissions; capture before confirming.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The extension detail with its checksum, source revision and declared permissions, and the explicit trust prompt before enabling.
- **Alt text (ES):** El detalle de una extensión con su checksum, revisión de código y permisos declarados, y el aviso explícito de confianza antes de activarla.

### CAP-EXT-03 Extensions: bar widgets close-up

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Extensions, bar.
- **On screen:** The Cockpit top rail carrying several bar extensions (Pomodoro, Stopwatch, Now Playing, Volume) in a tight strip.
- **Spec:** 16:5, 1920x600 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Enable the four extensions; crop the top 600 px of a 2x capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Cockpit top rail carrying several bar extensions (Pomodoro, Stopwatch, Now Playing, Volume) in a tight strip.
- **Alt text (ES):** La barra superior de Cockpit con varias extensiones (Pomodoro, Stopwatch, Now Playing, Volume) en una franja recortada.

### CAP-EXT-04 Extensions: desktop widgets

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Extensions, desktop.
- **On screen:** A clean desktop carrying Calendar, Moon Phase and Network Scope desktop extensions.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Enable the three; close all windows; capture.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** A clean desktop carrying Calendar, Moon Phase and Network Scope desktop extensions.
- **Alt text (ES):** Un escritorio limpio con las extensiones de escritorio Calendar, Moon Phase y Network Scope.

## Session S08: Javi and the nest

Where: Host, demo user (after final art). About 60 minutes, 10 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-JAVI-01 | P0 | screenshot | /companion, / |
| CAP-JAVI-02 | P1 | screenshot | /companion |
| CAP-JAVI-03 | P1 | screenshot | /companion |
| CAP-JAVI-04 | P1 | screenshot | /companion |
| CAP-JAVI-05 | P1 | screenshot | /companion |
| CAP-JAVI-06 | P1 | screenshot | /companion |
| CAP-JAVI-07 | P1 | screenshot | Showroom only |
| CAP-JAVI-08 | P1 | screenshot | Showroom only |
| CAP-JAVI-09 | P1 | screenshot | Showroom only |
| CAP-JAVI-10 | P2 | screenshot | Showroom only |

### CAP-JAVI-01 Javi in his corner

- **Priority:** P0 (launch-critical).
- **Page and section:** /companion, / · Javi, on a real desktop; Home, Javi.
- **On screen:** Javi perched in his nest in the desktop corner on a real, working Cockpit desktop, not overlapping any window.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Enable Javi (Settings, Javi) at the bottom-right anchor.
  2. Keep windows clear of the corner; wait for the resting idle animation.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Javi perched in his nest in the desktop corner on a real, working Cockpit desktop, not overlapping any window.
- **Alt text (ES):** Javi posado en su nido en la esquina del escritorio sobre un Cockpit real en uso, sin tapar ninguna ventana.

### CAP-JAVI-02 Javi: Resting

- **Priority:** P1 (important).
- **Page and section:** /companion · Javi, states.
- **On screen:** Javi resting in the nest, eyes half closed, on the real desktop at 1:1.
- **Spec:** 3:2, 1200x800 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Trigger the resting state (see Control Center, Javi, Behaviour; assistant tasks for Working).
  2. Crop to a 1200x800 region around the corner with `capture-helper.sh region`.
  3. Shoot after the final Javi and nest art lands (ledger: javi-final-art is planned); until then the nest art is a marked placeholder.
- **Privacy:** Assistant activity traces and bubbles must hold only demo prompts.
- **Alt text (EN):** Javi resting in the nest, eyes half closed, on the real desktop at 1:1.
- **Alt text (ES):** Javi descansando en el nido, con los ojos entrecerrados, en el escritorio real a escala 1:1.

### CAP-JAVI-03 Javi: Working

- **Priority:** P1 (important).
- **Page and section:** /companion · Javi, states.
- **On screen:** Javi at his little screen while an assistant task runs (real task, no private content), on the real desktop at 1:1.
- **Spec:** 3:2, 1200x800 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Trigger the working state (see Control Center, Javi, Behaviour; assistant tasks for Working).
  2. Crop to a 1200x800 region around the corner with `capture-helper.sh region`.
  3. Shoot after the final Javi and nest art lands (ledger: javi-final-art is planned); until then the nest art is a marked placeholder.
- **Privacy:** Assistant activity traces and bubbles must hold only demo prompts.
- **Alt text (EN):** Javi at his little screen while an assistant task runs (real task, no private content), on the real desktop at 1:1.
- **Alt text (ES):** Javi frente a su pequeña pantalla mientras corre una tarea real del asistente (sin contenido privado), en el escritorio real a escala 1:1.

### CAP-JAVI-04 Javi: Building

- **Priority:** P1 (important).
- **Page and section:** /companion · Javi, states.
- **On screen:** Javi adding a component to the nest, a visible construction stage, on the real desktop at 1:1.
- **Spec:** 3:2, 1200x800 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Trigger the building state (see Control Center, Javi, Behaviour; assistant tasks for Working).
  2. Crop to a 1200x800 region around the corner with `capture-helper.sh region`.
  3. Shoot after the final Javi and nest art lands (ledger: javi-final-art is planned); until then the nest art is a marked placeholder.
- **Privacy:** Assistant activity traces and bubbles must hold only demo prompts.
- **Alt text (EN):** Javi adding a component to the nest, a visible construction stage, on the real desktop at 1:1.
- **Alt text (ES):** Javi agregando un componente al nido, en una etapa de construcción visible, en el escritorio real a escala 1:1.

### CAP-JAVI-05 Javi: Sleeping

- **Priority:** P1 (important).
- **Page and section:** /companion · Javi, states.
- **On screen:** Javi curled up with the nest lights dimmed, on the real desktop at 1:1.
- **Spec:** 3:2, 1200x800 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Trigger the sleeping state (see Control Center, Javi, Behaviour; assistant tasks for Working).
  2. Crop to a 1200x800 region around the corner with `capture-helper.sh region`.
  3. Shoot after the final Javi and nest art lands (ledger: javi-final-art is planned); until then the nest art is a marked placeholder.
- **Privacy:** Assistant activity traces and bubbles must hold only demo prompts.
- **Alt text (EN):** Javi curled up with the nest lights dimmed, on the real desktop at 1:1.
- **Alt text (ES):** Javi acurrucado con las luces del nido atenuadas, en el escritorio real a escala 1:1.

### CAP-JAVI-06 Javi: Summoned

- **Priority:** P1 (important).
- **Page and section:** /companion · Javi, states.
- **On screen:** Javi turning toward the user mid-transition into view, on the real desktop at 1:1.
- **Spec:** 3:2, 1200x800 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Trigger the summoned state (see Control Center, Javi, Behaviour; assistant tasks for Working).
  2. Crop to a 1200x800 region around the corner with `capture-helper.sh region`.
  3. Shoot after the final Javi and nest art lands (ledger: javi-final-art is planned); until then the nest art is a marked placeholder.
- **Privacy:** Assistant activity traces and bubbles must hold only demo prompts.
- **Alt text (EN):** Javi turning toward the user mid-transition into view, on the real desktop at 1:1.
- **Alt text (ES):** Javi girando hacia el usuario en plena transición hacia el frente, en el escritorio real a escala 1:1.

### CAP-JAVI-07 Javi quick ask

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Javi, assistant.
- **On screen:** The launcher inline ask answering a short demo question, with Javi visible.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Ask "what theme is active?" in the launcher.
- **Privacy:** Only a demo question and answer.
- **Alt text (EN):** The launcher inline ask answering a short demo question, with Javi visible.
- **Alt text (ES):** La consulta en línea del launcher respondiendo una pregunta corta de demostración, con Javi visible.

### CAP-JAVI-08 Javi workbench

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Javi, assistant.
- **On screen:** The Javi workbench panel with a conversation, a tool-result card and a pending approval card.
- **Spec:** 16:10, 1600x1000, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run a harmless demo task that requests an approval (for example listing a demo folder).
- **Privacy:** No file paths from a real home directory, no model/API keys.
- **Alt text (EN):** The Javi workbench panel with a conversation, a tool-result card and a pending approval card.
- **Alt text (ES):** El panel de la mesa de trabajo de Javi con una conversación, una tarjeta de resultado de herramienta y una tarjeta de aprobación pendiente.

### CAP-JAVI-09 Nest, three build stages

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Javi, habitat.
- **On screen:** The nest at an early, middle and complete construction stage as three crops of the corner.
- **Spec:** 3:2, 1200x800 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Use the Control Center, Javi, Habitat stage control (or reset building progress); capture each stage as CAP-JAVI-09 a/b/c named in the filename suffix (-a, -b, -c).
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The nest at an early, middle and complete construction stage as three crops of the corner.
- **Alt text (ES):** El nido en una etapa temprana, intermedia y completa de construcción, como tres recortes de la esquina.

### CAP-JAVI-10 Javi Radio

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Javi, radio.
- **On screen:** The Javi Radio panel playing a royalty-free station next to the nest transceiver.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Enable Javi Radio; tune a station that is licensed for display.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Javi Radio panel playing a royalty-free station next to the nest transceiver.
- **Alt text (ES):** El panel de Javi Radio reproduciendo una emisora libre junto al transceptor del nido.

## Session S09: Modes, Studio and Gaming

Where: Host, demo user, Studio and Gaming installed. About 90 minutes, 14 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-GAMING-01 | P0 | screenshot | /gaming |
| CAP-MODE-01 | P0 | screenshot | /modes |
| CAP-MODE-03 | P0 | screenshot | /modes |
| CAP-MODE-04 | P0 | screenshot | /modes |
| CAP-STUDIO-01 | P0 | screenshot | /studio |
| CAP-GAMING-02 | P1 | screenshot | Showroom only |
| CAP-GAMING-03 | P1 | screenshot | Showroom only |
| CAP-MODE-02 | P1 | screenshot | /modes |
| CAP-MODE-05 | P1 | screenshot | /modes |
| CAP-STUDIO-02 | P1 | screenshot | /studio |
| CAP-STUDIO-03 | P1 | screenshot | Showroom only |
| CAP-GAMING-04 | P2 | screenshot | Showroom only |
| CAP-MODE-06 | P2 | screenshot | Showroom only |
| CAP-STUDIO-04 | P2 | screenshot | Showroom only |

### CAP-GAMING-01 Gaming hero, windowed game

- **Priority:** P0 (launch-critical).
- **Page and section:** /gaming · Gaming, hero.
- **On screen:** Gaming mode with Steam open and a free game running windowed, the Gaming bottom bar and the mode indicator visible; no frame-rate overlay.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Gaming, layout Gaming, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Install the Gaming specialization; switch to Gaming mode.
  2. Run a free, open-licence game (for example SuperTuxKart) windowed.
  3. No MangoHud overlay unless it is truly on in the shipped default.
- **Privacy:** Steam must show a demo account with a neutral name and no friends list.
- **Alt text (EN):** Gaming mode with Steam open and a free game running windowed, the Gaming bottom bar and the mode indicator visible; no frame-rate overlay.
- **Alt text (ES):** Modo Gaming con Steam abierto y un juego gratuito en ventana, la barra inferior de Gaming y el indicador de modo visibles; sin superposición de FPS.

### CAP-MODE-01 Mode: Focus

- **Priority:** P0 (launch-critical).
- **Page and section:** /modes · Modes, five atmospheres.
- **On screen:** Focus mode on the same wallpaper as the other four modes: icon-only bar, empty desktop, one working window, reduced motion.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Focus, layout Minimal Top, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Settings, Experience, pick Focus, Switch (or launcher: "Focus mode").
  2. Same wallpaper for all five mode shots (Buenos Aires Nocturno) and only the windows each mode needs.
  3. Verify the bar indicator reads FOC.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Focus mode on the same wallpaper as the other four modes: icon-only bar, empty desktop, one working window, reduced motion.
- **Alt text (ES):** Modo Focus sobre el mismo fondo que los otros cuatro modos: barra solo con íconos, escritorio vacío, una ventana de trabajo y movimiento reducido.

### CAP-MODE-03 Mode: Signal

- **Priority:** P0 (launch-critical).
- **Page and section:** /modes · Modes, five atmospheres.
- **On screen:** Signal mode on the same wallpaper as the other four modes: the labelled bar and the instrument deck with live telemetry.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Signal, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Settings, Experience, pick Signal, Switch (or launcher: "Signal mode").
  2. Same wallpaper for all five mode shots (Buenos Aires Nocturno) and only the windows each mode needs.
  3. Verify the bar indicator reads SIG.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Signal mode on the same wallpaper as the other four modes: the labelled bar and the instrument deck with live telemetry.
- **Alt text (ES):** Modo Signal sobre el mismo fondo que los otros cuatro modos: la barra con etiquetas y el deck de instrumentos con telemetría en vivo.

### CAP-MODE-04 Mode: Gaming

- **Priority:** P0 (launch-critical).
- **Page and section:** /modes · Modes, five atmospheres.
- **On screen:** Gaming mode on the same wallpaper as the other four modes: minimal bottom bar, motion off, empty desktop, mode indicator visible.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Gaming, layout Gaming, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Settings, Experience, pick Gaming, Switch (or launcher: "Gaming mode").
  2. Same wallpaper for all five mode shots (Buenos Aires Nocturno) and only the windows each mode needs.
  3. Verify the bar indicator reads GAM.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Gaming mode on the same wallpaper as the other four modes: minimal bottom bar, motion off, empty desktop, mode indicator visible.
- **Alt text (ES):** Modo Gaming sobre el mismo fondo que los otros cuatro modos: barra inferior mínima, movimiento apagado, escritorio vacío e indicador de modo visible.

### CAP-STUDIO-01 Studio hero, Ardour

- **Priority:** P0 (launch-critical).
- **Page and section:** /studio · Studio, hero.
- **On screen:** Studio mode with an Ardour session open on a demo project, the Studio top bar and the mode indicator visible.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Studio, layout Studio, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Install the Studio specialization with Ardour; switch to Studio mode.
  2. Open a demo session of 6 CC0 tracks; show the mixer.
- **Privacy:** Project name and track names must be demo content.
- **Alt text (EN):** Studio mode with an Ardour session open on a demo project, the Studio top bar and the mode indicator visible.
- **Alt text (ES):** Modo Studio con una sesión de Ardour abierta sobre un proyecto de demostración, la barra superior de Studio y el indicador de modo visibles.

### CAP-GAMING-02 Gaming: Heroic and Lutris

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Gaming, launchers.
- **On screen:** Heroic Games Launcher and Lutris side by side with empty or demo libraries.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Gaming, layout Gaming, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Demo accounts only; no logged-in storefront identities visible.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Heroic Games Launcher and Lutris side by side with empty or demo libraries.
- **Alt text (ES):** Heroic Games Launcher y Lutris lado a lado con bibliotecas vacías o de demostración.

### CAP-GAMING-03 Gaming: queued notifications

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Gaming, behaviour.
- **On screen:** A fullscreen-adjacent Gaming session holding notification popups, then the queue shown once the mode ends.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Gaming, layout Gaming, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Send two `notify-send` demo notifications while a game runs; revert the mode and capture the queue.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** A fullscreen-adjacent Gaming session holding notification popups, then the queue shown once the mode ends.
- **Alt text (ES):** Una sesión Gaming casi a pantalla completa reteniendo popups, y la cola mostrada al salir del modo.

### CAP-MODE-02 Mode: Everyday

- **Priority:** P1 (important).
- **Page and section:** /modes · Modes, five atmospheres.
- **On screen:** Everyday mode on the same wallpaper as the other four modes: Cockpit with values on the bar and your desktop widgets.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Settings, Experience, pick Everyday, Switch (or launcher: "Everyday mode").
  2. Same wallpaper for all five mode shots (Buenos Aires Nocturno) and only the windows each mode needs.
  3. Verify the bar indicator reads (none in Everyday).
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Everyday mode on the same wallpaper as the other four modes: Cockpit with values on the bar and your desktop widgets.
- **Alt text (ES):** Modo Everyday sobre el mismo fondo que los otros cuatro modos: Cockpit con valores en la barra y tus widgets de escritorio.

### CAP-MODE-05 Mode: Studio

- **Priority:** P1 (important).
- **Page and section:** /modes · Modes, five atmospheres.
- **On screen:** Studio mode on the same wallpaper as the other four modes: a stable canvas with the Studio top bar and an Ardour session open.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Studio, layout Studio, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Settings, Experience, pick Studio, Switch (or launcher: "Studio mode").
  2. Same wallpaper for all five mode shots (Buenos Aires Nocturno) and only the windows each mode needs.
  3. Verify the bar indicator reads STU.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Studio mode on the same wallpaper as the other four modes: a stable canvas with the Studio top bar and an Ardour session open.
- **Alt text (ES):** Modo Studio sobre el mismo fondo que los otros cuatro modos: un lienzo estable con la barra superior de Studio y una sesión de Ardour abierta.

### CAP-STUDIO-02 Studio: Blender

- **Priority:** P1 (important).
- **Page and section:** /studio · Studio, applications.
- **On screen:** Studio mode with Blender open on a bundled demo scene.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Studio, layout Studio, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Open a CC0 or Blender-demo scene.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Studio mode with Blender open on a bundled demo scene.
- **Alt text (ES):** Modo Studio con Blender abierto sobre una escena de demostración incluida.

### CAP-STUDIO-03 Studio: Krita and Kdenlive

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Studio, applications.
- **On screen:** Studio mode with Krita and Kdenlive tiled, each with a CC0 demo project.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Studio, layout Studio, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. CC0 media only.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Studio mode with Krita and Kdenlive tiled, each with a CC0 demo project.
- **Alt text (ES):** Modo Studio con Krita y Kdenlive en mosaico, cada uno con un proyecto de demostración CC0.

### CAP-GAMING-04 Gaming: fullscreen

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Gaming, behaviour.
- **On screen:** A game fullscreen with no shell chrome overlapping, proving nothing steals focus.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Gaming, layout Gaming, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Fullscreen the demo game (Super+M).
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** A game fullscreen with no shell chrome overlapping, proving nothing steals focus.
- **Alt text (ES):** Un juego a pantalla completa sin ningún elemento de la shell encima, que demuestra que nada roba el foco.

### CAP-MODE-06 Mode indicator close-up

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Modes.
- **On screen:** The FOC, SIG, GAM and STU mode indicator on the bar in four crops.
- **Spec:** 16:5, 1920x600 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Capture the bar in each mode; crop around the indicator (-focus, -signal, -gaming, -studio suffixes).
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The FOC, SIG, GAM and STU mode indicator on the bar in four crops.
- **Alt text (ES):** El indicador de modo FOC, SIG, GAM y STU en la barra, en cuatro recortes.

### CAP-STUDIO-04 Studio low-latency audio

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Studio, audio.
- **On screen:** The low-latency audio opt-in on and the audio profile reported by `horneroctl studio mode audio`.
- **Spec:** 3:2, 1200x800, PNG master (lossless).
- **State:** theme Signal Night, mode Studio, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run `horneroctl studio mode audio` in kitty with Settings, Studio beside it.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The low-latency audio opt-in on and the audio profile reported by `horneroctl studio mode audio`.
- **Alt text (ES):** La opción de audio de baja latencia activa y el perfil reportado por `horneroctl studio mode audio`.

## Session S10: Terminals and horneroctl

Where: Host, demo user. About 40 minutes, 6 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-TERM-01 | P0 | screenshot | /terminals |
| CAP-TERM-02 | P1 | screenshot | /terminals |
| CAP-TERM-03 | P1 | screenshot | Showroom only |
| CAP-TERM-04 | P1 | screenshot | Showroom only |
| CAP-TERM-05 | P1 | screenshot | Showroom only |
| CAP-TERM-06 | P2 | screenshot | Showroom only |

### CAP-TERM-01 Kitty with the Hornero palette

- **Priority:** P0 (launch-critical).
- **Page and section:** /terminals · Terminals, proof.
- **On screen:** kitty showing `horneroctl appearance theme list` and the generated palette swatches, in Signal Night.
- **Spec:** 3:2, 1200x800 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Single kitty window 1200x800 on a clean desktop.
  2. Run `horneroctl appearance theme list` then `horneroctl appearance status`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** kitty showing `horneroctl appearance theme list` and the generated palette swatches, in Signal Night.
- **Alt text (ES):** kitty mostrando `horneroctl appearance theme list` y las muestras de la paleta generada, en Signal Night.

### CAP-TERM-02 Alacritty and Ghostty

- **Priority:** P1 (important).
- **Page and section:** /terminals · Terminals, alternatives.
- **On screen:** Alacritty and Ghostty windows each running `horneroctl appearance status` in the same palette.
- **Spec:** 3:2, 1200x800, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Tile both side by side.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Alacritty and Ghostty windows each running `horneroctl appearance status` in the same palette.
- **Alt text (ES):** Ventanas de Alacritty y Ghostty ejecutando `horneroctl appearance status` con la misma paleta.

### CAP-TERM-03 btop and yazi

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Everyday apps.
- **On screen:** btop and yazi tiled; yazi previewing a folder of shipped wallpapers; btop without personal process names.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run btop under the demo user so only system processes appear.
- **Privacy:** btop process list must contain only demo-user processes; no user paths.
- **Alt text (EN):** btop and yazi tiled; yazi previewing a folder of shipped wallpapers; btop without personal process names.
- **Alt text (ES):** btop y yazi en mosaico; yazi previsualizando una carpeta de fondos incluidos; btop sin nombres de procesos personales.

### CAP-TERM-04 horneroctl doctor

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Install, verification.
- **On screen:** `horneroctl doctor` output in kitty, all checks passing.
- **Spec:** 3:2, 1200x800, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run `horneroctl doctor` on a healthy demo install.
- **Privacy:** Hostname and paths must be the demo ones.
- **Alt text (EN):** `horneroctl doctor` output in kitty, all checks passing.
- **Alt text (ES):** La salida de `horneroctl doctor` en kitty, con todos los chequeos aprobados.

### CAP-TERM-05 horneroctl preset dry run

- **Priority:** P1 (important).
- **Page and section:** Showroom only · horneroctl.
- **On screen:** `horneroctl shell preset apply cockpit --dry-run` followed by `--yes`, showing the proposed and applied change.
- **Spec:** 3:2, 1200x800, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run both commands in sequence in one kitty window.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** `horneroctl shell preset apply cockpit --dry-run` followed by `--yes`, showing the proposed and applied change.
- **Alt text (ES):** `horneroctl shell preset apply cockpit --dry-run` seguido de `--yes`, mostrando el cambio propuesto y aplicado.

### CAP-TERM-06 Files: Thunar and yazi

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Everyday apps.
- **On screen:** Thunar and yazi each showing the shipped wallpaper folder with thumbnails.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Point both at the shipped wallpapers directory.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Thunar and yazi each showing the shipped wallpaper folder with thumbnails.
- **Alt text (ES):** Thunar y yazi mostrando cada uno la carpeta de fondos incluidos con miniaturas.

## Session S11: Multi-monitor and physical photography

Where: Host + camera. About 90 minutes, 6 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-MULTI-01 | P1 | screenshot | /desktop |
| CAP-PHOTO-01 | P1 | photo | Showroom only |
| CAP-MULTI-02 | P2 | screenshot | Showroom only |
| CAP-MULTI-03 | P2 | screenshot | Showroom only |
| CAP-PHOTO-02 | P2 | photo | Showroom only |
| CAP-PHOTO-03 | P2 | photo | Showroom only |

### CAP-MULTI-01 Dual monitor Cockpit

- **Priority:** P1 (important).
- **Page and section:** /desktop · Desktop, multi-monitor.
- **On screen:** Two 1920x1080 monitors side by side, each with its own Cockpit rails and one window, a single wallpaper spanning both.
- **Spec:** 32:9, 3840x1080, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Two outputs (or one physical plus one headless); `capture-helper.sh shot --all`.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** Two 1920x1080 monitors side by side, each with its own Cockpit rails and one window, a single wallpaper spanning both.
- **Alt text (ES):** Dos monitores de 1920x1080 lado a lado, cada uno con sus barras Cockpit y una ventana, con un solo fondo extendido.

### CAP-PHOTO-01 Desk photo: HorneroOS at work

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Home, the machine.
- **On screen:** A real desk with a monitor running HorneroOS Cockpit in Signal Night, a keyboard and warm lamp light; the screen is the real capture, not a composite.
- **Spec:** 3:2, 3000x2000, AVIF or JPG master, sRGB.
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Natural or warm lamp light, no direct glare on the screen; shoot at f/4 or smaller, 35 mm equivalent, ISO below 800.
  2. Screen shows CAP-HERO-01 arrangement with no personal windows.
- **Privacy:** No faces, no readable mail or documents, no brand-confusing logos in frame.
- **Alt text (EN):** A real desk with a monitor running HorneroOS Cockpit in Signal Night, a keyboard and warm lamp light; the screen is the real capture, not a composite.
- **Alt text (ES):** Un escritorio real con un monitor ejecutando HorneroOS Cockpit en Signal Night, un teclado y luz cálida de lámpara; la pantalla es real, no un montaje.

### CAP-MULTI-02 Vertical monitor with a side rail

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Desktop, multi-monitor.
- **On screen:** A monitor rotated 90 degrees with Hornero Left and a tall terminal.
- **Spec:** 9:16, 1080x1920, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Hornero Left, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Rotate the output 90 degrees in Settings, Displays.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** A monitor rotated 90 degrees with Hornero Left and a tall terminal.
- **Alt text (ES):** Un monitor girado 90 grados con Hornero Left y una terminal alta.

### CAP-MULTI-03 Ultrawide Cockpit

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Desktop, multi-monitor.
- **On screen:** A 21:9 ultrawide with Cockpit, three windows tiled.
- **Spec:** 43:18, 3440x1440, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Headless output at 3440x1440 if no ultrawide is available.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** A 21:9 ultrawide with Cockpit, three windows tiled.
- **Alt text (ES):** Un ultrawide 21:9 con Cockpit y tres ventanas en mosaico.

### CAP-PHOTO-02 Laptop with HorneroOS

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Install, hardware.
- **On screen:** A laptop on a table showing the Hornero desktop, an angled close-up with a shallow depth of field.
- **Spec:** 3:2, 3000x2000, AVIF or JPG master, sRGB.
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Screen at 100 % brightness, anti-glare angle.
- **Privacy:** No faces; no stickers with personal handles.
- **Alt text (EN):** A laptop on a table showing the Hornero desktop, an angled close-up with a shallow depth of field.
- **Alt text (ES):** Una notebook sobre una mesa mostrando el escritorio Hornero, en primer plano angulado con poca profundidad de campo.

### CAP-PHOTO-03 USB installer

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Install.
- **On screen:** A USB stick plugged into a laptop with the HorneroOS boot menu on screen.
- **Spec:** 3:2, 3000x2000, AVIF or JPG master, sRGB.
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Use a plain USB stick, no third-party brand visible.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** A USB stick plugged into a laptop with the HorneroOS boot menu on screen.
- **Alt text (ES):** Un pendrive conectado a una notebook con el menú de arranque de HorneroOS en pantalla.

## Session S12: Greeter, boot, installer and updates

Where: QA VM or a fresh install. About 120 minutes, 16 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-GREETER-01 | P0 | screenshot | /greeter |
| CAP-INSTALL-01 | P0 | screenshot | /install |
| CAP-INSTALL-02 | P0 | screenshot | /install |
| CAP-INSTALL-08 | P0 | screenshot | /install |
| CAP-BOOT-01 | P1 | screenshot | /install |
| CAP-BOOT-02 | P1 | screenshot | Showroom only |
| CAP-GREETER-02 | P1 | screenshot | /greeter |
| CAP-GREETER-03 | P1 | screenshot | /greeter |
| CAP-GREETER-04 | P1 | screenshot | /greeter |
| CAP-INSTALL-03 | P1 | screenshot | /install |
| CAP-INSTALL-04 | P1 | screenshot | Showroom only |
| CAP-INSTALL-05 | P1 | screenshot | Showroom only |
| CAP-INSTALL-07 | P1 | screenshot | Showroom only |
| CAP-UPDATE-01 | P1 | screenshot | /install |
| CAP-INSTALL-06 | P2 | screenshot | Showroom only |
| CAP-UPDATE-02 | P2 | screenshot | Showroom only |

### CAP-GREETER-01 The Signal greeter, real screen

- **Priority:** P0 (launch-critical).
- **Page and section:** /greeter · Greeter, Signal Night hero.
- **On screen:** The real Hornero Signal greeter on Signal Night: the generative Pampa horizon, the centred clock, Javi's greeting and the sign-in module with accounts as channels and the demo user tuned; no recreation.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Signal Night (greeter), mode n/a, layout n/a, wallpaper Generative horizon (no wallpaper).
- **Setup:**
  1. Preferred: the QA VM or a fresh install with the released Signal greeter (`hornero-qa` images), log out to SDDM and capture from the host with the VM screenshot tool.
  2. Leave theme.conf at its defaults (colorScheme=auto on a dark platform, background=horizon, mascot=true); the demo user must be the tuned channel.
  3. On real hardware use a second TTY: `sudo -u sddm` environments differ; prefer the VM.
- **Privacy:** Demo user only.
- **Alt text (EN):** The real Hornero Signal greeter on Signal Night: the generative Pampa horizon, the centred clock, Javi's greeting and the sign-in module with accounts as channels and the demo user tuned; no recreation.
- **Alt text (ES):** El greeter real de Hornero Signal en Signal Night: el horizonte generativo de la pampa, el reloj al centro, el saludo de Javi y el módulo de ingreso con las cuentas como canales y el usuario de demostración sintonizado; sin recreación.

### CAP-INSTALL-01 Installer: welcome

- **Priority:** P0 (launch-critical).
- **Page and section:** /install · Install, steps.
- **On screen:** The the installer welcome step in the chosen language.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The the installer welcome step in the chosen language.
- **Alt text (ES):** El paso de bienvenida del instalador en el idioma elegido.

### CAP-INSTALL-02 Installer: edition and compositor

- **Priority:** P0 (launch-critical).
- **Page and section:** /install · Install, steps.
- **On screen:** The the edition and compositor picker with Desktop, Studio and Gaming and Hyprland selected.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The the edition and compositor picker with Desktop, Studio and Gaming and Hyprland selected.
- **Alt text (ES):** El selector de edición y compositor con Desktop, Studio y Gaming e Hyprland seleccionado.

### CAP-INSTALL-08 Live ISO desktop

- **Priority:** P0 (launch-critical).
- **Page and section:** /install · Install, live session.
- **On screen:** The the live ISO desktop on first boot with the installer launcher visible.
- **Spec:** 16:9, 1920x1080 (also a 2x master), PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The the live ISO desktop on first boot with the installer launcher visible.
- **Alt text (ES):** El escritorio de la ISO en vivo en el primer arranque con el lanzador del instalador visible.

### CAP-BOOT-01 Boot menu

- **Priority:** P1 (important).
- **Page and section:** /install · Install, boot.
- **On screen:** The HorneroOS boot menu with its entries.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Boot, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. QA VM with the release ISO; capture the boot menu with the VM screenshot tool.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The HorneroOS boot menu with its entries.
- **Alt text (ES):** El menú de arranque de HorneroOS con sus entradas.

### CAP-BOOT-02 Plymouth boot splash

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Install, boot.
- **On screen:** The boot splash with the hornero mark and progress.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Boot, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Capture from the VM during boot (`virsh screenshot` or the QA tool) every second and pick the best frame.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The boot splash with the hornero mark and progress.
- **Alt text (ES):** La pantalla de arranque con la marca del hornero y el progreso.

### CAP-GREETER-02 Greeter: session list and power confirmation

- **Priority:** P1 (important).
- **Page and section:** /greeter · Greeter, sessions and power.
- **On screen:** The Signal greeter with the session list open (Desktop, Studio and Gaming, experimental last) or the restart confirmation with Cancel focused.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night (greeter), mode n/a, layout n/a, wallpaper Generative horizon (no wallpaper).
- **Setup:**
  1. In the QA VM or a fresh install, open the session selector without choosing; capture.
  2. Then choose Restart and capture the confirmation dialog before confirming; cancel out of it.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Signal greeter with the session list open (Desktop, Studio and Gaming, experimental last) or the restart confirmation with Cancel focused.
- **Alt text (ES):** El greeter Signal con la lista de sesiones abierta (Desktop, Studio y Gaming, las experimentales al final) o la confirmación de reinicio con Cancelar enfocado.

### CAP-GREETER-03 Greeter palettes: Day and High Contrast

- **Priority:** P1 (important).
- **Page and section:** /greeter · Greeter, palettes.
- **On screen:** The Signal greeter in Signal Day and in High Contrast with large text, as two real captures of the same sign-in module and generative horizon.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Day / High Contrast (greeter), mode n/a, layout n/a, wallpaper Generative horizon (no wallpaper).
- **Setup:**
  1. In the QA VM, set colorScheme=day in theme.conf.user and capture (-day suffix).
  2. Then set highContrast=true and largeText=true and capture again (-high-contrast suffix); restore theme.conf.user afterwards.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** The Signal greeter in Signal Day and in High Contrast with large text, as two real captures of the same sign-in module and generative horizon.
- **Alt text (ES):** El greeter Signal en Signal Day y en Alto contraste con texto grande, como dos capturas reales del mismo módulo de ingreso y horizonte generativo.

### CAP-GREETER-04 Greeter on two monitors

- **Priority:** P1 (important).
- **Page and section:** /greeter · Greeter, several displays.
- **On screen:** The Signal greeter across two outputs: the sign-in module on the primary display and the quiet plate (mark, time and sign-in note) on the secondary one.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Signal Night (greeter), mode n/a, layout n/a, wallpaper Generative horizon (no wallpaper).
- **Setup:**
  1. In the QA VM with two virtual outputs, log out to SDDM and capture the secondary output's quiet plate; capture the primary output in the same session for the pair.
- **Privacy:** Demo user only.
- **Alt text (EN):** The Signal greeter across two outputs: the sign-in module on the primary display and the quiet plate (mark, time and sign-in note) on the secondary one.
- **Alt text (ES):** El greeter Signal en dos salidas: el módulo de ingreso en la pantalla principal y la placa tranquila (marca, hora y aviso de ingreso) en la secundaria.

### CAP-INSTALL-03 Installer: specializations

- **Priority:** P1 (important).
- **Page and section:** /install · Install, steps.
- **On screen:** The the Studio and Gaming specialization picker.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The the Studio and Gaming specialization picker.
- **Alt text (ES):** El selector de especializaciones de Studio y Gaming.

### CAP-INSTALL-04 Installer: disk

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Install, steps.
- **On screen:** The the disk and partition step on a blank virtual disk.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The the disk and partition step on a blank virtual disk.
- **Alt text (ES):** El paso de disco y particiones sobre un disco virtual en blanco.

### CAP-INSTALL-05 Installer: summary

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Install, steps.
- **On screen:** The the summary step before install.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The the summary step before install.
- **Alt text (ES):** El paso de resumen antes de instalar.

### CAP-INSTALL-07 Installer: finished

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Install, steps.
- **On screen:** The the finished step with the restart option.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The the finished step with the restart option.
- **Alt text (ES):** El paso final con la opción de reiniciar.

### CAP-UPDATE-01 Update check in the terminal

- **Priority:** P1 (important).
- **Page and section:** /install · Install, updating.
- **On screen:** `horneroctl package check` listing repository and AUR updates separately, with the AUR status.
- **Spec:** 3:2, 1200x800, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run on an installed demo system that has at least one pending update.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** `horneroctl package check` listing repository and AUR updates separately, with the AUR status.
- **Alt text (ES):** `horneroctl package check` listando por separado actualizaciones de repositorio y AUR, con el estado de AUR.

### CAP-INSTALL-06 Installer: progress

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Install, steps.
- **On screen:** The the install progress step.
- **Spec:** 16:9, 1920x1080, PNG master (lossless).
- **State:** theme Installer, mode n/a, layout n/a, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Run the current release ISO in the QA VM (`uv run hornero-qa ...`, one VM at a time) at 1920x1080 and capture with the QA screenshot tool.
  2. Use a throw-away virtual disk and the demo user name `demo`.
- **Privacy:** Demo user, demo hostname; no real network name.
- **Alt text (EN):** The the install progress step.
- **Alt text (ES):** El paso de progreso de instalación.

### CAP-UPDATE-02 Config snapshots and recovery

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Install, recovery.
- **On screen:** `horneroctl config snapshot list` with two saved snapshots.
- **Spec:** 3:2, 1200x800, PNG master (lossless).
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Create one snapshot with the documented command first.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** `horneroctl config snapshot list` with two saved snapshots.
- **Alt text (ES):** `horneroctl config snapshot list` con dos snapshots guardados.

## Session S13: Motion clips

Where: Host, demo user (recorder). About 90 minutes, 8 slots.

| Slot | Priority | Kind | Shown on |
| --- | --- | --- | --- |
| CAP-CLIP-01 | P0 | clip | /chromatic |
| CAP-CLIP-02 | P1 | clip | /companion |
| CAP-CLIP-03 | P1 | clip | /modes |
| CAP-CLIP-04 | P1 | clip | Showroom only |
| CAP-CLIP-05 | P1 | clip | Showroom only |
| CAP-CLIP-07 | P1 | clip | Showroom only |
| CAP-CLIP-06 | P2 | clip | Showroom only |
| CAP-CLIP-08 | P2 | clip | Showroom only |

### CAP-CLIP-01 Clip: Chromatic recolour

- **Priority:** P0 (launch-critical).
- **Page and section:** /chromatic · Chromatic, recolour in motion.
- **On screen:** 8 s loop: the wallpaper changes from Pampa to Fin del Mundo and shell, terminal and GTK recolour in one smooth pass, the contrast gate staying green.
- **Spec:** 16:9, 1280x720, WebM VP9 + MP4 H.264, no audio, poster PNG.
- **State:** theme Hornero Chromatic, mode Everyday, layout Cockpit, wallpaper pampa then fin-del-mundo.
- **Setup:**
  1. Start from the CAP-CHROMA-01 arrangement.
  2. Start `capture-helper.sh clip CAP-CLIP-01`; after 2 s switch the wallpaper; stop after 8 s.
  3. Trim so the loop starts and ends on the same state is NOT needed: end on state B, the site crossfades.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** 8 s loop: the wallpaper changes from Pampa to Fin del Mundo and shell, terminal and GTK recolour in one smooth pass, the contrast gate staying green.
- **Alt text (ES):** Loop de 8 s: el fondo cambia de Pampa a Fin del Mundo y shell, terminal y GTK se recolorean en una pasada suave, con el control de contraste en verde.

### CAP-CLIP-02 Clip: Javi flies in

- **Priority:** P1 (important).
- **Page and section:** /companion · Javi, motion.
- **On screen:** 6 s: Javi sleeping in the nest is summoned, flies across the desktop and lands next to the cursor.
- **Spec:** 16:9, 1280x720, WebM VP9 + MP4 H.264, no audio, poster PNG.
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Start the clip with Javi sleeping; summon with the Javi shortcut; stop after landing.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** 6 s: Javi sleeping in the nest is summoned, flies across the desktop and lands next to the cursor.
- **Alt text (ES):** 6 s: Javi duerme en el nido, lo convocan, cruza el escritorio volando y aterriza junto al cursor.

### CAP-CLIP-03 Clip: switching modes

- **Priority:** P1 (important).
- **Page and section:** /modes · Modes, motion.
- **On screen:** 8 s: Everyday to Signal to Focus from the launcher; the bar, deck and motion change each time.
- **Spec:** 16:9, 1280x720, WebM VP9 + MP4 H.264, no audio, poster PNG.
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Use the launcher entries "Signal mode", "Focus mode".
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** 8 s: Everyday to Signal to Focus from the launcher; the bar, deck and motion change each time.
- **Alt text (ES):** 8 s: de Everyday a Signal y a Focus desde el launcher; la barra, el deck y el movimiento cambian cada vez.

### CAP-CLIP-04 Clip: workspace needle

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Desktop, motion.
- **On screen:** 6 s: switching workspaces 1 to 2 to 3 with the workspace needle sweeping the bottom strip.
- **Spec:** 16:9, 1280x720, WebM VP9 + MP4 H.264, no audio, poster PNG.
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Super+1, Super+2, Super+3 at 1.5 s intervals.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** 6 s: switching workspaces 1 to 2 to 3 with the workspace needle sweeping the bottom strip.
- **Alt text (ES):** 6 s: cambio entre espacios 1, 2 y 3 con la aguja barriendo la franja inferior.

### CAP-CLIP-05 Clip: layout change

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Desktop, motion.
- **On screen:** 8 s: Cockpit to Hornero Left to Dock Bottom through the Layout Picker.
- **Spec:** 16:9, 1280x720, WebM VP9 + MP4 H.264, no audio, poster PNG.
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Super+Shift+B, pick each preset with the keyboard.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** 8 s: Cockpit to Hornero Left to Dock Bottom through the Layout Picker.
- **Alt text (ES):** 8 s: de Cockpit a Hornero Left y a Dock Bottom desde el selector de layouts.

### CAP-CLIP-07 Clip: boot to desktop

- **Priority:** P1 (important).
- **Page and section:** Showroom only · Greeter, motion.
- **On screen:** 12 s: greeter, login, the shell appearing with the reload cover, Cockpit ready.
- **Spec:** 16:9, 1280x720, WebM VP9 + MP4 H.264, no audio, poster PNG.
- **State:** theme Greeter to Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Record from the QA VM with a host-side recorder; no audio.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** 12 s: greeter, login, the shell appearing with the reload cover, Cockpit ready.
- **Alt text (ES):** 12 s: greeter, inicio de sesión, la shell apareciendo con la cubierta de recarga y Cockpit listo.

### CAP-CLIP-06 Clip: launcher search

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Desktop, motion.
- **On screen:** 5 s: Ctrl+Space, typing "term", launching kitty.
- **Spec:** 16:9, 1280x720, WebM VP9 + MP4 H.264, no audio, poster PNG.
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Type at a natural pace.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** 5 s: Ctrl+Space, typing "term", launching kitty.
- **Alt text (ES):** 5 s: Ctrl+Espacio, escribir «term» y abrir kitty.

### CAP-CLIP-08 Clip: apply and undo

- **Priority:** P2 (complementary).
- **Page and section:** Showroom only · Themes, motion.
- **On screen:** 6 s: apply a theme from Settings and press Undo on the toast.
- **Spec:** 16:9, 1280x720, WebM VP9 + MP4 H.264, no audio, poster PNG.
- **State:** theme Signal Night, mode Everyday, layout Cockpit, wallpaper buenos-aires-nocturno.
- **Setup:**
  1. Signal Night to Signal Day and back.
- **Privacy:** Global rules only (see "Privacy rules").
- **Alt text (EN):** 6 s: apply a theme from Settings and press Undo on the toast.
- **Alt text (ES):** 6 s: aplicar un tema desde Ajustes y pulsar Deshacer en el toast.

## Notes for the maintainer

- Javi and the nest (S08): shoot after the final Javi and nest art lands (feature ledger `javi-final-art` is planned).
- Greeter and installer (S12) need the QA VM or a fresh install; the greeter cannot be captured from a running session.
- Social cards stay brand-only until `CAP-OG-01` exists; `scripts/build-og.mjs` then reads it.
