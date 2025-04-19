import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000, // As per requirements, bind to port 5000
  },
  vite: {
    ssr: {
      noExternal: ['@ant-design/*'],
    },
  },
});
