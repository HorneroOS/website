// Capture slots: where the site shows a real desktop capture, and which
// showroom entry fills each slot today. QA replaces a slot by adding a new
// showroom entry (src/content/showroom/<id>.md, with provenance and
// `appearance: signal`) and pointing the slot's `capture` at it — no page
// code changes. See docs/CAPTURES.md for the full contract.
//
// `wanted` is the brief for the replacement capture. It is never shown as if
// it were an image; slots always render a real capture.

export type CaptureAppearance = 'signal' | 'pre-signal';

export interface CaptureSlot {
  /** Showroom entry id (src/content/showroom/<id>.md) that fills the slot. */
  capture: string;
  /** Where the slot renders. */
  usedOn: string[];
  /** Brief for QA: what a Hornero Signal replacement capture must show. */
  wanted: string;
}

export const captureSlots = {
  'home-workstation': {
    capture: 'terminal-tools',
    usedOn: ['/ (hero workstation)', '/editions (Desktop)'],
    wanted:
      'Signal Night, Cockpit preset, 1920×1080 at 100 % scale, real host. Two or more application windows doing real work (for example an editor and a terminal running a build, or btop and a file manager). No popouts, no Dashboard over the windows.',
  },
  'home-shell-dark': {
    capture: 'hornero-left',
    usedOn: ['/ (shell, dark half of the comparison)'],
    wanted: 'Signal Night, Hornero Left preset, 1920×1080, same wallpaper and window arrangement as home-shell-light.',
  },
  'home-shell-light': {
    capture: 'hornero-light',
    usedOn: ['/ (shell, light half of the comparison)'],
    wanted: 'Signal Day, Hornero Left preset, 1920×1080, same wallpaper and window arrangement as home-shell-dark.',
  },
} satisfies Record<string, CaptureSlot>;

export type CaptureSlotId = keyof typeof captureSlots;
