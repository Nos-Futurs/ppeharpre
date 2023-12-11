import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
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
  output: 'server',
  adapter: nodejs({
    mode: 'standalone',
  }),
  site: 'https://gestalt.peharpre.fr/',
});
