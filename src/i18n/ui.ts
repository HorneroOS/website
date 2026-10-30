// Locale plumbing and shared chrome strings.
//
// Spanish (es, Argentine) is the default and priority locale and is served at
// the root. English (en) lives under /en/. Page copy lives next to each page
// component in src/components/pages/, keyed by the same Locale type.
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
}

/** Strip the /en prefix, returning the Spanish (root) path. */
export function delocalizePath(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  return pathname.startsWith('/en/') ? pathname.slice(3) : pathname;
}

/** Return `path` (a root-relative Spanish path) in the given locale. */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const base = delocalizePath(path);
  if (locale === 'es') return base;
  return base === '/' ? '/en/' : `/en${base}`;
}

const ui = {
  es: {
    skipToContent: 'Saltar al contenido',
    mainNavLabel: 'Principal',
    mobileNavLabel: 'Principal móvil',
    menu: 'Menú',
    getHorneroOS: 'Conseguir HorneroOS',
    colorMode: 'Modo de color',
    colorSystem: 'Sistema',
    colorLight: 'Claro',
    colorDark: 'Oscuro',
    language: 'Idioma',
    githubCommunityLabel: 'HorneroOS en GitHub',
    starOnGitHub: 'Estrella en GitHub',
    orgOnGitHub: 'Organización HorneroOS',
    reportBug: 'Reportar un error',
    reportSiteIssue: 'Reportar un problema del sitio',
    starAria: 'Dar una estrella a HorneroOS en GitHub',
    orgAria: 'Organización HorneroOS en GitHub',
    getInvolved: 'Sumate',
    starTitle: 'Dale una estrella a HorneroOS',
    starText: 'Seguí el repositorio del escritorio. Las estrellas muestran el proyecto a otra gente que lo está buscando.',
    browseOrgTitle: 'Explorá la organización',
    browseOrgText: 'Shell, configuración, instalador, plugins, docs, QA y este sitio web.',
    reportBugTitle: 'Reportar un error',
    reportBugText: 'Nombrá la ISO (preview28), tu firmware (UEFI o BIOS) y el paso donde falló.',
    reportSiteTitle: 'Reportar un problema del sitio',
    reportSiteText: 'Algo mal en este sitio web: un link roto, una fecha equivocada, un problema de diseño.',
    projectNavLabel: 'Proyecto',
    navDesktop: 'Escritorio',
    navShowroom: 'Showroom',
    navLayouts: 'Layouts',
    navThemes: 'Temas',
    navWallpapers: 'Fondos',
    navGreeter: 'Greeter',
    navTerminals: 'Terminales',
    navCompanion: 'Companion',
    navEditions: 'Ediciones',
    navStudio: 'Studio',
    navGaming: 'Gaming',
    navExtensions: 'Extensiones',
    navStory: 'Historia',
    navRoots: 'Raíces',
    navReleases: 'Releases',
    navDesignLanguage: 'Lenguaje de diseño',
    navDocs: 'Docs',
    navSearch: 'Buscar',
    footerProjectMap: 'Mapa del proyecto',
    footerContribute: 'Contribuir',
    footerFineA: 'El escritorio detrás de HorneroOS está en uso diario desde 2018, según cuenta su maintainer (',
    footerFineB: '), y su configuración es pública desde 2019 (',
    footerFineC:
      '). Hornero 199X es una dirección de arte: un futuro imaginado en Argentina en los años 90, dibujado con las herramientas abiertas de hoy. No es un producto histórico. Este sitio no pone cookies, no corre analíticas y no carga recursos de terceros. Tu elección de color queda en este navegador. Tu elección de idioma también. Cada captura está etiquetada con su fuente.',
    footerHistory: 'historia',
    footerFirstCommit: 'primer commit',
  },
  en: {
    skipToContent: 'Skip to content',
    mainNavLabel: 'Main',
    mobileNavLabel: 'Mobile main',
    menu: 'Menu',
    getHorneroOS: 'Get HorneroOS',
    colorMode: 'Color mode',
    colorSystem: 'System',
    colorLight: 'Light',
    colorDark: 'Dark',
    language: 'Language',
    githubCommunityLabel: 'HorneroOS on GitHub',
    starOnGitHub: 'Star on GitHub',
    orgOnGitHub: 'HorneroOS organization',
    reportBug: 'Report a bug',
    reportSiteIssue: 'Report a site issue',
    starAria: 'Star HorneroOS on GitHub',
    orgAria: 'HorneroOS organization on GitHub',
    getInvolved: 'Get involved',
    starTitle: 'Star HorneroOS',
    starText: 'Follow the desktop repository. Stars show the project to other people looking for it.',
    browseOrgTitle: 'Browse the organization',
    browseOrgText: 'Shell, configuration, installer, plugins, docs, QA and this website.',
    reportBugTitle: 'Report a bug',
    reportBugText: 'Name the ISO (preview28), your firmware (UEFI or BIOS) and the step where it failed.',
    reportSiteTitle: 'Report a site issue',
    reportSiteText: 'Something wrong on this website: a broken link, a wrong date, a layout problem.',
    projectNavLabel: 'Project',
    navDesktop: 'Desktop',
    navShowroom: 'Showroom',
    navLayouts: 'Layouts',
    navThemes: 'Themes',
    navWallpapers: 'Wallpapers',
    navGreeter: 'Greeter',
    navTerminals: 'Terminals',
    navCompanion: 'Companion',
    navEditions: 'Editions',
    navStudio: 'Studio',
    navGaming: 'Gaming',
    navExtensions: 'Extensions',
    navStory: 'Story',
    navRoots: 'Roots',
    navReleases: 'Releases',
    navDesignLanguage: 'Design language',
    navDocs: 'Docs',
    navSearch: 'Search',
    footerProjectMap: 'Project map',
    footerContribute: 'Contribute',
    footerFineA: 'The desktop behind HorneroOS has been in daily use since 2018, by the maintainer’s account (',
    footerFineB: '), and its configuration has been public since 2019 (',
    footerFineC:
      '). Hornero 199X is an art direction: a future imagined in Argentina in the 1990s, drawn with today’s open-source tools. It is not a historical product. This site sets no cookies, runs no analytics and loads no third-party resources. Your color choice stays in this browser. So does your language choice. Every screenshot is labelled with its source.',
    footerHistory: 'history',
    footerFirstCommit: 'first commit',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];
export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key];
}
