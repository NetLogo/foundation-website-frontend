import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  base: '/NetLogo-redesign/',
  integrations: [react()],
});

