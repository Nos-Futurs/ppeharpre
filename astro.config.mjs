import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), sitemap({
    filter: (page) =>
      page !== 'https://gestalt.peharpre.fr/404/' &&
      page !== 'https://gestalt.peharpre.fr/mention-legales/'
  })],
  compressHTML: true,
  output: 'server',
  adapter: netlify(),
  site: 'https://gestalt.peharpre.fr/',
});
