// Message catalog for NotFoundPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  plateLabel: 'Señal no encontrada',
  paginaNoEncontradaHorneroos: 'Página no encontrada | HorneroOS',
  estaPaginaNoExiste: 'Esta página no existe.',
  paginaNoEncontrada: 'Página no encontrada',
  noHayNingunaPaginaEn: 'No hay ninguna página en esta dirección. Probá con una de estas:',
  inicio: 'Inicio',
  raices: 'Raíces',
  instalar: 'Instalar',
};

export type Messages = typeof es;

const en: Messages = {
  plateLabel: 'Signal not found',
  paginaNoEncontradaHorneroos: 'Page not found | HorneroOS',
  estaPaginaNoExiste: 'This page does not exist.',
  paginaNoEncontrada: 'Page not found',
  noHayNingunaPaginaEn: 'There is no page at this address. Try one of these:',
  inicio: 'Home',
  raices: 'Roots',
  instalar: 'Install',
};

export const messages: Record<Locale, Messages> = { es, en };
