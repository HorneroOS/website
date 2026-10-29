// Typed access to the generated product data. The JSON files are written by
// scripts/sync-product-data.mjs from the pins in pins.json; never edit them
// by hand (CI fails when they drift from their pins).
import layoutsJson from './layouts.json';
import editionsJson from './editions.json';
import pinsJson from './pins.json';
import releasesJson from './releases.json';
import themesJson from './themes.json';
import greeterScenesJson from './greeter-scenes.json';
import wallpapersJson from './wallpapers.json';
import terminalsJson from './terminals.json';
import paletteApplicationsJson from './palette-applications.json';
import extensionsJson from './extensions.json';

export interface LayoutBar {
  edge: 'top' | 'bottom' | 'left' | 'right';
  style: 'attached' | 'floating' | 'dock' | 'islands' | 'inset';
  clear: boolean;
  groups: { start: string[]; center: string[]; end: string[] };
}

export interface Layout {
  id: string;
  name: string;
  description: string;
  icon: string | null;
  bars: LayoutBar[];
}

export interface Theme {
  id: string;
  name: string;
  mode: 'dark' | 'light';
  description: string;
  official: boolean;
  collection: string | null;
  collectionOrder: number | null;
  paletteModel: 'semantic' | 'wallpaper';
  gtkTheme: string | null;
  iconTheme: string | null;
  schemeType: string | null;
  palette: Partial<Record<'background' | 'surface' | 'text' | 'primary' | 'secondary' | 'accent', string>>;
}

export interface Pin {
  sha: string;
  subject: string;
}

export interface Release {
  name: string;
  version: string;
  date: string;
  status: 'tagged' | 'candidate' | 'untagged';
  summary: string;
  manifest: string;
  shell: Pin | null;
  config: Pin | null;
  installer: string;
  iso: string;
}

export type Maturity = 'planned' | 'experimental' | 'preview' | 'supported';

export interface CompositorChoice {
  default: string;
  supported: string[];
}

export interface Edition {
  id: string;
  title: string;
  maturity: Maturity;
  role: string;
  extends: string | null;
  packageSets: string[];
  compositor: CompositorChoice | null;
}

export interface Compositor {
  id: string;
  maturity: Maturity;
  capabilities: string[];
}

export interface StudioApplication {
  id: string;
  title: string;
  packages: string[];
  experimental: boolean;
  availability: string | null;
  notes: string | null;
  source: string | null;
  licenses: string[];
  licenseClass: string | null;
  optional: boolean | null;
  support: string | null;
}

export interface StudioSpecialization {
  id: string;
  title: string;
  applications: string[];
}

export interface StudioAudioMode {
  id: string;
  title: string;
  isDefault: boolean;
  explicitOptIn: boolean;
}

export interface StudioCatalogue {
  specializations: StudioSpecialization[];
  applications: StudioApplication[];
  audioModes: StudioAudioMode[];
  performanceMode: {
    title: string;
    explicitOptIn: boolean;
    temporary: boolean;
    usesPowerProfilesDaemon: boolean;
  } | null;
}

export interface GamingApplication {
  id: string;
  title: string;
  packages: string[];
  experimental: boolean;
  availability: string | null;
  notes: string | null;
  source: string | null;
  licenses: string[];
  licenseClass: string | null;
  optional: boolean | null;
  support: string | null;
}

export interface GamingSpecialization {
  id: string;
  title: string;
  applications: string[];
  isDefault: boolean;
}

export interface GamingCatalogue {
  specializations: GamingSpecialization[];
  applications: GamingApplication[];
}

export interface EditionCatalogue {
  version: number;
  editions: Edition[];
  compositors: Compositor[];
  studio: StudioCatalogue;
  gaming: GamingCatalogue | null;
}


export interface GreeterScene {
  id: string;
  title: string;
  place: string;
  province: string;
  region: string;
  daypart: 'day' | 'golden-hour' | 'night';
  kind: 'video' | 'still';
  preview: string | null;
  poster: string;
  creator: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  description: string;
}

export interface GreeterSceneCatalogue {
  version: number;
  dayparts: { dayStart: number; dayEnd: number; goldenHourStart: number; goldenHourEnd: number };
  scenes: GreeterScene[];
}

export interface Wallpaper {
  id: string;
  title: string;
  place: string;
  themeId: string;
  aestheticTags: string[];
  photographer: string;
  sourcePage: string;
  license: string;
  licenseUrl: string;
  attribution: string;
  modification: string;
  preview: string;
  previewSmall: string;
  previewAlt: string;
  previewSha256: string | null;
}

export interface TerminalIntegration {
  id: string;
  name: string;
  role: 'default' | 'optional';
  package: string;
  detail: string;
  configExample: string;
  configPath: string;
  palette: string;
  palettePath: string;
  note: string;
}

export interface TerminalCatalogue {
  default: string;
  integrations: TerminalIntegration[];
}

export interface PaletteApplication {
  id: string;
  name: string;
  package: string;
  category: string;
  theme: string;
  detail: string;
  note: string;
  role: 'optional';
}

export const layouts = layoutsJson as Layout[];
export const themes = themesJson as Theme[];
export const releases = releasesJson as Release[];
export const editionCatalogue = editionsJson as EditionCatalogue;
export const greeterSceneCatalogue = greeterScenesJson as GreeterSceneCatalogue;
export const wallpapers = wallpapersJson as Wallpaper[];
export const terminalCatalogue = terminalsJson as TerminalCatalogue;
export const paletteApplications = paletteApplicationsJson as PaletteApplication[];
export const greeterScenes = greeterSceneCatalogue.scenes;
export const editions = editionCatalogue.editions;
export const studioCatalogue = editionCatalogue.studio;
export const gamingCatalogue = editionCatalogue.gaming;
export const pins = pinsJson.sources as Record<'shell' | 'config' | 'hornero' | 'docs' | 'greeter' | 'plugins', { repo: string; sha: string }>;

export const short = (sha: string) => sha.slice(0, 7);
export const commitUrl = (repo: string, sha: string) => `${repo}/commit/${sha}`;
export const latestTagged = releases.find((r) => r.status === 'tagged');
export const candidate = releases.find((r) => r.status === 'candidate');

export interface ExtensionEntry {
  id: string;
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
  homepage: string;
  placement: string;
  category: string;
  trust: string;
  path: string;
  sha256: string;
  processCommands: string[];
  networkHosts: string[];
  settings: Record<string, { type: string; default: boolean | number | string; description?: string }>;
}

export const extensionCatalogue = extensionsJson as {
  generatedFrom: string;
  plugins: ExtensionEntry[];
};
