import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    // Allow specific hosts to access the dev server
    hmr: {
      host: '0.0.0.0',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: [
      'ef35dfd0-9e32-45bd-913b-e14dabdc8bfe-00-2x0e5c6bk84nx.picard.replit.dev',
      'localhost',
      '0.0.0.0',
      '.replit.dev',
      '.repl.co'
    ],
  },
});