// Message catalog for RootsPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  laLineaDeTiempoDe:
    'La línea de tiempo de HorneroOS de 2018 a 2026, con la etapa de 2018 en trazo discontinuo porque se apoya en el relato del maintainer.',
  raicesHorneroos: 'Raíces | HorneroOS',
  comoHorneroPasoDeUna:
    'Cómo Hornero pasó de una configuración personal de escritorio a proyectos abiertos separados, con una fuente para cada paso y crédito a su upstream.',
  raices: 'Raíces',
  horneroEmpezoComoUnaConfiguracion:
    'Hornero empezó como una configuración personal y creció hasta convertirse en proyectos mantenidos para la shell, los temas, las herramientas del sistema, el testing y la documentación.',
  lineaDeTiempo: 'Línea de tiempo',
  dosHistoriasRecorrenEstaPagina:
    'Dos historias recorren esta página: un escritorio personal en uso diario desde 2018, y un conjunto de proyectos independientes de HorneroOS que empezaron en septiembre de 2026. Una línea discontinua marca la etapa que git no puede confirmar. Cada otra fila enlaza al commit o tag que la fecha. La shell Quickshell actual no es el setup de 2018.',
  lineaDeTiempoDeHorneroos: 'Línea de tiempo de HorneroOS, 2018 a 2026',
  ilustracionDeUnHorneroY:
    'Ilustración de un hornero y su nido de barro arqueado sobre una cuadrícula de calles azul medianoche cortada por una avenida diagonal, bajo un sol naranja señal. Es una obra de arte, no una captura de escritorio.',
  arteDeHornero199xIlustracion:
    'Arte de Hornero 199X. Ilustración asistida por IA, dirigida y revisada por el proyecto. No es una captura.',
  laEstetica199x: 'La estética 199X',
  hornero199xTomaElementosDe:
    'Hornero 199X toma elementos de la gráfica de la televisión argentina, las revistas de home-computers y los arcades, de la cuadrícula de calles de La Plata cortada por diagonales, y del nido de barro del hornero. Es una dirección de arte, no un producto histórico. Las fotografías detrás de los temas Hornero Originals están licenciadas y acreditadas en la ',
  paginaDeFondos: 'página de fondos',
  leeElLenguajeDeDiseno: 'Leé el lenguaje de diseño',
  repositoriosPrincipales: 'Repositorios principales',
  losComponentesDelProductoViven:
    'Los componentes del producto viven en repositorios separados, así cada capa se puede revisar, empaquetar y probar por su cuenta. El ',
  mapaCompletoDeLaOrganizacion: 'mapa completo de la organización',
  tambienCubreDocsWebsiteQa: 'también cubre Docs, Website, QA y la gobernanza compartida.',
  runtimeQuickshellPresetsDeLayout: 'Runtime Quickshell, presets de layout, Companion y servicios de la shell',
  packsDeAparienciaDefaultsAssets: 'Packs de apariencia, defaults, assets de marca y datos de paquetes',
  cliNativaComposicionesDeReleases: 'CLI nativa, composiciones de releases y capacidades del sistema',
  laPantallaDeLoginSddm: 'La pantalla de login SDDM de Hornero y su runtime Qt 6',
  instaladorProvisorioYPerfilDe: 'Instalador provisorio y perfil de imagen; publicó la primera ISO firmada',
  recorridosEnMaquinasVirtualesY: 'Recorridos en máquinas virtuales y evidencia para builds completas del producto',
  referenciasParaContribuir: 'Referencias para contribuir',
  elLenguajeDeDisenoDefine:
    'El lenguaje de diseño define los principios de identidad e interacción compartidos entre proyectos. Cada repositorio es la fuente de sus propias reglas de implementación.',
  politicaDeProducto: 'Política de producto',
  lenguajeDeDisenoDeHorneroos: 'Lenguaje de diseño de HorneroOS',
  responsables: 'Responsables',
  mapaDeRepositorios: 'Mapa de repositorios',
  flujoDeTrabajo: 'Flujo de trabajo',
  guiaDeContribucion: 'Guía de contribución',
  creditos: 'Créditos',
  linajeDelCodigo: 'Linaje del código',
  laShellQuickshellEstaAdaptada: 'La shell Quickshell está adaptada de ',
  elAutorUpstreamLaLicencia:
    ' El autor upstream, la licencia y el commit importado siguen documentados en el repositorio.',
  referenciasDeDiseno: 'Referencias de diseño',
  sistemaOperativo: '(sistema operativo), ',
  shellDeEscritorioAntesDankmaterialshell: '(shell de escritorio, antes DankMaterialShell) y ',
  sistemaOperativoSonProyectosQue:
    '(sistema operativo) son proyectos que estudiamos por sus ajustes descubribles, temas coherentes y escritorios Linux accesibles.',
  laDireccionDeHornero: 'La dirección de Hornero',
  tomamosPreguntasDeEsosProyectos:
    'Tomamos preguntas de esos proyectos, no respuestas. Hornero toma sus propias decisiones visuales y de producto en abierto.',
  lasPersonasDetrasDeHorneroos: 'Las personas detrás de HorneroOS',
  esElMaintainerPrincipalDe: 'es el maintainer principal de HorneroOS.',
  contribuyeAHorneroosYEs: 'contribuye a HorneroOS y es uno de los maintainers de ',
  pandaVaALiderarEl:
    'Panda va a liderar el desarrollo del futuro instalador a medida de HorneroOS. El camino actual con ',
  calamares: 'Calamares',
  sigueSiendoProvisorioHastaQue:
    'sigue siendo provisorio hasta que ese instalador esté listo. Ambos forman parte de la ',
  organizacionHorneroos: 'organización HorneroOS',
  fuentesVerificadasEnShell: 'Fuentes verificadas en Shell',
  yHornero: 'y Hornero',
  lasFuentesFijadasDefinen: 'Las fuentes fijadas definen',
  packsDeTemas: 'packs de temas',
  eIncluyenLaComposicionEtiquetada: 'e incluyen la composición etiquetada',
};

export type Messages = typeof es;

const en: Messages = {
  laLineaDeTiempoDe:
    "The HorneroOS timeline from 2018 to 2026, with the 2018 stage dashed because it rests on the maintainer's account.",
  raicesHorneroos: 'Roots | HorneroOS',
  comoHorneroPasoDeUna:
    'How Hornero went from a personal desktop configuration to separate open projects, with a source for each step and credit to its upstream.',
  raices: 'Roots',
  horneroEmpezoComoUnaConfiguracion:
    'Hornero began as a personal configuration and grew into maintained projects for the shell, themes, system tools, testing and documentation.',
  lineaDeTiempo: 'Timeline',
  dosHistoriasRecorrenEstaPagina:
    'Two histories run through this page: a personal desktop that has been in daily use since 2018, and a set of standalone HorneroOS projects that began in September 2026. A dashed rule marks the stage git cannot confirm. Every other row links to the commit or tag that dates it. The current Quickshell shell is not the 2018 setup.',
  lineaDeTiempoDeHorneroos: 'HorneroOS timeline, 2018 to 2026',
  ilustracionDeUnHorneroY:
    'Illustration of a hornero bird and its arched mud nest over a midnight-blue street grid cut by a diagonal avenue, under a signal-orange sun. It is artwork, not a desktop screenshot.',
  arteDeHornero199xIlustracion:
    'Hornero 199X artwork. AI-assisted illustration, directed and reviewed by the project. Not a screenshot.',
  laEstetica199x: 'The 199X look',
  hornero199xTomaElementosDe:
    'Hornero 199X borrows from Argentine broadcast graphics, home-computer magazines and arcades, from La Plata’s street grid cut by diagonals, and from the hornero’s clay nest. It is an art direction, not a historical product. The photographs behind the Hornero Originals themes are licensed and credited on the ',
  paginaDeFondos: 'wallpapers page',
  leeElLenguajeDeDiseno: 'Read the design language',
  repositoriosPrincipales: 'Core repositories',
  losComponentesDelProductoViven:
    'The product components live in separate repositories, so each layer can be reviewed, packaged and tested on its own. The ',
  mapaCompletoDeLaOrganizacion: 'full organization map',
  tambienCubreDocsWebsiteQa: 'also covers Docs, Website, QA and shared governance.',
  runtimeQuickshellPresetsDeLayout: 'Quickshell runtime, layout presets, Companion and shell services',
  packsDeAparienciaDefaultsAssets: 'Appearance packs, defaults, brand assets and package data',
  cliNativaComposicionesDeReleases: 'Native CLI, release compositions and system capabilities',
  laPantallaDeLoginSddm: 'Hornero’s SDDM login screen and its Qt 6 runtime',
  instaladorProvisorioYPerfilDe: 'Provisional installer and image profile; it published the first signed ISO',
  recorridosEnMaquinasVirtualesY: 'Virtual-machine journeys and evidence for complete product builds',
  referenciasParaContribuir: 'Contributor references',
  elLenguajeDeDisenoDefine:
    'The design language sets the identity and interaction principles shared across projects. Each repository is the source for its own implementation rules.',
  politicaDeProducto: 'Product policy',
  lenguajeDeDisenoDeHorneroos: 'HorneroOS design language',
  responsables: 'Ownership',
  mapaDeRepositorios: 'Repository map',
  flujoDeTrabajo: 'Workflow',
  guiaDeContribucion: 'Contribution guide',
  creditos: 'Credits',
  linajeDelCodigo: 'Code ancestry',
  laShellQuickshellEstaAdaptada: 'The Quickshell shell is adapted from ',
  elAutorUpstreamLaLicencia: ' The upstream author, license and imported commit remain documented in the repository.',
  referenciasDeDiseno: 'Design references',
  sistemaOperativo: '(operating system), ',
  shellDeEscritorioAntesDankmaterialshell: '(desktop shell, previously DankMaterialShell) and ',
  sistemaOperativoSonProyectosQue:
    '(operating system) are projects we studied for discoverable settings, coherent themes and approachable Linux desktops.',
  laDireccionDeHornero: 'Hornero’s direction',
  tomamosPreguntasDeEsosProyectos:
    'We took questions from those projects, not answers. Hornero makes its own visual and product decisions in the open.',
  lasPersonasDetrasDeHorneroos: 'People behind HorneroOS',
  esElMaintainerPrincipalDe: 'is HorneroOS’s principal maintainer.',
  contribuyeAHorneroosYEs: 'contributes to HorneroOS and is one of the maintainers of ',
  pandaVaALiderarEl: 'Panda will lead development of HorneroOS’s future custom installer. The current ',
  calamares: 'Calamares path',
  sigueSiendoProvisorioHastaQue: ' remains provisional until that installer is ready. Both are part of the ',
  organizacionHorneroos: 'HorneroOS organization',
  fuentesVerificadasEnShell: 'Sources checked at Shell',
  yHornero: 'and Hornero',
  lasFuentesFijadasDefinen: 'The pinned sources define',
  packsDeTemas: 'theme packs',
  eIncluyenLaComposicionEtiquetada: 'and include the tagged composition',
};

export const messages: Record<Locale, Messages> = { es, en };
