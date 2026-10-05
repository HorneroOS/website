// Typed access to the generated product data. The JSON files are written by
// scripts/sync-product-data.mjs from the pins in pins.json; never edit them
// by hand (CI fails when they drift from their pins).
import layoutsJson from './layouts.json';
import editionsJson from './editions.json';
import pinsJson from './pins.json';
import releasesJson from './releases.json';
import themesJson from './themes.json';

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

export interface EditionCatalogue {
  version: number;
  editions: Edition[];
  compositors: Compositor[];
}

export const layouts = layoutsJson as Layout[];
export const themes = themesJson as Theme[];
export const releases = releasesJson as Release[];
export const editionCatalogue = editionsJson as EditionCatalogue;
export const editions = editionCatalogue.editions;
export const pins = pinsJson.sources as Record<'shell' | 'config' | 'hornero' | 'docs', { repo: string; sha: string }>;

export const short = (sha: string) => sha.slice(0, 7);
export const commitUrl = (repo: string, sha: string) => `${repo}/commit/${sha}`;
export const latestTagged = releases.find((r) => r.status === 'tagged');
export const candidate = releases.find((r) => r.status === 'candidate');
