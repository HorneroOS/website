// The five experience modes, transcribed from HorneroOS/docs
// desktop/experience-modes.md (table "The five modes" and "What each mode
// does"). The fields drive the schematic on /modes, so the drawing cannot
// disagree with the table. Status is not stated here: it comes from the
// feature ledger ('experience-modes').
export type ModeId = 'focus' | 'everyday' | 'signal' | 'gaming' | 'studio';
export type Motion = 'reduced' | 'standard' | 'full' | 'off';
export type BarDensity = 'icons' | 'values' | 'labelled';
export type DesktopContent = 'empty' | 'widgets' | 'deck';

interface Localized {
  es: string;
  en: string;
}

export interface Mode {
  id: ModeId;
  channel: string;
  name: string;
  motion: Motion;
  bar: BarDensity;
  desktop: DesktopContent;
  layout: string;
  line: Localized;
  behaviours: Localized[];
}

export const modes: Mode[] = [
  {
    id: 'focus',
    channel: 'CH 01',
    name: 'Focus',
    motion: 'reduced',
    bar: 'icons',
    desktop: 'empty',
    layout: 'Minimal Top',
    line: { es: 'Menos ruido: una ventana y vos.', en: 'Less noise: one window and you.' },
    behaviours: [
      { es: 'Movimiento reducido y barra de solo íconos.', en: 'Reduced motion and an icon-only bar.' },
      { es: 'Retiene las notificaciones mientras está activo y las silencia sobre ventanas a pantalla completa.', en: 'Holds notifications while active and keeps them quiet over fullscreen windows.' },
      { es: 'Sin brillo y sin widgets en el escritorio.', en: 'No glow and no desktop widgets.' },
    ],
  },
  {
    id: 'everyday',
    channel: 'CH 02',
    name: 'Everyday',
    motion: 'standard',
    bar: 'values',
    desktop: 'widgets',
    layout: 'Cockpit',
    line: { es: 'El modo con el que arranca una instalación nueva.', en: 'The mode a fresh install starts in.' },
    behaviours: [
      { es: 'Cockpit con movimiento estándar y los valores en la barra.', en: 'Cockpit with standard motion and values on the bar.' },
      { es: 'No retiene ni oculta nada.', en: 'Nothing is held and nothing is hidden.' },
    ],
  },
  {
    id: 'signal',
    channel: 'CH 03',
    name: 'Signal',
    motion: 'full',
    bar: 'labelled',
    desktop: 'deck',
    layout: 'Cockpit',
    line: { es: 'Telemetría en vivo: el escritorio como tablero de instrumentos.', en: 'Live telemetry: the desktop as an instrument panel.' },
    behaviours: [
      { es: 'Movimiento completo, entradas de barra con etiqueta y telemetría muestreada a 2 Hz en lugar de 1 Hz.', en: 'Full motion, labelled bar entries and telemetry sampled at 2 Hz instead of 1 Hz.' },
      { es: 'Un acento luminoso tenue en trazas y líneas de barrido.', en: 'A faint luminous accent on traces and scanlines.' },
      { es: 'El escritorio muestra el deck de instrumentos.', en: 'The desktop shows the instrument deck.' },
    ],
  },
  {
    id: 'gaming',
    channel: 'CH 04',
    name: 'Gaming',
    motion: 'off',
    bar: 'icons',
    desktop: 'empty',
    layout: 'Gaming',
    line: { es: 'Todo el procesador y la GPU para el juego.', en: 'All the CPU and GPU for the game.' },
    behaviours: [
      { es: 'Sin movimiento; las notificaciones se encolan mientras el modo está activo.', en: 'Motion off; notification popups are queued while the mode is active.' },
      { es: 'Pausa la telemetría bajo pantalla completa y mantiene la pantalla despierta.', en: 'Pauses telemetry under fullscreen and keeps the screen awake.' },
      { es: 'Sugiere el perfil de energía de rendimiento y activa el ajuste del compositor solo si el compositor lo admite; si no, aparece como no disponible.', en: 'Suggests the performance power profile and enables compositor tuning only when the compositor supports it; otherwise it shows as unavailable.' },
      { es: 'Los widgets del escritorio se descargan: el escritorio no gasta procesador ni GPU bajo un juego.', en: 'Desktop widgets are unloaded, so the desktop costs no processor or graphics time under a game.' },
    ],
  },
  {
    id: 'studio',
    channel: 'CH 05',
    name: 'Studio',
    motion: 'standard',
    bar: 'values',
    desktop: 'widgets',
    layout: 'Studio',
    line: { es: 'Un lienzo estable para el trabajo creativo.', en: 'A stable canvas for creative work.' },
    behaviours: [
      { es: 'Movimiento estándar, sin brillo y con tus propios widgets de escritorio.', en: 'Standard motion, no glow and your own desktop widgets.' },
      { es: 'Silencia las notificaciones sobre ventanas a pantalla completa.', en: 'Suppresses notifications over fullscreen windows.' },
      { es: 'Opcional: pide al stack de audio el perfil de baja latencia mientras el modo está activo y restaura el anterior al salir.', en: 'Optional: asks the audio stack for the low-latency profile while active and restores the previous one when you leave.' },
    ],
  },
];
