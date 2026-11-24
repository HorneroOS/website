// Message catalog for ChromaticPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  diagramaDeHorneroChromaticEn:
    'Diagrama de Hornero Chromatic en cuatro pasos: imagen, semillas, roles de Signal y control de contraste. No es una captura.',
  horneroChromaticColorDesdeTu: 'Hornero Chromatic: color desde tu fondo | HorneroOS',
  horneroChromaticEsColorDinamico:
    'Hornero Chromatic es color dinámico opcional para HorneroOS: la paleta de Signal sale de tu fondo de pantalla, con garantías de contraste. Signal Night y Day siguen siendo el valor de fábrica.',
  colorDinamico: 'Color dinámico',
  tuFondoTuPaletaSin: 'Tu fondo, tu paleta. Sin perder la legibilidad.',
  chromaticEsUnaOpcionGenera:
    'Chromatic es una opción: genera los roles de Signal directamente desde una imagen y los aplica al shell, las terminales, las aplicaciones y las extensiones. Signal Night, Signal Day y Alto contraste siguen siendo el valor de fábrica y el respaldo de cualquier falla.',
  deLaImagenATodo: 'De la imagen a todo el sistema',
  esUnEsquemaDelProceso:
    'Es un esquema del proceso descrito en la RFC, no una captura. La paleta se valida contra la tabla de controles de HorneroOS/config antes de escribirse; ahí no hay Material Design ni Python.',
  loQueChromaticSeCompromete: 'Lo que Chromatic se compromete a no romper',
  siempreLegible: 'Siempre legible',
  tresNivelesDeContrasteEstandar:
    'Tres niveles de contraste (estándar, reforzado y máximo). Si una paleta no pasa los controles, no se aplica. Sobre superficies translúcidas se respeta una opacidad mínima calculada contra los píxeles más claros y más oscuros del fondo.',
  lasBarrasClarasSiguenClaras: 'Las barras claras siguen claras',
  chromaticPuedeCambiarLaTinta:
    'Chromatic puede cambiar la tinta de Cockpit Clear, nunca agregarle fondo, tinte, velo ni desenfoque.',
  altoContrasteEstaProtegido: 'Alto contraste está protegido',
  elInterruptorDeAltoContraste:
    'El interruptor de alto contraste siempre muestra la tabla curada y apaga la translucidez, haga lo que haga Chromatic.',
  movimientoConPermiso: 'Movimiento con permiso',
  conMovimientoReducidoLasTransiciones:
    'Con movimiento reducido, las transiciones de paleta se desactivan. El estado nunca depende solo del tono.',
  ochoVariantes: 'Ocho variantes',
  laEleccionAutomaticaSeLimita:
    'La elección automática se limita a cuatro; las otras son decisión tuya. Además podés ajustar la profundidad de superficie, la escala de croma y el corrimiento de tono.',
  automatica: 'automática',
  elValorDeFabricaNo: 'El valor de fábrica no cambia',
  chromaticEstaApagadoHastaQue: 'Chromatic está apagado hasta que lo elegís. Estos son los temas curados de Signal:',
  losRolesDeSignalEn: 'Los roles de Signal en este sitio, con los valores del modo de color que estás viendo:',
  verTodosLosTemas: 'Ver todos los temas',
  unEscritorioDosFondos: 'Un escritorio, dos fondos',
  laPruebaEstaEnEl:
    'La prueba está en el propio panel de Chromatic: lee el fondo, propone la paleta y verifica el contraste. Debajo, dos fondos de ejemplo que puede muestrear; en las barras solas el efecto no se lee, y esta página no finge que sí.',
  linajeYCreditos: 'Linaje y créditos',
  laIdeaSemillasDesdeEl:
    'La idea (semillas desde el fondo, variantes, sabores, modo inteligente) viene de Caelestia (GPL-3.0). Chromatic es una implementación nueva: no copia código ni tablas de Caelestia y no usa roles ni widgets de Material.',
  leeLaRfc0002: 'Leé la RFC 0002',
  evidencia: 'Evidencia',
};

export type Messages = typeof es;

const en: Messages = {
  diagramaDeHorneroChromaticEn:
    'Hornero Chromatic diagram in four steps: image, seeds, Signal roles and contrast gate. Not a screenshot.',
  horneroChromaticColorDesdeTu: 'Hornero Chromatic: colour from your wallpaper | HorneroOS',
  horneroChromaticEsColorDinamico:
    'Hornero Chromatic is optional dynamic colour for HorneroOS: the Signal palette comes from your wallpaper, with contrast guarantees. Signal Night and Day stay the factory default.',
  colorDinamico: 'Dynamic colour',
  tuFondoTuPaletaSin: 'Your wallpaper, your palette. Without losing legibility.',
  chromaticEsUnaOpcionGenera:
    'Chromatic is an option: it generates the Signal roles directly from an image and applies them to the shell, terminals, applications and extensions. Signal Night, Signal Day and High Contrast stay the factory default and the fallback for any failure.',
  deLaImagenATodo: 'From image to whole system',
  esUnEsquemaDelProceso:
    'This is a diagram of the process described in the RFC, not a screenshot. The palette is validated against the gate table in HorneroOS/config before it is written; there is no Material Design and no Python in that path.',
  loQueChromaticSeCompromete: 'What Chromatic promises not to break',
  siempreLegible: 'Always readable',
  tresNivelesDeContrasteEstandar:
    'Three contrast levels (standard, boosted and maximum). A palette that fails the gates is never applied. Translucent surfaces keep a minimum opacity computed against the wallpaper’s lightest and darkest pixels.',
  lasBarrasClarasSiguenClaras: 'Clear bars stay clear',
  chromaticPuedeCambiarLaTinta: 'Chromatic may change the ink of Cockpit Clear, never add a fill, tint, scrim or blur.',
  altoContrasteEstaProtegido: 'High contrast is protected',
  elInterruptorDeAltoContraste:
    'The high-contrast switch always shows the curated table and disables translucency, whatever Chromatic produces.',
  movimientoConPermiso: 'Motion with permission',
  conMovimientoReducidoLasTransiciones:
    'With reduced motion, palette transitions are disabled. Status never depends on hue alone.',
  ochoVariantes: 'Eight variants',
  laEleccionAutomaticaSeLimita:
    'Automatic choice is limited to four; the rest are your call. You can also tune surface depth, chroma scale and hue shift.',
  automatica: 'auto',
  elValorDeFabricaNo: 'The factory default does not change',
  chromaticEstaApagadoHastaQue: 'Chromatic is off until you pick it. These are the curated Signal themes:',
  losRolesDeSignalEn: 'The Signal roles on this site, at the values of the colour mode you are viewing:',
  verTodosLosTemas: 'See all themes',
  unEscritorioDosFondos: 'One desktop, two wallpapers',
  laPruebaEstaEnEl:
    'The proof is in Chromatic’s own panel: it reads the wallpaper, proposes the palette and checks contrast. Below it, two sample wallpapers it can sample; the effect does not read from the bars alone, and this page does not pretend otherwise.',
  linajeYCreditos: 'Lineage and credit',
  laIdeaSemillasDesdeEl:
    'The idea (wallpaper seeds, variants, flavours, smart mode) comes from Caelestia (GPL-3.0). Chromatic is a new implementation: it copies no Caelestia code or tables and uses no Material roles or widgets.',
  leeLaRfc0002: 'Read RFC 0002',
  evidencia: 'Evidence',
};

export const messages: Record<Locale, Messages> = { es, en };
