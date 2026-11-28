// Message catalog for GamingPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  runtimeLayer: [
    { name: 'Proton', detail: 'Capa de compatibilidad de Valve, a través de Steam (a elección explícita).' },
    { name: 'Gamescope', detail: 'Microcompositor de Valve para sesiones de juego; sin promesas de rendimiento.' },
    { name: 'GameMode', detail: 'Optimizaciones temporales a pedido de Feral Interactive.' },
    { name: 'MangoHud', detail: 'Overlay de métricas; las métricas no son evidencia de compatibilidad.' },
  ],
  soloDeReferencia: 'Solo de referencia',
  propietarioAEleccion: 'Propietario · a elección',
  codigoAbierto: 'Código abierto',
  opcional: 'Opcional',
  catalogado: 'Catalogado',
  stats: (specializations: number, applications: number) => [
    { value: String(specializations), label: 'perfiles en el catálogo' },
    { value: String(applications), label: 'aplicaciones en el catálogo' },
    { value: '0', label: 'promesas de compatibilidad de juegos' },
  ],
  gamingJugaATuManera: 'Gaming: jugá a tu manera | HorneroOS',
  lasAplicacionesDelCatalogoGaming:
    'Las aplicaciones del catálogo Gaming (Steam, propietaria y a elección; Lutris, Bottles, Wine y OBS Studio, a elección), junto a la frase «Gaming: play on your terms».',
  horneroosGamingEsUnaEdicion:
    'HorneroOS Gaming es una edición construida sobre Desktop para uso diario: Steam y Proton, Gamescope, GameMode y MangoHud, con perfiles combinables y diagnóstico honesto. Se instala desde la misma ISO que Desktop y Studio.',
  edicionGaming: 'Edición Gaming',
  escritorioParaJugar: 'Escritorio para jugar',
  jugaATuManera: 'Jugá a tu manera.',
  horneroosGamingEsLaEdicion:
    'HorneroOS Gaming es la edición para jugar construida sobre Desktop: el mismo Hornero Shell, la misma configuración y el mismo horneroctl, más una capa de juego combinable (Steam con Proton, Gamescope, GameMode de Feral y MangoHud). Se elige en el mismo instalador y la misma ISO que Desktop y Studio, no instalamos nada en silencio y no prometemos que ningún juego funcione en ningún hardware.',
  aplicacionesInsigniaDeGaming: 'Aplicaciones insignia de Gaming',
  aurManual: 'AUR · manual',
  hoy: 'Hoy:',
  elCatalogoCanonicoY: ' el catálogo canónico y ',
  yaTeAyudaAChequear:
    ' ya te ayuda a chequear tu máquina, y Gaming se instala desde la ISO actual compartida (Desktop, Studio y Gaming). Se usa a diario en al menos 3 computadoras físicas reales (por ejemplo un escritorio Ryzen 9 con RTX 3060); tu hardware específico puede comportarse distinto según drivers GPU, handhelds o pantallas VRR/HDR.',
  unaSesionReal: 'Una sesión real',
  perfilesCombinables: 'Perfiles combinables',
  elegisPerfilesYAplicacionesEl:
    'Elegís perfiles y aplicaciones; el resolvedor canónico arma el plan y Steam solo entra si lo elegís explícitamente por nombre. Los perfiles no instalan software propietario por la puerta de atrás.',
  predeterminado: 'Predeterminado',
  steamAEleccion: 'Steam a elección',
  sinAplicacionesPorDefectoSumas: 'Sin aplicaciones por defecto: sumás solo lo que querés.',
  aplicacionesFuentesYLicencias: 'Aplicaciones, fuentes y licencias',
  esteCatalogoSeGeneraDesde: (v0: string | number | null | undefined): string =>
    `Este catálogo se genera desde el catálogo pineado de Hornero (HorneroOS/hornero en ${v0}); los logos son los íconos oficiales de cada proyecto, mostrados a modo de identificación. Steam es propietario y siempre a elección explícita; Heroic y SteamVR son solo de referencia; las entradas de AUR son manuales y opcionales, y ninguna herramienta de HorneroOS ejecuta recetas de AUR. vkBasalt y SteamVR no tienen un ícono oficial incorporado, así que llevan una insignia de texto propia del sitio (iniciales), nunca presentada como su logo.`,
  aurManualYOpcional: 'AUR · manual y opcional',
  paquetes: 'Paquetes',
  fuente: 'Fuente',
  licencia: 'Licencia',
  verElPaquete: 'Ver el paquete',
  capaDeEjecucion: 'Capa de ejecución',
  estosComponentesAcompananALas:
    'Estos componentes acompañan a las aplicaciones del catálogo, pero no son aplicaciones instalables por perfil: se muestran solo con el nombre, sin logos de procedencia no verificada.',
  limitesHonestos: 'Límites honestos',
  antiCheatYCompatibilidad: 'Anti-cheat y compatibilidad',
  elAntiCheatANivel:
    'El anti-cheat a nivel kernel no funciona en Linux: Easy Anti-Cheat y BattlEye dependen de que cada editor habilite Proton.',
  todaviaNoPublicamosUnaLista:
    'Todavía no publicamos una lista propia de compatibilidad de juegos; para cada juego manda su estado en Proton y lo que habilite su editor.',
  gpuPantallasYHandhelds: 'GPU, pantallas y handhelds',
  losDriversDeGpuSon:
    'Los drivers de GPU son una decisión de hardware del instalador y del primer arranque, nunca una promesa derivada de un PCI ID.',
  vrrYHdrSonExperimentales:
    'VRR y HDR son experimentales; las handhelds necesitan calificación por dispositivo (Steam Deck es la referencia, no una garantía para ROG Ally o Legion Go).',
  diagnostico: 'Diagnóstico',
  informaCapacidadYRegistroVulkan:
    ' informa capacidad y registro (Vulkan, loader de 32 bits, Steam, GameMode, Gamescope, MangoHud, audio, controles y recuperación).',
  nuncaAfirmaCompatibilidadRendimientoNi: 'Nunca afirma compatibilidad, rendimiento ni latencia.',
  horneroosDesktopStudioYGaming: 'HorneroOS Desktop, Studio y Gaming se descargan desde ',
  laPaginaDeInstalacion: 'la página de instalación',
  explorarHorneroApps: 'Hornero Apps',
  probarEnPlayground: 'Probar sin instalar',
};

export type Messages = typeof es;

const en: Messages = {
  runtimeLayer: [
    { name: 'Proton', detail: "Valve's compatibility layer, via Steam (explicit opt-in)." },
    { name: 'Gamescope', detail: "Valve's game-session microcompositor; no performance promises." },
    { name: 'GameMode', detail: "Feral Interactive's on-demand temporary optimizations." },
    { name: 'MangoHud', detail: 'Metrics overlay; metrics are not compatibility evidence.' },
  ],
  soloDeReferencia: 'Reference only',
  propietarioAEleccion: 'Proprietary · opt-in',
  codigoAbierto: 'Open source',
  opcional: 'Optional',
  catalogado: 'Catalogued',
  stats: (specializations: number, applications: number) => [
    { value: String(specializations), label: 'profiles in the catalogue' },
    { value: String(applications), label: 'applications in the catalogue' },
    { value: '0', label: 'game-compatibility promises' },
  ],
  gamingJugaATuManera: 'Gaming: play on your terms | HorneroOS',
  lasAplicacionesDelCatalogoGaming:
    "The Gaming catalogue applications (Steam, proprietary and opt-in; Lutris, Bottles, Wine and OBS Studio, opt-in), beside the line 'Gaming: play on your terms'.",
  horneroosGamingEsUnaEdicion:
    'HorneroOS Gaming is an edition built on Desktop for everyday use: Steam and Proton, Gamescope, GameMode and MangoHud, with composable profiles and honest diagnostics. It installs from the same ISO as Desktop and Studio.',
  edicionGaming: 'Gaming edition',
  escritorioParaJugar: 'Desktop for play',
  jugaATuManera: 'Play on your terms.',
  horneroosGamingEsLaEdicion:
    'HorneroOS Gaming is the play edition built on top of Desktop: the same Hornero Shell, the same configuration and the same horneroctl, plus a composable gaming layer (Steam with Proton, Gamescope, Feral GameMode and MangoHud). You pick it in the same installer and the same ISO as Desktop and Studio, nothing installs silently, and it makes no promise that any given game runs on any given hardware.',
  aplicacionesInsigniaDeGaming: 'Flagship Gaming applications',
  aurManual: 'AUR · manual',
  hoy: 'Today:',
  elCatalogoCanonicoY: ' the canonical catalogue and ',
  yaTeAyudaAChequear:
    ' already helps you check your machine, and Gaming installs from the shared current ISO (Desktop, Studio and Gaming). It is daily-driven on 3+ real physical computers (for example a Ryzen 9 desktop with an RTX 3060); your specific GPU, hybrid graphics, handheld, or VRR/HDR display may behave differently.',
  unaSesionReal: 'A real session',
  perfilesCombinables: 'Composable profiles',
  elegisPerfilesYAplicacionesEl:
    'You pick profiles and applications; the canonical resolver builds the plan, and Steam only enters when you select it explicitly by name. Profiles never smuggle proprietary software in.',
  predeterminado: 'Default',
  steamAEleccion: 'Steam opt-in',
  sinAplicacionesPorDefectoSumas: 'No default applications: you add only what you want.',
  aplicacionesFuentesYLicencias: 'Applications, sources and licenses',
  esteCatalogoSeGeneraDesde: (v0: string | number | null | undefined): string =>
    `This catalogue is generated from the pinned Hornero catalogue (HorneroOS/hornero at ${v0}); logos are the official upstream icons, shown for identification. Steam is proprietary and always an explicit opt-in; Heroic and SteamVR are reference-only; AUR entries are manual and optional, and no HorneroOS tool ever executes AUR recipes. vkBasalt and SteamVR have no official icon vendored, so they carry an in-house initials text badge, never presented as their logo.`,
  aurManualYOpcional: 'AUR · manual & optional',
  paquetes: 'Packages',
  fuente: 'Source',
  licencia: 'License',
  verElPaquete: 'See package',
  capaDeEjecucion: 'Runtime layer',
  estosComponentesAcompananALas:
    'These components accompany the catalogue applications but are not per-profile installable applications: they are shown name-only, with no logos of unverified provenance.',
  limitesHonestos: 'Honest limits',
  antiCheatYCompatibilidad: 'Anti-cheat & compatibility',
  elAntiCheatANivel:
    'Kernel-level anti-cheat does not work on Linux: Easy Anti-Cheat and BattlEye depend on each publisher enabling Proton.',
  todaviaNoPublicamosUnaLista:
    'We do not publish our own game compatibility list yet; each game depends on its Proton status and what its publisher enables.',
  gpuPantallasYHandhelds: 'GPU, displays & handhelds',
  losDriversDeGpuSon:
    'GPU drivers are a hardware decision made by the installer and first boot, never a promise derived from a PCI ID.',
  vrrYHdrSonExperimentales:
    'VRR and HDR are experimental; handhelds need per-device qualification (Steam Deck is the reference, not a guarantee for ROG Ally or Legion Go).',
  diagnostico: 'Diagnostics',
  informaCapacidadYRegistroVulkan:
    ' reports capability and registration (Vulkan, 32-bit loader, Steam, GameMode, Gamescope, MangoHud, audio, controllers and recovery).',
  nuncaAfirmaCompatibilidadRendimientoNi: 'It never claims compatibility, performance or latency.',
  horneroosDesktopStudioYGaming: 'HorneroOS Desktop, Studio and Gaming are downloadable from ',
  laPaginaDeInstalacion: 'the install page',
  explorarHorneroApps: 'Hornero Apps',
  probarEnPlayground: 'Try without installing',
};

export const messages: Record<Locale, Messages> = { es, en };
