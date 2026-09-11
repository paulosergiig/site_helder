import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        categorias: resolve(import.meta.dirname, 'categorias/index.html'),
        sobre: resolve(import.meta.dirname, 'sobre/index.html'),
        contato: resolve(import.meta.dirname, 'contato/index.html'),
      },
    },
  },
})
