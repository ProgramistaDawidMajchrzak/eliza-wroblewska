import type { ImageMetadata } from 'astro';
import { photos } from './data';

const photoFiles = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

const partnerFiles = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/partners/*.{svg,png,webp,jpg,jpeg}',
  { eager: true },
);

export interface ResolvedPhoto {
  id: string;
  src: ImageMetadata;
  alt: { pl: string; en: string };
  credit: string;
  position: string;
  licenseConfirmed: boolean;
}

/** Zwraca zdjęcie z biblioteki w photos.yaml razem z plikiem z src/assets/photos/. */
export function getPhoto(id: string): ResolvedPhoto {
  const entry = photos.library[id];
  if (!entry) {
    throw new Error(`src/data/photos.yaml: nie ma zdjęcia „${id}” w sekcji „library”.`);
  }
  const file = photoFiles[`/src/assets/photos/${entry.file}`];
  if (!file) {
    throw new Error(
      `src/data/photos.yaml: zdjęcie „${id}” wskazuje na plik „${entry.file}”, ` +
        'którego nie ma w folderze src/assets/photos/. Sprawdź nazwę pliku (wielkość liter ma znaczenie).',
    );
  }
  return { id, src: file.default, ...entry };
}

export function getPartnerLogo(fileName: string): ImageMetadata {
  const file = partnerFiles[`/src/assets/partners/${fileName}`];
  if (!file) {
    throw new Error(
      `src/data/partners.yaml: brak pliku logo „${fileName}” w folderze src/assets/partners/.`,
    );
  }
  return file.default;
}
