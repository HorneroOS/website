// Message catalog for ReleaseChannelNote.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  lanzadoComoPaquetesEnLa: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
  ): string =>
    `Lanzado como paquetes en ${v0}${v1}. La ISO de instalación actual (${v2}) no lo trae: después de instalar, o en una instalación existente, actualizá los paquetes del AUR.`,
  comoActualizar: 'Cómo actualizar',
  incluidoEnLaIsoActual: (v0: string | number | null | undefined): string =>
    `Incluido en la ISO actual (${v0}) y en sus paquetes.`,
  estaEnLaRamaMain: 'Está en la rama main de los repositorios, todavía en ninguna release.',
  experimentalPuedeCambiarODesaparecer: 'Experimental: puede cambiar o desaparecer.',
  planificadoTodaviaNoExiste: 'Planificado: todavía no existe.',
};

export type Messages = typeof es;

const en: Messages = {
  lanzadoComoPaquetesEnLa: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
  ): string =>
    `Released as packages in ${v0}${v1}. The current install ISO (${v2}) does not include it: after installing, or on an existing install, update the AUR packages.`,
  comoActualizar: 'How to update',
  incluidoEnLaIsoActual: (v0: string | number | null | undefined): string =>
    `Included in the current ISO (${v0}) and its packages.`,
  estaEnLaRamaMain: 'On the repositories’ main branch, in no release yet.',
  experimentalPuedeCambiarODesaparecer: 'Experimental: it may change or go away.',
  planificadoTodaviaNoExiste: 'Planned: it does not exist yet.',
};

export const messages: Record<Locale, Messages> = { es, en };
