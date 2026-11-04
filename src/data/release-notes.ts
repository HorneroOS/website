// User-facing one-line summaries per release (ES/EN).
// The generated `summary` in src/data/product/releases.json remains the
// engineering record; ReleasesPage renders these first and keeps the full
// technical summary available in a details element.
export const releaseNotes: Record<string, { es: string; en: string }> = {
  '0.2.0-preview32': {
    es: 'La release de confiabilidad: la autenticación gráfica funciona desde la instalación, horneroctl gana actualizaciones seguras con chequeos previos, historial y aviso de reinicio, y recovery doctor diagnostica el estado de recuperación sin inventar rollback.',
    en: 'The reliability release: graphical authentication works from a fresh install, horneroctl gains safer updates with preflight checks, history and reboot-required reporting, and recovery doctor diagnoses recovery readiness without faking rollback.',
  },
  '0.2.0-preview31': {
    es: 'Arregla los paneles negros del Centro de control: Extensiones, Studio y Gaming vuelven a mostrar su interfaz completa, y un panel que falla ya no se esconde detrás de un rectángulo negro.',
    en: 'Fixes the black Control Center panels: Extensions, Studio and Gaming show their full interface again, and a failing panel no longer hides behind a black rectangle.',
  },
  '0.2.0-preview30': {
    es: 'Bluetooth desde el arranque, con emparejamiento desde la Shell, más las correcciones encontradas usándolo todos los días en pelicano.',
    en: 'Bluetooth out of the box, with pairing from the Shell, plus the fixes found by daily-driving it on pelicano.',
  },
  '0.2.0-preview29': {
    es: 'Diagnóstico de GPU NVIDIA más preciso en Gaming y correcciones del entorno live del instalador.',
    en: 'More accurate NVIDIA GPU diagnostics in Gaming and live-installer environment fixes.',
  },
  '0.2.0-preview28': {
    es: 'Zsh y nano como base de fábrica, identidad HorneroOS correcta en el sistema instalado y repositorios que sincronizan desde el primer día.',
    en: 'Zsh and nano as factory defaults, correct HorneroOS identity on the installed system and repositories that sync from day one.',
  },
  '0.2.0-preview25': {
    es: 'Audio PipeWire completo también en Desktop y Gaming, y grabación en OBS verificada de punta a punta.',
    en: 'Complete PipeWire audio on Desktop and Gaming too, with OBS recording verified end to end.',
  },
  '0.2.0-preview24': {
    es: 'La primera ISO que ofrece también Gaming en el instalador: Desktop, Studio y Gaming con Hyprland o Niri experimental.',
    en: 'The first ISO that also offers Gaming in the installer: Desktop, Studio and Gaming with Hyprland or experimental Niri.',
  },
  '0.2.0-preview23': {
    es: 'Nueva identidad visual del instalador Calamares, con la marca y los fondos insignia de HorneroOS.',
    en: 'A refreshed Calamares installer identity, with HorneroOS branding and flagship wallpapers.',
  },
  '0.2.0-preview22': {
    es: 'La primera ISO Preview publicada y firmada: Desktop y Studio instalables en una sola imagen.',
    en: 'The first published, signed Preview ISO: Desktop and Studio installable from a single image.',
  },
};
