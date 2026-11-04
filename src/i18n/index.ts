import { pl } from './pl';
import { en } from './en';

export type Lang = 'pl' | 'en';
export const langs: Lang[] = ['pl', 'en'];

/** Adresy podstron w obu językach. Pary muszą zgadzać się z listą w astro.config.mjs (sitemap). */
export const routes = {
  home: { pl: '/', en: '/en/' },
  partnership: { pl: '/wspolpraca/', en: '/en/partnership/' },
  media: { pl: '/media/', en: '/en/media/' },
  privacy: { pl: '/polityka-prywatnosci/', en: '/en/privacy-policy/' },
  thanks: { pl: '/dziekujemy/', en: '/en/thank-you/' },
  notFound: { pl: '/404/', en: '/404/' },
} as const;
export type RouteKey = keyof typeof routes;

/**
 * Polska typografia: jednoliterowe wyrazy (a, i, o, u, w, z) nie mogą zostawać na końcu linii,
 * więc po nich wstawiamy twardą spację.
 */
export function noOrphans(text: string): string {
  return text
    .replace(/(^|[\s(„])([aiouwzAIOUWZ])\s+/g, '$1$2 ')
    .replace(/(\d)\s+(kg|cm|pkt|pts|zł)\b/g, '$1 $2')
    .replace(/(\s|^)(\d{1,2}\.)\s+(?=\p{L})/gu, '$1$2 ');
}

function deepNoOrphans<T>(value: T): T {
  if (typeof value === 'string') return noOrphans(value) as T;
  if (Array.isArray(value)) return value.map(deepNoOrphans) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, deepNoOrphans(v)])) as T;
  }
  return value;
}

const dictionaries = { pl: deepNoOrphans(pl), en };
export type Dictionary = typeof pl;

export function useT(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'pl' ? 'en' : 'pl';
}

/** Wybiera wersję językową z obiektu { pl, en }. */
export function loc<T>(value: { pl: T; en: T }, lang: Lang): T {
  return value[lang];
}

/** Link do kotwicy na stronie głównej, np. "/#kontakt" albo "#kontakt", gdy jesteśmy na stronie głównej. */
export function homeAnchor(lang: Lang, anchor: string, onHome: boolean): string {
  return onHome ? `#${anchor}` : `${routes.home[lang]}#${anchor}`;
}
