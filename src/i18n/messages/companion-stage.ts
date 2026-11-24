// Message catalog for CompanionStage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  javiElCompanionHorneroEn: 'Javi, el companion hornero, en reposo',
  personaje: 'Personaje',
  animacion: 'Animación',
  estadoDelAsistente: 'Estado del asistente',
  asistente: 'Asistente',
  nido: 'Nido',
  recreacionEnElNavegadorCon:
    'Recreación en el navegador con los frames y tiempos propios de la shell — no es una captura de pantalla.',
};

export type Messages = typeof es;

const en: Messages = {
  javiElCompanionHorneroEn: 'Javi, the hornero companion, at rest',
  personaje: 'Character',
  animacion: 'Animation',
  estadoDelAsistente: 'Assistant state',
  asistente: 'Assistant',
  nido: 'Nest',
  recreacionEnElNavegadorCon: 'Browser recreation using the shell’s own frames and timings — not a screenshot.',
};

export const messages: Record<Locale, Messages> = { es, en };
