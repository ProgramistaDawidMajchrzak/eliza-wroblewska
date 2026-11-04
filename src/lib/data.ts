/**
 * Wczytuje pliki z src/data/*.yaml i sprawdza ich poprawność.
 * Literówka w danych zatrzymuje build z czytelnym komunikatem (po polsku),
 * zamiast po cichu psuć stronę.
 */
import { parse } from 'yaml';
import { z } from 'astro/zod';

import siteRaw from '../data/site.yaml?raw';
import profileRaw from '../data/profile.yaml?raw';
import statsRaw from '../data/stats.yaml?raw';
import resultsRaw from '../data/results.yaml?raw';
import eventsRaw from '../data/events.yaml?raw';
import packagesRaw from '../data/packages.yaml?raw';
import taxRaw from '../data/tax-benefit.yaml?raw';
import partnersRaw from '../data/partners.yaml?raw';
import faqRaw from '../data/faq.yaml?raw';
import mediaRaw from '../data/media.yaml?raw';
import photosRaw from '../data/photos.yaml?raw';

// ── wspólne typy ────────────────────────────────────────────

/** Tekst w dwóch językach. */
const L = z.object({ pl: z.string().min(1), en: z.string().min(1) });
export type Localized = z.infer<typeof L>;

/** Pole tekstowe, które może być puste (wtedy na stronie pojawia się TODO). */
const opt = z
  .string()
  .nullish()
  .transform((v) => (v ?? '').trim());

const fullDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'data musi mieć format "RRRR-MM-DD", np. "2026-11-13"');

const partialDate = z
  .string()
  .regex(/^\d{4}(-\d{2}(-\d{2})?)?$/, 'data musi mieć format "RRRR-MM-DD", "RRRR-MM" albo "RRRR"');

const link = z.object({ name: z.string().min(1), url: opt });

// ── schematy plików ─────────────────────────────────────────

const SiteSchema = z.object({
  url: z.url('pole "url" musi być pełnym adresem, np. "https://elizawroblewska.pl"'),
  name: z.string(),
  contact: z.object({
    email: opt,
    pressName: opt,
    pressEmail: opt,
    pressPhone: opt,
  }),
  form: z.object({
    endpoint: opt,
    redirectField: opt,
    honeypotField: opt,
    hidden: z.record(z.string(), z.string()).nullish().transform((v) => v ?? {}),
  }),
  mediaKitPdf: opt,
  club: z.object({ name: z.string(), url: opt }),
  social: z.array(link).nullish().transform((v) => v ?? []),
});

const ProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  nickname: z.string(),
  birthDate: fullDate,
  heightCm: z.number(),
  city: z.string(),
  club: z.string(),
  category: z.string(),
  categorySince: z.number().int(),
  previousCategory: z.string(),
  previousCategories: L,
  coach: opt,
  profiles: z.array(link),
});

const StatsSchema = z.object({
  hero: z
    .array(
      z.object({
        value: z.union([z.string(), z.number()]).transform(String),
        label: L,
      }),
    )
    .length(2, 'w "hero" muszą być dokładnie 2 liczby (trzecia to ranking)'),
  ranking: z.object({
    position: z.number().int().positive(),
    points: z.number(),
    category: z.string(),
    asOf: fullDate,
    url: z.url(),
  }),
});

const ResultValue = z.union([
  z.enum(['gold', 'silver', 'bronze', 'start']),
  z.number().int().positive(),
]);
export type ResultValue = z.infer<typeof ResultValue>;

const ResultSchema = z.object({
  date: partialDate,
  name: L,
  city: L.optional(),
  result: ResultValue,
  category: z.string().optional(),
  international: z.boolean().default(true),
  featured: z.boolean().default(false),
  rise: z.boolean().default(false),
});
export type Result = z.infer<typeof ResultSchema>;

const EventsSchema = z.object({
  upcoming: z
    .array(
      z.object({
        date: fullDate,
        endDate: fullDate.optional(),
        name: L,
        city: L,
        country: L,
        level: L,
      }),
    )
    .nullish()
    .transform((v) => v ?? []),
  todo: L.optional(),
});
export type CompetitionEvent = z.infer<typeof EventsSchema>['upcoming'][number];

const PackagesSchema = z.object({
  packages: z
    .array(
      z.object({
        id: z.string().regex(/^[a-z0-9-]+$/, 'id: tylko małe litery, cyfry i myślniki'),
        name: L,
        slots: L,
        tagline: L,
        price: opt,
        highlight: z.boolean().default(false),
        benefits: z.array(L).min(1),
      }),
    )
    .min(1),
});
export type Package = z.infer<typeof PackagesSchema>['packages'][number];

const TaxSchema = z.object({
  title: L,
  lead: L,
  breakdown: z.array(z.object({ value: z.string(), label: L })),
  qualifies: z.object({ pl: z.array(z.string()), en: z.array(z.string()) }),
  legalBasis: L,
  disclaimer: L,
  todo: L.optional(),
});

const PartnersSchema = z.object({
  partners: z
    .array(
      z.object({
        name: z.string(),
        tier: z.enum(['partner-glowny', 'partner', 'partner-lokalny']),
        logo: z.string(),
        url: opt,
      }),
    )
    .nullish()
    .transform((v) => v ?? []),
});

const FaqSchema = z.object({
  faq: z.array(z.object({ q: L, a: L })),
});

const MediaSchema = z.object({
  updated: fullDate,
  bios: z.object({ short: L, medium: L, long: L }),
});

const Span = z.enum(['wide', 'tall', 'normal']).default('normal');
const PhotoRef = z.union([
  z.object({ photo: z.string(), span: Span }),
  z.object({ placeholder: L, span: Span }),
]);
export type PhotoRef = z.infer<typeof PhotoRef>;

const PhotosSchema = z.object({
  library: z.record(
    z.string(),
    z.object({
      file: z.string(),
      alt: L,
      credit: opt,
      position: z.string().default('50% 50%'),
      licenseConfirmed: z.boolean().default(false),
    }),
  ),
  slots: z.object({
    hero: z.string(),
    rise: z.string(),
    values: z.string(),
    partnership: z.string(),
  }),
  video: z.object({
    file: z.string(),
    poster: z.string(),
    caption: L,
    credit: opt,
  }),
  gallery: z.array(PhotoRef),
  press: z.array(PhotoRef),
});

// ── wczytywanie ─────────────────────────────────────────────

function load<T extends z.ZodType>(file: string, raw: string, schema: T): z.output<T> {
  let data: unknown;
  try {
    data = parse(raw);
  } catch (error) {
    throw new Error(
      `Błąd składni w pliku src/data/${file}:\n${(error as Error).message}\n` +
        'Sprawdź wcięcia (spacje, nie tabulatory) i cudzysłowy.',
    );
  }
  const result = schema.safeParse(data);
  if (!result.success) {
    const lines = result.error.issues.map(
      (issue) => `  • ${issue.path.map(String).join(' → ') || '(cały plik)'}: ${issue.message}`,
    );
    throw new Error(`Nieprawidłowe dane w pliku src/data/${file}:\n${lines.join('\n')}`);
  }
  return result.data;
}

export const site = load('site.yaml', siteRaw, SiteSchema);
export const profile = load('profile.yaml', profileRaw, ProfileSchema);
export const stats = load('stats.yaml', statsRaw, StatsSchema);
export const events = load('events.yaml', eventsRaw, EventsSchema);
export const packages = load('packages.yaml', packagesRaw, PackagesSchema).packages;
export const tax = load('tax-benefit.yaml', taxRaw, TaxSchema);
export const partners = load('partners.yaml', partnersRaw, PartnersSchema).partners;
export const faq = load('faq.yaml', faqRaw, FaqSchema).faq;
export const media = load('media.yaml', mediaRaw, MediaSchema);
export const photos = load('photos.yaml', photosRaw, PhotosSchema);

/** Wszystkie wyniki, od najnowszego. */
export const results = load('results.yaml', resultsRaw, z.array(ResultSchema)).sort((a, b) =>
  b.date.localeCompare(a.date),
);

// ── dodatkowe kontrole spójności ────────────────────────────

const featuredCount = results.filter((r) => r.featured).length;
if (featuredCount !== 6) {
  console.warn(
    `⚠  src/data/results.yaml: wyróżnionych wyników (featured: true) jest ${featuredCount}, a sekcja „Osiągnięcia” jest zaprojektowana na 6.`,
  );
}

const photoIds = new Set(Object.keys(photos.library));
const usedIds = [
  ...Object.entries(photos.slots).map(([slot, id]) => [`slots → ${slot}`, id] as const),
  ['video → poster', photos.video.poster] as const,
  ...photos.gallery.flatMap((ref, i) => ('photo' in ref ? [[`gallery → ${i + 1}`, ref.photo] as const] : [])),
  ...photos.press.flatMap((ref, i) => ('photo' in ref ? [[`press → ${i + 1}`, ref.photo] as const] : [])),
];
for (const [where, id] of usedIds) {
  if (!photoIds.has(id)) {
    throw new Error(
      `src/data/photos.yaml (${where}): nie ma zdjęcia o nazwie „${id}” w sekcji „library”. ` +
        `Dostępne: ${[...photoIds].join(', ')}`,
    );
  }
}

const packageIds = new Set(packages.map((p) => p.id));
for (const p of partners) {
  if (!packageIds.has(p.tier)) {
    throw new Error(`src/data/partners.yaml: partner „${p.name}” ma nieznany pakiet „${p.tier}”.`);
  }
}
