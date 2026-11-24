// Message catalog for LookCompare.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  revelaSignalDaySobreSignal: 'Revelá Signal Day sobre Signal Night',
};

export type Messages = typeof es;

const en: Messages = {
  revelaSignalDaySobreSignal: 'Reveal Signal Day over Signal Night',
};

export const messages: Record<Locale, Messages> = { es, en };
