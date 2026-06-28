import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://abogadosxelagsm.com',
  compressHTML: true,
  integrations: [sitemap()],
});
