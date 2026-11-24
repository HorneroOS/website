// Message catalog for ThemesPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  claro: 'Claro',
  oscuro: 'Oscuro',
  temasHorneroos: 'Temas | HorneroOS',
  temasLosHorneroOriginalsMas: (v0: string | number | null | undefined): string =>
    `${v0} temas: los Hornero Originals más aspectos naturales, minimalistas, cyberpunk, synthwave y clásicos. Cada aspecto coordina el escritorio y se ajusta desde el Centro de control.`,
  temas: 'Temas',
  unAspectoDefineMasQue:
    'Un aspecto define más que el fondo. Hornero coordina los colores de la shell, las apps GTK y los íconos, y te deja ajustar cada pieza.',
  aspectos: 'aspectos',
  aspectosHorneroSignal: 'aspectos Hornero Signal',
  fotoDe: 'Foto de ',
  aspectosEnUnEscritorioAndando: 'Aspectos en un escritorio andando',
  aspectosRealesSobreEscritoriosReales:
    'Aspectos reales sobre escritorios reales: el panel de apariencia con su contraste verificado y los fondos Originals con las barras Night y Day.',
  todosLosAspectos: 'Todos los aspectos',
  primeroVanLosHorneroOriginals:
    'Primero van los Hornero Originals, seguidos por aspectos clásicos, naturales, minimalistas, cyberpunk y synthwave. Cada tarjeta es una apariencia completa. Su imagen es la escena asociada al aspecto, no una captura del escritorio. Nueve Hornero Originals usan fotos con atribución de distintos lugares de Argentina.',
  aspectosPropiosBasadosEnLa: 'Aspectos propios, basados en la identidad visual de Hornero y en lugares de Argentina.',
  verLaFotoDeY: (v0: string | number | null | undefined): string => `Ver la foto de ${v0} y sus créditos`,
  paletaDeColorFondoPrimario: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
    v3: string | number | null | undefined,
    v4: string | number | null | undefined,
  ): string => `${v0}, paleta de color: fondo ${v1}, primario ${v2}, secundario ${v3}, acento ${v4}`,
  estudioDeColor: 'Estudio de color',
  elegiUnFondo: 'Elegí un fondo',
  paletaDeColorDeHornero: 'Paleta de color de Hornero Config · combinala con cualquier fondo',
  otrosAspectos: 'Otros aspectos',
  otrasDireccionesElegidasPorComo: 'Otras direcciones, elegidas por cómo se ven en toda la Shell.',
  combinaConTuFondo: 'Combiná con tu fondo',
  aspectoConFondo: 'Aspecto con fondo',
  guiadoPorElFondo: 'Guiado por el fondo',
  estasTarjetasMuestranLaEscena:
    'Estas tarjetas muestran la escena asociada a un aspecto, no el escritorio andando. Los nueve Hornero Originals usan fotos verificadas y con atribución; el resto del material opcional es una colección aparte del usuario. Explorá la ',
  coleccionFotograficaDeFondos: 'colección fotográfica de fondos',
  paraVerLugaresFotografosY: 'para ver lugares, fotógrafos y licencias.',
  miraLasCapturasDelEscritorio: 'Mirá las capturas del escritorio en el Showroom',
  terminales: 'Terminales',
  horneroEscribeLaPaletaActiva:
    'Hornero escribe la paleta activa del fondo en el formato nativo de cada terminal. Kitty es la que viene por defecto; Alacritty y Ghostty son alternativas opcionales.',
  incluidaPorDefecto: 'Incluida por defecto',
  laConfigEmpaquetadaIncluyeLa: 'La config empaquetada incluye la paleta generada para tu apariencia actual.',
  opcional: 'Opcional',
  unImportTomlNativoMantiene: 'Un import TOML nativo mantiene los colores estáticos de Hornero como respaldo.',
  elNombreDeTemaEstable: 'El nombre de tema estable apunta a una paleta generada, con un respaldo empaquetado.',
  elegiUnaTerminalInstaladaEn: 'Elegí una terminal instalada en ',
  ajustesTerminal: 'Ajustes → Terminal',
  oCon: 'o con',
  leeLaGuiaDeLa: 'Leé la guía de la terminal',
  paraVerLaConfiguracionY: 'para ver la configuración y los detalles de apariencia.',
  otrasAplicacionesConTemasDe: 'Otras aplicaciones con temas de color nativos de Hornero',
  otrasHerramientas: 'Otras herramientas',
  horneroConfigPuedeGenerarTemas:
    'Hornero Config puede generar temas nativos derivados del fondo para estas herramientas. Sus configuraciones curadas eligen ',
  estasAplicacionesSiguenSiendoPaquetes: '; estas aplicaciones siguen siendo paquetes opcionales de Arch.',
  queIncluyeUnAspecto: 'Qué incluye un aspecto',
  unAspectoCubreLaShell:
    'Un aspecto cubre la Shell, la política GTK, los íconos y el fondo. Algunos packs referencian estilos GTK o de íconos opcionales; Hornero verifica si están instalados y nunca los descarga en silencio. Podés cambiar el aspecto y el modo claro u oscuro en Apariencia.',
  desdeElEscritorio: 'Desde el escritorio',
  ajustesApariencia: 'Ajustes → Apariencia',
  previsualizaUnAspectoAplicaloY: 'Previsualizá un aspecto, aplicalo y después ajustá el modo, el fondo y los colores.',
  miraElEscritorio: 'Mirá el escritorio',
  themeDescriptions: {
    patagonia:
      'El glaciar Perito Moreno como panel de instrumentos: superficies azul basalto, señal de hielo glaciar y un ámbar bajo',
    quebrada:
      'Los pliegues minerales del Hornocal sobre papel de dibujo: superficies piedra rosada, una señal ocre y un celeste profundo',
    ibera:
      'Los Esteros del Iberá al atardecer: superficies de agua oscura, señal dorada de totora, fósforo verde humedal y un celeste cielo',
    'fin-del-mundo':
      'La hora azul sobre el canal Beagle: superficies de agua fría, una señal cobre de última luz y un toque vidrio de mar',
    'buenos-aires-nocturno':
      'Buenos Aires de noche como sala de control: superficies grafito, señal ámbar sodio y un celeste ribereño',
    pampa:
      'Noche de pastizal tras un atardecer pampeano: superficies tierra oliva, señal dorada de caldén y un celeste de cielo alto',
    cuyo: 'Nieve y piedra del Aconcagua: papel mineral frío, una señal siena de sol en la roca y un celeste de aire fino',
    iguazu:
      'Las cataratas del Iguazú de cerca: superficies de basalto mojado, tinta de agua blanca, fósforo subtropical y un celeste de bruma',
    sierras:
      'Las sierras doradas de Córdoba: papel de pasto seco, una señal dorada profunda, fósforo oliva de altura y un cielo de cóndores',
    'catppuccin-latte':
      'Catppuccin Latte llevado a los roles Signal: superficies base y manto Latte, señal Peach y toque Sapphire oscurecido para AA',
    'catppuccin-mocha':
      'Catppuccin Mocha llevado a los roles Signal: superficies base y manto Mocha, señal Peach y toque Sky (verificado AA)',
    everforest:
      'Everforest oscuro llevado a los roles Signal: superficies de bosque, señal naranja y toque aqua (verificado AA)',
    gruvbox:
      'Gruvbox oscuro llevado a los roles Signal: superficies retro cálidas, señal naranja y toque azul aqua, normales levantados para AA',
    'hornero-signal-day':
      'Papel cálido de dibujo técnico con texto tinta negra, una señal viva ámbar quemado y un foco celeste profundo',
    'hornero-signal-dusk':
      'Noche hackerpunk cálida y acogedora: paneles carbón berenjena iluminados como lámpara de taller, tinta crema, señal ámbar cobre, toque cian y verde fósforo; los mismos roles y controles Signal que Night',
    'hornero-signal-contrast':
      'Roles Signal a máxima legibilidad: fondo negro puro, tinta y reglas blancas, señal ámbar brillante y toque celeste',
    'hornero-signal-night':
      'El de fábrica: paneles de instrumento grafito frío con tinta crema fósforo cálida, una señal ámbar viva y un foco celeste',
    landscape:
      'Superficies de instrumento pizarra neutra para fotografía de paisajes cinematográfica, con los roles ámbar y celeste de Signal',
    monochrome: 'Signal en escala de grises pura: roles solo de luminancia para concentrarse sin distracciones',
    'nord-dreams':
      'Nord llevado a los roles Signal: superficies Polar Night, tinta Snow Storm, señal naranja Aurora y toque Frost (verificado AA)',
    'rose-pine':
      'Rosé Pine llevado a los roles Signal: capas base y superficie, señal Gold y toque Foam (verificado AA)',
  } as Record<string, string>,
  wallpaperAlt: (isPhoto: boolean, name: string): string =>
    `${isPhoto ? 'Foto' : 'Vista previa del fondo'} de ${name}.`,
};

export type Messages = typeof es;

const en: Messages = {
  claro: 'Light',
  oscuro: 'Dark',
  temasHorneroos: 'Themes | HorneroOS',
  temasLosHorneroOriginalsMas: (v0: string | number | null | undefined): string =>
    `${v0} themes: the Hornero Originals plus natural, minimal, cyberpunk, synthwave and classic looks. Each look coordinates the desktop and is adjustable from the Control Center.`,
  temas: 'Themes',
  unAspectoDefineMasQue:
    'A look sets more than the wallpaper. Hornero coordinates the colors of the shell, GTK apps and icons, and lets you adjust each piece.',
  aspectos: 'looks',
  aspectosHorneroSignal: 'Hornero Signal looks',
  fotoDe: 'Photograph by ',
  aspectosEnUnEscritorioAndando: 'Looks on a running desktop',
  aspectosRealesSobreEscritoriosReales:
    'Real looks on real desktops: the appearance pane with its checked contrast, and the Originals wallpapers under Night and Day bars.',
  todosLosAspectos: 'All looks',
  primeroVanLosHorneroOriginals:
    'The Hornero Originals come first, followed by classic, natural, minimal, cyberpunk and synthwave looks. Each card is a complete appearance. Its image is the scene associated with the look, not a desktop screenshot. Nine Hornero Originals use attributed photographs from across Argentina.',
  aspectosPropiosBasadosEnLa: 'First-party looks based on Hornero’s visual identity and on places in Argentina.',
  verLaFotoDeY: (v0: string | number | null | undefined): string => `View ${v0} photograph and credits`,
  paletaDeColorFondoPrimario: (
    v0: string | number | null | undefined,
    v1: string | number | null | undefined,
    v2: string | number | null | undefined,
    v3: string | number | null | undefined,
    v4: string | number | null | undefined,
  ): string => `${v0} color palette: background ${v1}, primary ${v2}, secondary ${v3}, accent ${v4}`,
  estudioDeColor: 'Color study',
  elegiUnFondo: 'Choose a wallpaper',
  paletaDeColorDeHornero: 'Color palette from Hornero Config · pair with any wallpaper',
  otrosAspectos: 'Other looks',
  otrasDireccionesElegidasPorComo: 'Other directions, chosen for how they look across the Shell.',
  combinaConTuFondo: 'Pair with your wallpaper',
  aspectoConFondo: 'Wallpaper look',
  guiadoPorElFondo: 'Wallpaper-led',
  estasTarjetasMuestranLaEscena:
    'These cards show the scene associated with a look, not the running desktop. The nine Hornero Originals use verified, attributed photographs; other optional media is a separate user collection. Browse the ',
  coleccionFotograficaDeFondos: 'photographic wallpaper collection',
  paraVerLugaresFotografosY: 'for locations, photographers and licenses.',
  miraLasCapturasDelEscritorio: 'See desktop captures in the Showroom',
  terminales: 'Terminals',
  horneroEscribeLaPaletaActiva:
    'Hornero writes the active wallpaper palette in each terminal’s native format. Kitty is the included default; Alacritty and Ghostty are optional alternatives.',
  incluidaPorDefecto: 'Included default',
  laConfigEmpaquetadaIncluyeLa: 'The packaged config includes the palette generated for your current appearance.',
  opcional: 'Optional',
  unImportTomlNativoMantiene: 'A native TOML import keeps the static Hornero colors as a fallback.',
  elNombreDeTemaEstable: 'The stable theme name points to a generated palette, with a packaged fallback.',
  elegiUnaTerminalInstaladaEn: 'Choose an installed terminal in ',
  ajustesTerminal: 'Settings → Terminal',
  oCon: 'or with',
  leeLaGuiaDeLa: 'Read the terminal guide',
  paraVerLaConfiguracionY: 'for setup and appearance details.',
  otrasAplicacionesConTemasDe: 'Other applications with native Hornero color themes',
  otrasHerramientas: 'Other tools',
  horneroConfigPuedeGenerarTemas:
    'Hornero Config can generate native wallpaper-derived themes for these tools. Their curated configurations select ',
  estasAplicacionesSiguenSiendoPaquetes: '; these applications remain optional Arch packages.',
  queIncluyeUnAspecto: 'What a look includes',
  unAspectoCubreLaShell:
    'A look covers the Shell, GTK policy, icons and wallpaper. Some packs reference optional GTK or icon styles; Hornero checks whether they are installed and never downloads them silently. You can change the look and light or dark mode in Appearance.',
  desdeElEscritorio: 'From the desktop',
  ajustesApariencia: 'Settings → Appearance',
  previsualizaUnAspectoAplicaloY: 'Preview a look, apply it, then refine mode, wallpaper and colors.',
  miraElEscritorio: 'See the desktop',
  themeDescriptions: {} as Record<string, string>,
  wallpaperAlt: (isPhoto: boolean, name: string): string =>
    `${isPhoto ? 'Photograph' : 'Wallpaper preview'} for ${name}.`,
};

export const messages: Record<Locale, Messages> = { es, en };
