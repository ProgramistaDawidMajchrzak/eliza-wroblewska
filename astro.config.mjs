// @ts-check
import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { parse } from 'yaml';

// Adres strony bierzemy z src/data/site.yaml, żeby był w jednym miejscu.
const siteConfig = parse(readFileSync(new URL('./src/data/site.yaml', import.meta.url), 'utf8'));
const site = String(siteConfig.url).replace(/\/+$/, '');

if (site.includes('example.com')) {
  console.warn(
    '\n⚠  TODO: w src/data/site.yaml ustaw docelowy adres strony (pole "url"). ' +
      'Teraz canonical, sitemap i Open Graph wskazują na example.com.\n',
  );
}

// Pary adresów PL ↔ EN – używane w sitemap (hreflang). Muszą zgadzać się z src/i18n/routes.ts.
const pairs = [
  ['/', '/en/'],
  ['/wspolpraca/', '/en/partnership/'],
  ['/media/', '/en/media/'],
  ['/polityka-prywatnosci/', '/en/privacy-policy/'],
];

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/(dziekujemy|thank-you)\/?$/.test(page) && !page.includes('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const pair = pairs.find(([pl, en]) => pl === path || en === path);
        if (pair) {
          item.links = [
            { lang: 'pl', url: site + pair[0] },
            { lang: 'en', url: site + pair[1] },
            { lang: 'x-default', url: site + pair[0] },
          ];
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
