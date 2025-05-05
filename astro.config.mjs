import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://netlogo.github.io/',
  base: '/foundation-website-frontend'
});
