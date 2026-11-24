// Message catalog for CaptureGallery.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  capturasSeleccionadas: 'Capturas seleccionadas',
};

export type Messages = typeof es;

const en: Messages = {
  capturasSeleccionadas: 'Selected captures',
};

export const messages: Record<Locale, Messages> = { es, en };
