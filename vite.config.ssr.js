import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  ssr: {
    // Required for React Router v7 and Vercel SSR/SSG stability
    noExternal: ['react-router-dom', 'react-helmet-async']
  },
  build: {
    ssr: true,
    outDir: 'dist-server',
    rollupOptions: {
      input: 'src/entry-server.jsx'
    }
  }
});
