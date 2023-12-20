import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), sitemap({
    filter: (page) =>
      page !== 'https://gestalt.peharpre.fr/404/' &&
      page !== 'https://gestalt.peharpre.fr/mention-legales/'
  })],
  compressHTML: true,
  output: 'static',
  site: 'https://gestalt.peharpre.fr/',
});
