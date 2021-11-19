import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [solidPlugin(), Icons({ compiler: 'solid', autoInstall: true })],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3005'
    }
  }
});
