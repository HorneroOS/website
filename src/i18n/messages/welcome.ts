// Message catalog for WelcomePage.astro — Rioplatense Spanish source shape + English parity.
import type { Locale } from '../ui';

const es = {
  pageTitle: 'Hornero Welcome | Signal Flight: First Flight, Explore y What’s New',
  pageDescription:
    'Conocé Hornero Welcome: recorrido guiado First Flight en 9 escenas, centro permanente Explore Hornero y novedades por versión con previews reversibles en Signal Day y Night.',
  socialAlt: 'Hornero Welcome: modos First Flight, Explore Hornero y What’s New en Signal Day y Signal Night.',
  eyebrowWelcome: 'Hornero Welcome',
  eyebrowFlight: 'Signal Flight',
  eyebrowCli: 'horneroctl welcome',
  heroTitle: 'Tu estación de partida, del primer vuelo al uso diario.',
  heroLede:
    'Hornero Welcome reúne tres modos en una sola ventana serena de 1080×680: First Flight para el primer inicio, Explore Hornero como guía permanente de funciones y atajos, y What’s New tras cada actualización. Publicado en AUR (hornero-shell 1.6.0-1, hornero-config 0.6.0-1, horneroctl-bin 0.2.0_preview62-1); la ISO v0.2.0-preview32 actual aún trae la ventana previa de 11 páginas y el próximo corte de ISO incluirá Signal Flight.',
  ctaWalkthrough: 'Ver recorrido en video',
  ctaModes: 'Explorar los 3 modos',
  ctaDocs: 'Leer guía técnica',
  heroCaptures: [
    {
      src: '/captures/showcase/welcome-arrival-day.webp',
      badge: 'Signal Day · Cerámica blanca',
      caption: 'Escena 1 (Arrival) en Signal Day sobre fotografía argentina atribuida.',
      alt: 'Hornero Welcome en modo claro Signal Day mostrando la escena Arrival con edición y compositor.',
    },
    {
      src: '/captures/showcase/welcome-arrival-night.webp',
      badge: 'Signal Night · Grafito azulado',
      caption: 'La misma escena Arrival en Signal Night con contraste verificado.',
      alt: 'Hornero Welcome en modo oscuro Signal Night mostrando la escena Arrival.',
    },
  ],
  videoEyebrow: 'Grabación real en vivo',
  videoTitle: 'Recorrido real por Hornero Welcome',
  videoNote:
    'Clip WebM capturado sobre HorneroOS real (1920×1080), recorriendo llegada, personalización reversible, perfiles de trabajo, Javi y el modo Explore.',
  videoAria: 'Video de recorrido real de Hornero Welcome mostrando First Flight y Explore Hornero.',
  videoTranscript:
    'Resumen visual: apertura de Arrival en Signal Day y Night, previsualización de temas/layouts en Make It Yours, selección de modos en Workstation Builder, skins de Javi en Meet Javi y búsqueda unificada en Explore Hornero.',
  modesEyebrow: 'Tres modos, una sola ventana',
  modesTitle: 'Acompaña sin repetir pantallas innecesarias',
  modesIntro:
    'Welcome separa la finalización del primer inicio (firstRunCompleted) del seguimiento de versión (lastSeenReleaseVersion). Si desactivás showOnLogin, no vuelve a abrirse solo ni tras actualizaciones mayores.',
  modesList: [
    {
      id: 'first-flight',
      index: '01',
      name: 'First Flight',
      when: 'Primer inicio de sesión',
      summary:
        'Recorrido guiado en 9 escenas serenas con barra superior mínima y riel inferior. Podés saltearlo en cualquier momento o avanzar a tu ritmo.',
    },
    {
      id: 'explore',
      index: '02',
      name: 'Explore Hornero',
      when: 'Aperturas manuales posteriores',
      summary:
        'Centro permanente de descubrimiento: búsqueda instantánea de funciones, páginas del Centro de control, atajos reales y estado de seguridad y recuperación.',
    },
    {
      id: 'whats-new',
      index: '03',
      name: 'What’s New',
      when: 'Una vez por actualización',
      summary:
        'Cuando actualizás y mantenés showOnLogin activo, resume novedades reales de la release con enlaces directos a los ajustes relevantes, sin re-ejecutar First Flight.',
    },
  ],
  scenesEyebrow: 'Capturas de escenas y modos',
  scenesTitle: 'Personalización, estación de trabajo, Javi y descubrimiento',
  scenesCaptures: [
    {
      src: '/captures/showcase/welcome-personalize-day.webp',
      badge: 'Escena 2 · Signal Day',
      title: 'Make It Yours: previews reversibles',
      caption:
        'Cambiá entre Signal Day, Signal Night, Alto Contraste, Chromatic v3 y layouts de barra sobre un escenario en vivo con barra Previewing live.',
      alt: 'Escena Make It Yours de Hornero Welcome en Signal Day mostrando selector de temas, Chromatic y layouts.',
    },
    {
      src: '/captures/showcase/welcome-workstation-night.webp',
      badge: 'Escena 3 · Signal Night',
      title: 'Workstation Builder y perfiles',
      caption:
        'Selector asimétrico de los 5 modos de experiencia junto a telemetría real de latencia y perfiles de Hornero Apps.',
      alt: 'Escena Workstation Builder en Signal Night mostrando modos de experiencia y perfiles.',
    },
    {
      src: '/captures/showcase/welcome-companion-night.webp',
      badge: 'Escena 4 · Signal Night',
      title: 'Meet Javi: compañero visual vs IA local',
      caption:
        '8 skins visuales para el sprite de escritorio; el asistente local opcional queda apagado hasta que lo actives explícitamente.',
      alt: 'Escena Meet Javi en Signal Night mostrando selector de skins de Javi y separación respecto del asistente IA.',
    },
    {
      src: '/captures/showcase/welcome-explore-day.webp',
      badge: 'Modo 2 · Signal Day',
      title: 'Explore Hornero: búsqueda y ledger de confianza',
      caption:
        'Buscá funciones, ajustes del Centro de control y tus atajos activos, con acceso directo al ledger de extensiones y snapshots.',
      alt: 'Vista Explore Hornero en Signal Day con buscador unificado y guía categorizada.',
    },
    {
      src: '/captures/showcase/welcome-whatsnew-night.webp',
      badge: 'Modo 3 · Signal Night',
      title: 'What’s New: novedades por versión',
      caption:
        'Resumen conciso de cambios tras una actualización, con enlaces directos a cada panel afectado.',
      alt: 'Vista What’s New en Signal Night mostrando novedades de versión y accesos directos.',
    },
  ],
  firstFlightScenesTitle: 'Las 9 escenas de First Flight',
  firstFlightScenes: [
    { n: '01', name: 'Arrival', detail: 'Lee tu edición y compositor activos (Hyprland o Niri) sobre fotografía argentina atribuida.' },
    { n: '02', name: 'Make It Yours', detail: 'Probá temas, fondos verificados, Chromatic v3 y layouts con transacción reversible.' },
    { n: '03', name: 'Workstation Builder', detail: 'Elegí modo de experiencia y previsualizá perfiles de software de Hornero Apps.' },
    { n: '04', name: 'Meet Javi', detail: 'Elegí skin y pose de Javi; el asistente local permanece apagado por defecto.' },
    { n: '05', name: 'Move & Fly', detail: 'Practicá 4 acciones reales leyendo tus atajos vivos y escuchando eventos del compositor.' },
    { n: '06', name: 'Extensions & Ecosystem', detail: 'Explorá extensiones PluginKit v3, permisos declarados y recuperación HORNERO_SAFE_MODE=1.' },
    { n: '07', name: 'Create · Build · Play', detail: 'Inspeccioná disponibilidad real de Studio Audio, Dev/Agents y Gaming en tu host.' },
    { n: '08', name: 'Trust, Diagnostics & Recovery', detail: 'Chequeá salud con horneroctl doctor y la frontera entre snapshots de config y Btrfs.' },
    { n: '09', name: 'Ready to Fly', detail: 'Revisá lo aplicado y saltá directo al Launcher o a Explore Hornero.' },
  ],
  guaranteesEyebrow: 'Ingeniería y garantías reales',
  guaranteesTitle: 'Reversible, accesible, medido y sin telemetría',
  guaranteesCards: [
    {
      title: 'Transacción reversible y crash recovery',
      body: 'Los previews de tema, Chromatic y fondo corren primero en memoria. Cuando un layout escribe a disco, Welcome guarda el baseline en $XDG_STATE_HOME/hornero/welcome-preview-tx.json: Escape revierte, y si la shell cae a mitad de preview, el próximo login restaura tu estado anterior automáticamente.',
    },
    {
      title: 'Práctica con eventos reales (sin timers falsos)',
      body: 'Move & Fly lee tus atajos vivos (reflejando remaps personalizados) y marca cada misión completa recién cuando se dispara el evento real de Quickshell, Hyprland o Niri.',
    },
    {
      title: 'Rendimiento medido y cero wakeups en reposo',
      body: 'Consumo medido de 142–199 MB RSS. Bajo Reduce motion, las transiciones bajan a crossfades <= 90 ms, Javi queda quieto en frame 0 (holdStill) y las animaciones pausan cuando la ventana se oculta.',
    },
    {
      title: 'Accesibilidad Signal y privacidad absoluta',
      body: 'Navegación completa por teclado con foco celeste de 2 px, escalado de texto, Signal Day >= 5.27:1, Signal High Contrast, cero cuentas, cero login en la nube y cero telemetría.',
    },
  ],
  cliEyebrow: 'Control por terminal',
  cliCommands: `horneroctl welcome open
horneroctl welcome status
horneroctl welcome set-show-on-login false --yes
horneroctl welcome reset --yes`,
  relatedLinksTitle: 'Documentación y siguientes pasos',
  relatedLinks: [
    { label: 'Guía de Hornero Welcome', href: '/docs/desktop/hornero-welcome/' },
    { label: 'ADR: Arquitectura de Hornero Welcome', href: '/docs/architecture/adr-hornero-welcome/' },
    { label: 'Explorar Hornero Apps', href: '/apps' },
    { label: 'Probar HorneroOS sin instalar', href: '/try' },
  ],
};

export type Messages = typeof es;

const en: Messages = {
  pageTitle: 'Hornero Welcome | Signal Flight: First Flight, Explore & What’s New',
  pageDescription:
    'Meet Hornero Welcome: 9-scene First Flight guided setup, permanent Explore Hornero discovery hub, and version-aware What’s New with reversible previews in Signal Day & Night.',
  socialAlt: 'Hornero Welcome: First Flight, Explore Hornero, and What’s New modes in Signal Day and Night.',
  eyebrowWelcome: 'Hornero Welcome',
  eyebrowFlight: 'Signal Flight',
  eyebrowCli: 'horneroctl welcome',
  heroTitle: 'Your starting deck, from first flight to everyday use.',
  heroLede:
    'Hornero Welcome brings three modes together in a calm 1080×680 window: First Flight for initial arrival, Explore Hornero as a permanent feature and shortcut hub, and What’s New after upgrades. Shipped in AUR (hornero-shell 1.6.0-1, hornero-config 0.6.0-1, horneroctl-bin 0.2.0_preview62-1); the current v0.2.0-preview32 ISO still carries the earlier 11-page window and the next ISO cut will bundle Signal Flight.',
  ctaWalkthrough: 'Watch walkthrough clip',
  ctaModes: 'Explore the 3 modes',
  ctaDocs: 'Read technical guide',
  heroCaptures: [
    {
      src: '/captures/showcase/welcome-arrival-day.webp',
      badge: 'Signal Day · White ceramic',
      caption: 'Scene 1 (Arrival) in Signal Day over attributed Argentine photography.',
      alt: 'Hornero Welcome in light Signal Day mode showing the Arrival scene with edition and compositor.',
    },
    {
      src: '/captures/showcase/welcome-arrival-night.webp',
      badge: 'Signal Night · Blue-hour graphite',
      caption: 'The same Arrival scene in Signal Night with verified contrast.',
      alt: 'Hornero Welcome in dark Signal Night mode showing the Arrival scene.',
    },
  ],
  videoEyebrow: 'Live real capture',
  videoTitle: 'Real walkthrough of Hornero Welcome',
  videoNote:
    'WebM clip captured on running HorneroOS (1920×1080), walking through Arrival, reversible customization, Workstation Builder, Javi, and Explore Hornero.',
  videoAria: 'Real walkthrough video of Hornero Welcome showing First Flight and Explore Hornero.',
  videoTranscript:
    'Visual summary: opening Arrival in Signal Day and Night, previewing themes and bar layouts in Make It Yours, picking Experience Modes in Workstation Builder, switching Javi skins in Meet Javi, and searching in Explore Hornero.',
  modesEyebrow: 'Three modes, one window',
  modesTitle: 'Guides you once without replaying first-run screens',
  modesIntro:
    'Welcome decouples first-run completion (firstRunCompleted) from release tracking (lastSeenReleaseVersion). If you turn off showOnLogin, it never auto-opens again—even after major upgrades.',
  modesList: [
    {
      id: 'first-flight',
      index: '01',
      name: 'First Flight',
      when: 'First login',
      summary:
        'A calm 9-scene guided setup with a minimal top bar and compact flight rail. Skip anytime or move at your own pace.',
    },
    {
      id: 'explore',
      index: '02',
      name: 'Explore Hornero',
      when: 'Returning manual opens',
      summary:
        'A permanent discovery hub: instant search across features, Control Center pages, live keybindings, and the trust & recovery ledger.',
    },
    {
      id: 'whats-new',
      index: '03',
      name: 'What’s New',
      when: 'Once per upgrade',
      summary:
        'When you upgrade with showOnLogin enabled, opens directly into concise release highlights with direct jumps to new settings.',
    },
  ],
  scenesEyebrow: 'Scene & mode captures',
  scenesTitle: 'Customization, workstation builder, Javi, and discovery',
  scenesCaptures: [
    {
      src: '/captures/showcase/welcome-personalize-day.webp',
      badge: 'Scene 2 · Signal Day',
      title: 'Make It Yours: reversible live previews',
      caption:
        'Switch between Signal Day, Signal Night, High Contrast, Chromatic v3, and bar layouts on a live preview stage with a Previewing live bar.',
      alt: 'Make It Yours scene in Signal Day showing theme, Chromatic, and layout selectors.',
    },
    {
      src: '/captures/showcase/welcome-workstation-night.webp',
      badge: 'Scene 3 · Signal Night',
      title: 'Workstation Builder and profiles',
      caption:
        'Asymmetric selector for all 5 Experience Modes alongside live telemetry specs and Hornero Apps workstation profiles.',
      alt: 'Workstation Builder scene in Signal Night showing Experience Modes and profiles.',
    },
    {
      src: '/captures/showcase/welcome-companion-night.webp',
      badge: 'Scene 4 · Signal Night',
      title: 'Meet Javi: visual sidekick vs local AI',
      caption:
        '8 desktop companion skins; the optional local AI assistant stays off until you explicitly enable it.',
      alt: 'Meet Javi scene in Signal Night showing Javi skin selector and local AI opt-in boundary.',
    },
    {
      src: '/captures/showcase/welcome-explore-day.webp',
      badge: 'Mode 2 · Signal Day',
      title: 'Explore Hornero: search and trust ledger',
      caption:
        'Filter features, Control Center settings, and active shortcuts, with direct links to extensions and config snapshots.',
      alt: 'Explore Hornero view in Signal Day with unified search and categorized feature guide.',
    },
    {
      src: '/captures/showcase/welcome-whatsnew-night.webp',
      badge: 'Mode 3 · Signal Night',
      title: 'What’s New: upgrade highlights',
      caption:
        'Focused post-upgrade summary linking straight to the affected Control Center panels.',
      alt: 'What’s New view in Signal Night showing release highlights and direct links.',
    },
  ],
  firstFlightScenesTitle: 'All 9 scenes of First Flight',
  firstFlightScenes: [
    { n: '01', name: 'Arrival', detail: 'Reads your active edition and compositor (Hyprland or Niri) over attributed Argentine photography.' },
    { n: '02', name: 'Make It Yours', detail: 'Try themes, verified wallpapers, Chromatic v3, and bar layouts with reversible transactions.' },
    { n: '03', name: 'Workstation Builder', detail: 'Pick an Experience Mode and inspect Hornero Apps workstation software profiles.' },
    { n: '04', name: 'Meet Javi', detail: 'Pick Javi’s visual skin and pose; the optional local AI assistant stays off by default.' },
    { n: '05', name: 'Move & Fly', detail: 'Practice 4 real desktop actions reading live keybindings and listening to real compositor events.' },
    { n: '06', name: 'Extensions & Ecosystem', detail: 'Browse PluginKit v3 extensions, declared permissions, and HORNERO_SAFE_MODE=1 recovery.' },
    { n: '07', name: 'Create · Build · Play', detail: 'Inspect real host readiness for Studio Audio, Dev/Agents, and Gaming.' },
    { n: '08', name: 'Trust, Diagnostics & Recovery', detail: 'Check horneroctl doctor health and the boundary between config snapshots and Btrfs probes.' },
    { n: '09', name: 'Ready to Fly', detail: 'Review locked choices and launch straight into the Launcher or Explore Hornero.' },
  ],
  guaranteesEyebrow: 'Engineering & real guarantees',
  guaranteesTitle: 'Reversible, accessible, measured, and zero telemetry',
  guaranteesCards: [
    {
      title: 'Reversible preview transaction & crash recovery',
      body: 'Theme, Chromatic, and wallpaper previews run in memory first. When a layout preview writes to disk, Welcome snapshots your baseline in $XDG_STATE_HOME/hornero/welcome-preview-tx.json: Escape reverts, and if the shell crashes mid-preview, the next login restores your baseline automatically.',
    },
    {
      title: 'Real-event practice (no fake timers)',
      body: 'Move & Fly reads your active keybindings live (reflecting custom remaps) and marks each mission complete only when the actual Quickshell, Hyprland, or Niri event fires.',
    },
    {
      title: 'Measured performance & zero idle wakeups',
      body: 'Measured 142–199 MB RSS footprint. Under Reduce motion, transitions cap at <= 90 ms crossfades, Javi holds still on frame 0 (holdStill), and ambient animations pause whenever Welcome is hidden.',
    },
    {
      title: 'Signal accessibility & zero accounts',
      body: 'Full keyboard operation with 2 px celeste focus rings, text scaling, Signal Day >= 5.27:1 contrast, Signal High Contrast, zero accounts, zero cloud sign-in, and zero telemetry.',
    },
  ],
  cliEyebrow: 'Terminal control',
  cliCommands: `horneroctl welcome open
horneroctl welcome status
horneroctl welcome set-show-on-login false --yes
horneroctl welcome reset --yes`,
  relatedLinksTitle: 'Documentation & next steps',
  relatedLinks: [
    { label: 'Hornero Welcome guide', href: '/docs/desktop/hornero-welcome/' },
    { label: 'ADR: Hornero Welcome architecture', href: '/docs/architecture/adr-hornero-welcome/' },
    { label: 'Explore Hornero Apps', href: '/apps' },
    { label: 'Try HorneroOS without installing', href: '/try' },
  ],
};

export const messages: Record<Locale, Messages> = { es, en };
