// Message catalog for CaptureLabel.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  fotografiaReal: 'Fotografía real',
  clipRealHorneroSignal: 'Clip real · Hornero Signal',
  capturaRealHorneroSignal: 'Captura real · Hornero Signal',
};

export type Messages = typeof es;

const en: Messages = {
  fotografiaReal: 'Real photograph',
  clipRealHorneroSignal: 'Real clip · Hornero Signal',
  capturaRealHorneroSignal: 'Real capture · Hornero Signal',
};

export const messages: Record<Locale, Messages> = { es, en };
