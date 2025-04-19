import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
  integrations: [react()],
  // Enable SSR if needed in the future
  // output: 'server',
});
