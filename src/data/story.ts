/**
 * The HorneroOS timeline, with a primary source for every dated claim.
 *
 * This is project history, not generated product data: nothing here describes
 * what the product supports today (that stays in src/data/product/). Each
 * `source` points at a commit, tag or file that can be opened and checked.
 * `evidence` says how the claim can be verified:
 *   - 'git'        a dated commit or tag in a public repository
 *   - 'maintainer' the maintainer's own account; it predates public git history
 */
export interface Localized { es: string; en: string }

export interface StoryEntry {
  id: string;
  /** Display date: a year, or an ISO date when a commit pins it. */
  date: string;
  /** Short, plain title. */
  title: Localized;
  /** One or two sentences. Present tense for facts, no launch language. */
  summary: Localized;
  evidence: 'git' | 'maintainer';
  /** Where the claim can be checked. */
  source?: { label: Localized; href: string };
  /** Entries that matter most on the compact homepage timeline. */
  featured?: boolean;
}

const dotfiles = 'https://github.com/ulises-jeremias/dotfiles';
const org = 'https://github.com/HorneroOS';

export const story: StoryEntry[] = [
  {
    id: 'workstation',
    date: '2018',
    title: { es: 'Una estación de trabajo personal con Arch Linux', en: 'A personal Arch Linux workstation' },
    summary: { es: 'Hornero nace como el escritorio diario de un desarrollador en Argentina. Esta etapa es anterior al historial público de repositorios de abajo, así que descansa en el relato del maintainer.', en: 'Hornero starts as one developer’s daily desktop in Argentina. This stage predates the public repository history below, so it rests on the maintainer’s account.' },
    evidence: 'maintainer',
    featured: true,
  },
  {
    id: 'dotfiles',
    date: '2019-11-02',
    title: { es: 'La configuración se hace pública', en: 'The configuration goes public' },
    summary: { es: 'El primer commit público de los dotfiles que se convirtieron en HorneroConfig: una configuración con i3, seguida el mismo día por Polybar.', en: 'The first public commit of the dotfiles that became HorneroConfig: an i3 setup, followed the same day by Polybar.' },
    evidence: 'git',
    source: { label: { es: 'Primer commit en ulises-jeremias/dotfiles', en: 'First commit in ulises-jeremias/dotfiles' }, href: `${dotfiles}/commit/40480e3419b62fedd2f41fcb649fd3df30ac1ab7` },
    featured: true,
  },
  {
    id: 'hyprland',
    date: '2025-10-29',
    title: { es: 'El escritorio se pasa a Wayland y Hyprland', en: 'The desktop moves to Wayland and Hyprland' },
    summary: { es: 'Después de años con gestores de ventanas X11, los dotfiles suman una configuración de Hyprland.', en: 'After years on X11 window managers, the dotfiles gain a Hyprland configuration.' },
    evidence: 'git',
    source: { label: { es: 'Hyprland (#131) en dotfiles', en: 'Hyprland (#131) in dotfiles' }, href: `${dotfiles}/commit/99b4ab6c0c2780cd9d83d6ae10cdab1af812007f` },
  },
  {
    id: 'quickshell',
    date: '2026-02-27',
    title: { es: 'La shell se convierte en Quickshell', en: 'The shell becomes Quickshell' },
    summary: { es: 'La estación de trabajo pasa sus barras y paneles a una shell Quickshell adaptada de Caelestia Shell. Es un capítulo nuevo, no la configuración de 2018 sin cambios.', en: 'The workstation switches its bars and panels to a Quickshell shell adapted from Caelestia Shell. That is a new chapter, not the 2018 setup unchanged.' },
    evidence: 'git',
    source: { label: { es: 'Transición a Quickshell en dotfiles', en: 'Transition to Quickshell in dotfiles' }, href: `${dotfiles}/commit/4f53f3e41cd47aeeb3235224ab922c092c856a22` },
    featured: true,
  },
  {
    id: 'standalone',
    date: '2026-09-10',
    title: { es: 'HorneroOS obtiene sus propios repositorios', en: 'HorneroOS gets its own repositories' },
    summary: { es: 'La shell se importa de dotfiles a HorneroOS/shell con el autor upstream, la licencia y cada encabezado intactos, y luego se le quitan las rutas propias de la estación de trabajo.', en: 'The shell is imported from dotfiles into HorneroOS/shell with the upstream author, license and every header intact, then stripped of workstation-only paths.' },
    evidence: 'git',
    source: { label: { es: 'Importación de la shell, con el NOTICE de Caelestia', en: 'Shell import, with the Caelestia NOTICE' }, href: `${org}/shell/commit/5830eab60f913668b07e6314f5051b8957a2cd71` },
    featured: true,
  },
  {
    id: 'horneroctl',
    date: '2026-09-10',
    title: { es: 'horneroctl, la CLI nativa del sistema', en: 'horneroctl, the native system CLI' },
    summary: { es: 'Un núcleo de línea de comandos escrito en V se convierte en el contrato del sistema operativo. La shell llama a sus verbos en lugar de scripts de la estación de trabajo desde el 29 de septiembre de 2026.', en: 'A command-line core written in V becomes the operating-system contract. The shell calls its verbs instead of workstation scripts from 2026-09-29.' },
    evidence: 'git',
    source: { label: { es: 'Núcleo de horneroctl en HorneroOS/hornero', en: 'horneroctl core in HorneroOS/hornero' }, href: `${org}/hornero/commit/45876631e2abb3180aa648ab1d425b4594b4deb9` },
    featured: true,
  },
  {
    id: 'qa',
    date: '2026-10-01',
    title: { es: 'Un repositorio de QA registra evidencia', en: 'A QA repository records evidence' },
    summary: { es: 'HorneroOS/qa arranca máquinas virtuales, ejecuta escenarios y guarda capturas con hashes y las revisiones fijadas del producto.', en: 'HorneroOS/qa boots virtual machines, drives scenarios and keeps screenshots with hashes and the pinned product revisions.' },
    evidence: 'git',
    source: { label: { es: 'Bootstrap de HorneroOS/qa', en: 'Bootstrap of HorneroOS/qa' }, href: `${org}/qa/commit/447f5b4e367dcb153215630e6669e4983da39473` },
    featured: true,
  },
  {
    id: 'preview',
    date: '2026-10-02',
    title: { es: 'Primeras previews de desarrollo etiquetadas', en: 'First tagged development previews' },
    summary: { es: 'La Preview 14 se etiqueta como una composición de paquetes. Todavía no hay una ISO instalable.', en: 'Preview 14 is tagged as a package composition. There is still no installable ISO.' },
    evidence: 'git',
    source: { label: { es: 'Tag v0.2.0-preview14', en: 'Tag v0.2.0-preview14' }, href: `${org}/hornero/releases/tag/v0.2.0-preview14` },
  },
  {
    id: 'extensions',
    date: '2026-10-20',
    title: { es: 'Un catálogo oficial de extensiones', en: 'An official extensions catalogue' },
    summary: { es: 'Los plugins oficiales obtienen un catálogo con checksums y permisos declarados. Los paquetes de la comunidad quedan inertes.', en: 'Official plugins get a catalogue with checksums and declared permissions. Community packages stay inert.' },
    evidence: 'git',
    source: { label: { es: 'Fundación del marketplace en HorneroOS/plugins', en: 'Marketplace foundation in HorneroOS/plugins' }, href: `${org}/plugins/commit/4a17b450dbd01d15ecf16fc06608c69af704aaa5` },
    featured: true,
  },
];

export const featuredStory = story.filter((entry) => entry.featured);
