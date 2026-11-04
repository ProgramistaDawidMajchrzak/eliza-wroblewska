import type { Lang } from '../i18n';

const locales: Record<Lang, string> = { pl: 'pl-PL', en: 'en-GB' };

function toDate(iso: string): Date {
  const [y, m = '01', d = '01'] = iso.split('-');
  return new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
}

/** "2026-10-22" → "22.10.2026" (PL) / "22 Oct 2026" (EN) */
export function formatDate(iso: string, lang: Lang): string {
  const date = toDate(iso);
  if (lang === 'pl') {
    return new Intl.DateTimeFormat('pl-PL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(date);
  }
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** "22 października 2026" / "22 October 2026" */
export function formatDateLong(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(locales[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(toDate(iso));
}

/**
 * Data o różnej dokładności: "2026-10-31" → "31.10.2026", "2026-10" → "październik 2026", "2025" → "2025".
 */
export function formatPartialDate(iso: string, lang: Lang): string {
  const parts = iso.split('-');
  if (parts.length === 3) return formatDate(iso, lang);
  if (parts.length === 2) {
    return new Intl.DateTimeFormat(locales[lang], {
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    })
      .format(toDate(iso))
      .replace(/^\p{Ll}/u, (c) => c.toLocaleUpperCase(locales[lang]));
  }
  return iso;
}

/** Zwięzła data o różnej dokładności: "31.01.2026" / "10.2026" / "2025" (EN: "31 Jan 2026" / "Oct 2026"). */
export function formatCompactDate(iso: string, lang: Lang): string {
  const parts = iso.split('-');
  if (parts.length === 3) return formatDate(iso, lang);
  if (parts.length === 2) {
    if (lang === 'pl') return `${parts[1]}.${parts[0]}`;
    return new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
      toDate(iso),
    );
  }
  return iso;
}

/** Krótki zapis daty startu, np. { day: "13", month: "lis", year: "2026" }. */
export function dateParts(iso: string, lang: Lang) {
  const date = toDate(iso);
  const month = new Intl.DateTimeFormat(locales[lang], { month: 'short', timeZone: 'UTC' })
    .format(date)
    .replace('.', '');
  return {
    day: String(date.getUTCDate()).padStart(2, '0'),
    month,
    year: String(date.getUTCFullYear()),
  };
}

/** Czy wydarzenie jeszcze się nie skończyło (porównanie z datą budowania strony). */
export function isUpcoming(startIso: string, endIso?: string): boolean {
  const end = toDate(endIso ?? startIso);
  end.setUTCHours(23, 59, 59);
  return end.getTime() >= Date.now();
}
