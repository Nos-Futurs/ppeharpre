import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  integrations: [solid()],
  compressHTML: true,
  output: 'server',
  adapter: nodejs({
    mode: 'standalone',
  }),
});
