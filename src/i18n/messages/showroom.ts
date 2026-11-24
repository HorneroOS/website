// Message catalog for ShowroomPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  tarjetaDeMarcaDeHorneroos: 'Tarjeta de marca de HorneroOS para el showroom de capturas seleccionadas.',
  elShowroomDeHorneroosCapturas: (v0: string | number | null | undefined): string =>
    `El showroom de HorneroOS: ${v0} capturas reales seleccionadas, agrupadas por tema. El resto del archivo queda guardado sin mostrarse.`,
  capturasSeleccionadas: 'Capturas seleccionadas',
  enPublico: 'en público',
  unaSeleccionCuradaDeCapturas: (v0: string | number | null | undefined): string =>
    `Una selección curada de capturas reales, no el archivo entero: ${v0} imágenes elegidas porque cada una demuestra algo. Las demás quedan archivadas en el repositorio, sin mostrarse.`,
  comoSeCuroEstaSeleccion: 'Cómo se curó esta selección',
  losFondosConLicencia: 'Los fondos con licencia',
  gruposDelShowroom: 'Grupos del showroom',
  capturas: 'capturas',
};

export type Messages = typeof es;

const en: Messages = {
  tarjetaDeMarcaDeHorneroos: 'HorneroOS brand card for the selected-captures showroom.',
  elShowroomDeHorneroosCapturas: (v0: string | number | null | undefined): string =>
    `The HorneroOS showroom: ${v0} selected real captures, grouped by theme. The rest of the archive stays kept, unshown.`,
  capturasSeleccionadas: 'Selected captures',
  enPublico: 'public',
  unaSeleccionCuradaDeCapturas: (v0: string | number | null | undefined): string =>
    `A curated selection of real captures, not the whole archive: ${v0} images chosen because each one demonstrates something. The rest stay archived in the repository, unshown.`,
  comoSeCuroEstaSeleccion: 'How this selection was curated',
  losFondosConLicencia: 'The licensed wallpapers',
  gruposDelShowroom: 'Showroom groups',
  capturas: 'captures',
};

export const messages: Record<Locale, Messages> = { es, en };
