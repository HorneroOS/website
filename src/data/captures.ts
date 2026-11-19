// Capture slots: every place the site would show what the distro looks like.
//
// The single source of truth is src/data/capture-slots.json. A slot is
// `pending` until a real host capture exists; the shared CaptureFigure
// component then renders a labelled "pending capture" plate with the same
// aspect ratio the image will have, so swapping in a capture causes no layout
// shift. To fill a slot: drop the file in src/assets/captures/ (clips go in
// public/captures/) and flip `status` to `captured` and set `file`
// (`node scripts/capture-ingest.mjs <ID> <file>` does both and validates the
// image). docs/CAPTURES.md has the contract and docs/CAPTURE-SHOT-LIST.md the
// full list of what to shoot.

import data from './capture-slots.json';

export type SlotPriority = 'P0' | 'P1' | 'P2';
export type SlotKind = 'screenshot' | 'clip' | 'photo';
export type SlotStatus = 'pending' | 'captured';

export interface Localized {
  en: string;
  es: string;
}

export interface CaptureSlot {
  id: string;
  priority: SlotPriority;
  session: string;
  kind: SlotKind;
  title: Localized;
  description: Localized;
  alt: Localized;
  /** Routes (Spanish, root-relative) where the slot renders inline. Every slot also renders in /showroom. */
  pages: string[];
  section: string;
  aspect: string;
  width: number;
  height: number;
  scale2x: boolean;
  format: string;
  theme: string;
  mode: string;
  layout: string;
  wallpaper: string;
  setup: string[];
  privacy: string;
  status: SlotStatus;
  /** File name under src/assets/captures/ (public/captures/ for clips) once captured. */
  file: string | null;
  /** Poster image (src/assets/captures/) for clips. */
  poster?: string | null;
  capturedAt?: string;
  sha256?: string;
  source?: Localized;
  pins?: Record<string, string>;
  credit?: Localized;
}

export interface CaptureSession {
  id: string;
  title: Localized;
  where: string;
  minutes: number;
}

export const captureSlots = data.slots as CaptureSlot[];
export const captureSessions = data.sessions as CaptureSession[];

const byId = new Map(captureSlots.map((slot) => [slot.id, slot]));

export function getSlot(id: string): CaptureSlot {
  const slot = byId.get(id);
  if (!slot) throw new Error(`Capture slot '${id}' is not declared in src/data/capture-slots.json`);
  return slot;
}

/** Slots declared for a route, in the order they appear in the data file. */
export function slotsForPage(route: string): CaptureSlot[] {
  return captureSlots.filter((slot) => slot.pages.includes(route));
}

export const priorityOrder: SlotPriority[] = ['P0', 'P1', 'P2'];

export function slotCounts() {
  const counts = { P0: 0, P1: 0, P2: 0, total: captureSlots.length, captured: 0 };
  for (const slot of captureSlots) {
    counts[slot.priority] += 1;
    if (slot.status === 'captured') counts.captured += 1;
  }
  return counts;
}
