import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: [
      'ef35dfd0-9e32-45bd-913b-e14dabdc8bfe-00-2x0e5c6bk84nx.picard.replit.dev',
      'localhost',
      '0.0.0.0',
      '.replit.dev',
      '.repl.co'
    ],
  }
});