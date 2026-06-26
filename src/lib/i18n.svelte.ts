import en from '$lib/locales/en.json';
import fr from '$lib/locales/fr.json';

type NestedDict = { [key: string]: string | NestedDict | NestedDict[] };

const dictionaries: Record<string, NestedDict> = { en, fr };

let current: string = $state('en');

export function setLocale(locale: string) {
  current = locale;
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale;
  }
}

export function getLocale(): string {
  return current;
}

export function t(path: string): string {
  const keys = path.split('.');
  let value: unknown = dictionaries[current];
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as NestedDict)[key];
    } else {
      return path;
    }
  }
  return typeof value === 'string' ? value : path;
}

export function localeHref(path: string): string {
  const prefix = current === 'en' ? '' : `/${current}`;
  return `${prefix}${path}`;
}
