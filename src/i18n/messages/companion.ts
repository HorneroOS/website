// Message catalog for CompanionPage.astro — extracted by scripts/i18n-codemod.mjs.
// Spanish is the source shape; every other locale must satisfy it exactly
// (Record<Locale, Messages>), so adding a locale is a compile-time checklist.
import type { Locale } from '../ui';

const es = {
  javiElCompaneroDelEscritorio: 'Javi, el compañero del escritorio | HorneroOS',
  javiElHorneroQueVive:
    'Javi, el hornero que vive en el escritorio de HorneroOS: descansa, saluda, vuela, arma su nido de a poco y actúa los estados del asistente.',
  companeroHornero: 'Compañero Hornero',
  parteDelShell: 'Parte del shell',
  javiElCompanero: 'Javi, el compañero',
  javiEsUnHorneroQue:
    'Javi es un hornero que vive en tu escritorio. Descansa en su rincón, pestañea, se despereza, junta ramitas para su nido y vuela hacia vos cuando lo llamás. No te saca el foco ni los clics de las ventanas que estás usando.',
  javiEnUnEscritorioReal: 'Javi en un escritorio real',
  personajes: 'Personajes',
  elCompanionEnReposo: (v0: string | number | null | undefined): string => `El companion ${v0} en reposo`,
  elCompanionVolando: (v0: string | number | null | undefined): string => `El companion ${v0} volando`,
  cadaPersonajeEsLaMisma:
    'Cada personaje es la misma pose con su propia paleta y vestimenta — también al volar. Elegilo en Centro de control › Companion, o desde una terminal:',
  comportamiento: 'Comportamiento',
  descansa: 'Descansa',
  respiraTranquiloPestaneaMiraAlrededor:
    'Respira tranquilo, pestañea, mira alrededor y de vez en cuando se acicala o pega un saltito. Tras diez minutos de quietud se duerme con la cabeza bajo el ala; cualquier interacción lo despierta desperezándose.',
  armaSuNido: 'Arma su nido',
  cadaTantoTraeUnaRamita:
    'Cada tanto trae una ramita en el pico y el nido crece de a poco: ramitas, copa de barro, horno con entrada. Queda guardado entre sesiones y se puede reiniciar cuando quieras.',
  noMolesta: 'No molesta',
  viveEnSuPropiaCapa:
    'Vive en su propia capa sin foco de teclado. Se oculta solo en la pantalla de bloqueo, sobre ventanas a pantalla completa, en modo juego y mientras Ajustes está abierto, y vuelve después.',
  vosLoUbicas: 'Vos lo ubicás',
  arrastraloACualquierLadoRecuerda:
    'Arrastralo a cualquier lado; recuerda el lugar en cada monitor. Por defecto no se mueve solo: los vuelos de paseo son opcionales. Cuando lo apagás, se descargan todos sus temporizadores y superficies.',
  movimiento: 'Movimiento',
  conElMovimientoReducidoActivado:
    'Con el movimiento reducido activado, los frames quedan fijos y los vuelos se convierten en cortes simples. La intensidad de sus animaciones en reposo se ajusta entre tranquilo, normal y vivaz.',
  controles: 'Controles',
  todoSeAjustaEnCentro:
    'Todo se ajusta en Centro de control › Companion: personaje, tamaño, borde desde el que se asoma, consejos, tema del globo, animaciones en reposo e intensidad, vuelos de paseo, construcción del nido y dormir en el nido. Nada de esto necesita tocar archivos.',
  asistenteOpcionalExperimentalDesactivadoPor: 'Asistente opcional (experimental, desactivado por defecto)',
  elCompanionEsSoloPresentacion:
    'El companion es solo presentación. Detrás puede haber un asistente opcional y experimental:',
  deNousResearchAlQue: 'de Nous Research, al que se accede con',
  esta: 'Está',
  desactivadoPorDefecto: 'desactivado por defecto',
  yNuncaCorreComoRoot:
    'y nunca corre como root. Cuando está activo, el gateway corre aislado del resto de tu sesión y cada acción pasa por permisos que vos controlás. El escritorio funciona igual con el asistente apagado o sin instalar.',
  activaloDesdeUnaTerminal: 'Activalo desde una terminal:',
  mientrasUnaEjecucionEstaEn:
    'Mientras una ejecución está en curso, Javi actúa el estado sin que tengas que leer nada:',
  laInformacionDelSistemaViene:
    'La información del sistema viene de herramientas tipadas con permisos ABAC. El asistente no puede correr comandos arbitrarios.',
  cuandoUnaEjecucionNecesitaAprobacion:
    'Cuando una ejecución necesita aprobación o una respuesta, el companion muestra el pedido preocupado y espera. Respondés con',
  nadaSeApruebaAutomaticamenteSi: '. Nada se aprueba automáticamente; si negás, niega con la cabeza.',
  elGatewayEscuchaSoloEn:
    'El gateway escucha solo en loopback, detrás de una clave por usuario que la shell no puede leer.',
  unaPlataformaDeCompanerosVivos: 'Una plataforma de compañeros vivos',
  javiEsElPrimerPersonaje:
    'Javi es el primer personaje de una plataforma extensible: cualquier artista puede empaquetar un compañero solo-datos (arte + JSON, sin código ejecutable) e instalarlo como una extensión más. Capi, un carpincho tranquilo con su montículo de pasto, y Bitín, un CRT retro con expresiones de fósforo y su base de carga, ya vienen en el catálogo oficial. Cada compañero tiene instancias independientes — apariencia, monitor, hábitat, reacciones — y la IA es siempre opcional: un compañero decorativo no consume inferencia.',
  verElEstadoDeCada: 'Ver el estado de cada edición',
  agentesEdicionPlanificada: 'Agentes: edición planificada',
  laEdicionAgentsFiguraComo:
    'La edición Agents figura como planificada en el catálogo de ediciones: no tiene imagen instalable y este sitio no la anuncia como una capacidad actual. Lo que existe hoy es lo de arriba: Javi como presentación y un asistente opcional y experimental, desactivado por defecto. Los agentes de programación externos (Codex, Claude Code, Muse, OpenCode) son runtimes independientes que instalás y corrés vos, cada uno con su propio modelo de seguridad y permisos; no heredan las políticas del asistente.',
  limites: 'Límites',
  elCompanionNoLeeLo: 'El companion no lee lo que escribís y no toma decisiones. Sus estados',
  escuchando: 'escuchando',
  y: 'y',
  pensando: 'pensando',
  sonAnimacionesAccionadasPorIpc:
    'son animaciones accionadas por IPC. El asistente detrás de ellos es opcional, experimental y está apagado hasta que lo activás. El vuelo entre monitores todavía no existe: cambiar de pantalla se hace arrastrando.',
  framesDe: 'Frames de',
  enElCommit: 'en el commit',
  losAssetsQueDibujaLa: ', los assets que dibuja la shell, generados desde masters SVG parametrizados.',
};

export type Messages = typeof es;

const en: Messages = {
  javiElCompaneroDelEscritorio: 'Javi, the desktop companion | HorneroOS',
  javiElHorneroQueVive:
    'Javi, the hornero that lives on the HorneroOS desktop: it rests, greets, flies, slowly builds its nest and acts out the assistant states.',
  companeroHornero: 'Hornero Companion',
  parteDelShell: 'Part of the shell',
  javiElCompanero: 'Javi, the companion',
  javiEsUnHorneroQue:
    'Javi is a hornero that lives on your desktop. It rests in its corner, blinks, stretches, gathers twigs for its nest and flies in when you call it. It does not take focus or clicks away from the windows you are using.',
  javiEnUnEscritorioReal: 'Javi on a real desktop',
  personajes: 'Characters',
  elCompanionEnReposo: (v0: string | number | null | undefined): string => `The ${v0} companion at rest`,
  elCompanionVolando: (v0: string | number | null | undefined): string => `The ${v0} companion flying`,
  cadaPersonajeEsLaMisma:
    'Every character is the same pose with its own palette and clothing — in flight too. Pick one in Control Center › Companion, or from a terminal:',
  comportamiento: 'Behavior',
  descansa: 'Rests',
  respiraTranquiloPestaneaMiraAlrededor:
    'It breathes quietly, blinks, looks around and now and then preens or hops. After ten quiet minutes it sleeps with its head tucked in; any interaction wakes it with a stretch.',
  armaSuNido: 'Builds its nest',
  cadaTantoTraeUnaRamita:
    'Now and then it carries a twig in its beak and the nest grows a little: twigs, mud cup, oven dome with entrance. It is kept between sessions and can be reset whenever you want.',
  noMolesta: 'Stays out of the way',
  viveEnSuPropiaCapa:
    'It sits on its own layer without keyboard focus. It hides by itself on the lock screen, over fullscreen windows, in game mode and while Settings is open, and comes back afterwards.',
  vosLoUbicas: 'You place it',
  arrastraloACualquierLadoRecuerda:
    'Drag it anywhere; it remembers the spot on each monitor. It does not move on its own by default: wandering flights are opt-in. When switched off, every timer and surface is unloaded.',
  movimiento: 'Motion',
  conElMovimientoReducidoActivado:
    'With reduced motion turned on, frames hold still and flights become simple cuts. Its idle animation intensity adjusts between calm, normal and lively.',
  controles: 'Controls',
  todoSeAjustaEnCentro:
    'Everything adjusts in Control Center › Companion: character, size, the edge it peeks from, tips, bubble theme, idle animations and intensity, wandering flights, nest building and sleeping at the nest. None of it needs file editing.',
  asistenteOpcionalExperimentalDesactivadoPor: 'Optional assistant (experimental, off by default)',
  elCompanionEsSoloPresentacion:
    'The companion is presentation only. An optional, experimental assistant can sit behind it:',
  deNousResearchAlQue: 'by Nous Research, reached through',
  esta: 'It is',
  desactivadoPorDefecto: 'disabled by default',
  yNuncaCorreComoRoot:
    'and never runs as root. When enabled, the gateway runs isolated from the rest of your session and every action passes through permissions you control. The desktop works the same with it off or not installed.',
  activaloDesdeUnaTerminal: 'Enable it from a terminal:',
  mientrasUnaEjecucionEstaEn: 'While a run is in progress, Javi acts out the state before you read anything:',
  laInformacionDelSistemaViene:
    'System information comes from typed tools behind ABAC permissions. The assistant cannot run arbitrary commands.',
  cuandoUnaEjecucionNecesitaAprobacion:
    'When a run needs approval or an answer, the companion shows the request looking worried and waits. You answer with',
  nadaSeApruebaAutomaticamenteSi: '. Nothing is approved automatically; on deny it shakes its head.',
  elGatewayEscuchaSoloEn: 'The gateway listens on loopback only, behind a per-user key the shell cannot read.',
  unaPlataformaDeCompanerosVivos: 'A living companion platform',
  javiEsElPrimerPersonaje:
    'Javi is the first character on an extensible platform: any artist can package a data-only companion (artwork + JSON, no executable code) and install it like any other extension. Capi, a calm capybara with a grass-mound habitat, and Bitín, a retro CRT with phosphor expressions and a charging dock, already ship in the official catalogue. Every companion has independent instances — skin, monitor, habitat, reactions — and AI is always optional: a decorative companion uses no inference.',
  verElEstadoDeCada: 'See the status of each edition',
  agentesEdicionPlanificada: 'Agents: a planned edition',
  laEdicionAgentsFiguraComo:
    'The Agents edition is listed as planned in the edition catalogue: it has no installable image and this site does not announce it as a current capability. What exists today is what is above: Javi as presentation and an optional, experimental assistant, off by default. External coding agents (Codex, Claude Code, Muse, OpenCode) are independent runtimes that you install and run yourself, each with its own security and permission model; they do not inherit the assistant’s policies.',
  limites: 'Limits',
  elCompanionNoLeeLo: 'The companion does not read what you type and makes no decisions. Its',
  escuchando: 'listening',
  y: 'and',
  pensando: 'thinking',
  sonAnimacionesAccionadasPorIpc:
    'states are animations driven over IPC. The assistant behind them is optional, experimental and off until you enable it. Cross-monitor flight does not exist yet: moving screens is done by dragging.',
  framesDe: 'Frames from',
  enElCommit: 'at commit',
  losAssetsQueDibujaLa: ', the assets the shell draws, generated from parameterized SVG masters.',
};

export const messages: Record<Locale, Messages> = { es, en };
