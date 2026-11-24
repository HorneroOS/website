// Message catalog for ThemePaletteStudy.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  unaPaletaEnContexto: 'Una paleta, en contexto',
  miraComoTrabajanJuntosLos: 'Mirá cómo trabajan juntos los colores.',
  cambiaEntreLasPaletasSemanticas:
    'Cambiá entre las paletas semánticas catalogadas de Hornero. Este pequeño estudio de color web usa los mismos roles publicados de fondo, superficie, texto y acento; no es una captura de escritorio.',
  elAjusteSistemaClaroY: 'El ajuste Sistema, Claro y Oscuro de la página sigue siendo independiente.',
  elegiUnaPaletaDeColores: 'Elegí una paleta de colores de Hornero',
  paleta: (v0: string | number | null | undefined): string => `paleta ${v0}`,
  estudioDeColorEstaticoEl: (v0: string | number | null | undefined): string =>
    `Estudio de color estático · ${v0}. El catálogo completo de temas y las capturas reales de escritorio siguen disponibles abajo.`,
  apariencia: 'Apariencia',
  paleta2: (v0: string | number | null | undefined): string => `paleta ${v0}`,
  rolesDeColor: 'Roles de color',
  exploraEsteLook: 'Explorá este look',
  rolesDeColorDeLa: 'Roles de color de la paleta',
  roleLabels: {
    Primary: 'Primario',
    Accent: 'Acento',
    Surface: 'Superficie',
    Canvas: 'Lienzo',
    Text: 'Texto',
    Muted: 'Apagado',
  } as Record<string, string>,
};

export type Messages = typeof es;

const en: Messages = {
  unaPaletaEnContexto: 'A palette, in context',
  miraComoTrabajanJuntosLos: 'See the colors work together.',
  cambiaEntreLasPaletasSemanticas:
    'Switch between Hornero’s catalogued semantic palettes. This small web color study uses the same published background, surface, text and accent roles; it is not a desktop screenshot.',
  elAjusteSistemaClaroY: 'The page’s System, Light and Dark setting remains independent.',
  elegiUnaPaletaDeColores: 'Choose a Hornero color palette',
  paleta: (v0: string | number | null | undefined): string => `${v0} palette`,
  estudioDeColorEstaticoEl: (v0: string | number | null | undefined): string =>
    `Static color study · ${v0}. The complete theme catalog and real desktop captures remain available below.`,
  apariencia: 'Appearance',
  paleta2: (v0: string | number | null | undefined): string => `${v0} palette`,
  rolesDeColor: 'Color roles',
  exploraEsteLook: 'Explore this look',
  rolesDeColorDeLa: 'Palette color roles',
  roleLabels: {
    Primary: 'Primary',
    Accent: 'Accent',
    Surface: 'Surface',
    Canvas: 'Canvas',
    Text: 'Text',
    Muted: 'Muted',
  } as Record<string, string>,
};

export const messages: Record<Locale, Messages> = { es, en };
