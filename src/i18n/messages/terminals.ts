// Message catalog for TerminalsPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  terminalesHorneroos: (v0: string | number | null | undefined): string => `Terminales — ${v0} | HorneroOS`,
  elegiEntreEnAjustesDe: (v0: string | number | null | undefined): string =>
    `Elegí entre ${v0} en Ajustes de Hornero. Cada terminal recibe la paleta de Hornero en su propio formato nativo.`,
  terminales: 'Terminales',
  puedenSeguirLaAparienciaDe: (v0: string | number | null | undefined): string =>
    `${v0} pueden seguir la apariencia de Hornero. Hornero escribe los colores en el formato nativo de cada terminal. Instalá los emuladores que quieras y después elegí cuál abre Hornero.`,
  leeLaGuiaDeTerminales: 'Leé la guía de terminales',
  exploraLasAparienciasDeHornero: 'Explorá las apariencias de Hornero',
  comoFuncionaLaSeleccionDe: 'Cómo funciona la selección de terminal',
  terminalPorDefecto: 'Terminal por defecto',
  ajustesListaLosEmuladoresSoportados:
    'Ajustes lista los emuladores soportados, marca cuáles están instalados y te deja elegir solo uno instalado.',
  laTerminalPorDefecto: 'La terminal por defecto',
  esLaEleccionDeFabrica: 'es la elección de fábrica.',
  reemplaza: 'Reemplazá',
  por: 'por',
  o: ' o ',
  kittyConLaPaletaDe: 'Kitty con la paleta de Hornero',
  kittyConservaSuConfiguracionNativa:
    'Kitty conserva su configuración nativa y recibe los colores generados por Hornero en el formato propio de Kitty. El mismo motor de apariencia escribe la salida correspondiente para Alacritty y Ghostty cuando están instalados.',
  miraComoLasAparienciasSe: 'Mirá cómo las apariencias se trasladan a todo el escritorio',
  terminalesSoportadas: 'terminales soportadas',
  horneroRespetaLasConvencionesPropias:
    'Hornero respeta las convenciones propias de cada terminal. La paleta de tu fondo se traduce a cada formato nativo en vez de a un único archivo de tema genérico.',
  eleccionDeFabrica: 'Elección de fábrica',
  alternativaSoportada: 'Alternativa soportada',
  ejemploDeConfiguracionDe: (v0: string | number | null | undefined): string => `Ejemplo de configuración de ${v0}`,
  instalaDesdeLosRepositoriosDe: 'Instalá desde los repositorios de Arch',
  configuracionDeFabrica: 'Configuración de fábrica',
  archivoDeConfiguracion: 'Archivo de configuración',
  paletaGenerada: 'Paleta generada',
  escritaEn: 'Escrita en',
  previsualizacionesDeImagenesConYazi: 'Previsualizaciones de imágenes con Yazi',
  previsualizacionesDeImagenes: 'Previsualizaciones de imágenes.',
  yaziMuestraImagenesDentroDe:
    'Yazi muestra imágenes dentro de la terminal, mediante el protocolo gráfico de Kitty o, en Alacritty cuando está configurado, el adaptador de Wayland mediante Überzug++.',
  configuracion: 'Configuración',
  instalaUnaTerminal: 'Instalá una terminal',
  esLaEleccionDeFabrica2: 'es la elección de fábrica. Los demás emuladores listados son paquetes opcionales.',
  seleccionalaEnAjustes: 'Seleccionala en Ajustes',
  elCentroDeControlMarca:
    'El Centro de control marca las opciones instaladas y no te deja seleccionar una terminal que no está instalada.',
  cambiaLaApariencia: 'Cambiá la apariencia',
  horneroEscribePaletasNativasNuevas: (v0: string | number | null | undefined): string =>
    `Hornero escribe paletas nativas nuevas para las ${v0} integraciones; la terminal activa lee su propio archivo.`,
  estaPaginaDescribeLaIntegracion:
    'Esta página describe la integración actual con paquetes de Arch. Los paquetes de terminales son independientes de Hornero Shell, así que instalar Hornero no requiere todos los emuladores.',
};

export type Messages = typeof es;

const en: Messages = {
  terminalesHorneroos: (v0: string | number | null | undefined): string => `Terminals — ${v0} | HorneroOS`,
  elegiEntreEnAjustesDe: (v0: string | number | null | undefined): string =>
    `Choose among ${v0} in Hornero Settings. Each terminal receives the Hornero palette in its own native format.`,
  terminales: 'Terminals',
  puedenSeguirLaAparienciaDe: (v0: string | number | null | undefined): string =>
    `${v0} can follow the Hornero appearance. Hornero writes the colors in each terminal’s native format. Install the emulators you want, then choose which one Hornero opens.`,
  leeLaGuiaDeTerminales: 'Read the terminal guide',
  exploraLasAparienciasDeHornero: 'Explore Hornero appearances',
  comoFuncionaLaSeleccionDe: 'How terminal selection works',
  terminalPorDefecto: 'Default terminal',
  ajustesListaLosEmuladoresSoportados:
    'Settings lists the supported emulators, marks which are installed and lets you pick only an installed one.',
  laTerminalPorDefecto: 'The default terminal',
  esLaEleccionDeFabrica: 'is the factory choice.',
  reemplaza: 'Replace',
  por: 'with',
  o: ' or ',
  kittyConLaPaletaDe: 'Kitty with the Hornero palette',
  kittyConservaSuConfiguracionNativa:
    'Kitty keeps its native configuration and receives Hornero’s generated colors in Kitty’s own format. The same appearance engine writes the matching output for Alacritty and Ghostty when they are installed.',
  miraComoLasAparienciasSe: 'See how appearances carry across the desktop',
  terminalesSoportadas: 'supported terminals',
  horneroRespetaLasConvencionesPropias:
    'Hornero keeps each terminal’s own conventions. The palette from your wallpaper is translated into each native format instead of one generic theme file.',
  eleccionDeFabrica: 'Factory choice',
  alternativaSoportada: 'Supported alternative',
  ejemploDeConfiguracionDe: (v0: string | number | null | undefined): string => `${v0} configuration example`,
  instalaDesdeLosRepositoriosDe: 'Install from the Arch repositories',
  configuracionDeFabrica: 'Factory config',
  archivoDeConfiguracion: 'Config file',
  paletaGenerada: 'Generated palette',
  escritaEn: 'Written under',
  previsualizacionesDeImagenesConYazi: 'Image previews with Yazi',
  previsualizacionesDeImagenes: 'Image previews.',
  yaziMuestraImagenesDentroDe:
    'Yazi shows images inside the terminal, through Kitty’s graphics protocol or, under Alacritty where configured, the Wayland adapter through Überzug++.',
  configuracion: 'Setup',
  instalaUnaTerminal: 'Install a terminal',
  esLaEleccionDeFabrica2: 'is the factory choice. The other listed emulators are optional packages.',
  seleccionalaEnAjustes: 'Select it in Settings',
  elCentroDeControlMarca:
    'Control Center marks installed choices and does not let you select a terminal that is not installed.',
  cambiaLaApariencia: 'Change appearance',
  horneroEscribePaletasNativasNuevas: (v0: string | number | null | undefined): string =>
    `Hornero writes fresh native palettes for all ${v0} integrations; the active terminal reads its own file.`,
  estaPaginaDescribeLaIntegracion:
    'This page describes the current Arch package integration. Terminal packages are separate from Hornero Shell, so installing Hornero does not require every emulator.',
};

export const messages: Record<Locale, Messages> = { es, en };
