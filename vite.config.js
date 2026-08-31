import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        categorias: resolve(import.meta.dirname, 'categorias/index.html'),
      },
    },
  },
})
