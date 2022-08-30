/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: 'components', replacement: '/src/components' },
      { find: 'data', replacement: '/src/data' },
    ],
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
