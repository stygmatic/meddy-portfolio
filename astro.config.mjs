import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://meddyportfolio-delta.vercel.app',
  integrations: [sitemap()],
});
