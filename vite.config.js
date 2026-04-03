import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    cssCodeSplit: true,
    // Using default high-stability esbuild minifier for Vite 6 / React 19
    minify: true
  }
});
