// Message catalog for ModeSchematic.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  esquemaDelModoMovimientoBarra: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
    v3: string | number | null | undefined,
  ): string => `Esquema del modo ${v0}: movimiento ${v1}, barra ${v2}, escritorio ${v3}. Es un dibujo, no una captura.`,
  esquemaNoEsUnaCaptura: 'Esquema — no es una captura',
};

export type Messages = typeof es;

const en: Messages = {
  esquemaDelModoMovimientoBarra: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
    v3: string | number | null | undefined,
  ): string => `Schematic of ${v0} mode: motion ${v1}, bar ${v2}, desktop ${v3}. A drawing, not a screenshot.`,
  esquemaNoEsUnaCaptura: 'Schematic — not a screenshot',
};

export const messages: Record<Locale, Messages> = { es, en };
