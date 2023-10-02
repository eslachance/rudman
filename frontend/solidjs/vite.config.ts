import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3005'
    }
  }
});
