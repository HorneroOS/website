// Typed access to the generated product data. The JSON files are written by
// scripts/sync-product-data.mjs from the pins in pins.json; never edit them
// by hand (CI fails when they drift from their pins).
import layoutsJson from './layouts.json';
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

export const layouts = layoutsJson as Layout[];
export const themes = themesJson as Theme[];
export const releases = releasesJson as Release[];
export const pins = pinsJson.sources as Record<'shell' | 'config' | 'hornero', { repo: string; sha: string }>;

export const short = (sha: string) => sha.slice(0, 7);
export const commitUrl = (repo: string, sha: string) => `${repo}/commit/${sha}`;
export const latestTagged = releases.find((r) => r.status === 'tagged');
export const candidate = releases.find((r) => r.status === 'candidate');
