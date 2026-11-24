// Locale plumbing. All copy lives in typed per-component catalogs under
// src/i18n/messages/ (see docs/I18N.md): this module only knows the locale
// list, path localization, and the chrome-string accessor `t`.
//
// Spanish (es, Argentine) is the default and priority locale and is served at
// the root. English (en) lives under /en/.
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

import { messages as uiMessages, type Messages as UiMessages } from './messages/ui';

export type UiKey = keyof UiMessages;
export function t(locale: Locale, key: UiKey): string {
  return uiMessages[locale][key];
}
