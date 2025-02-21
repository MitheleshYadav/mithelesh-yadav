import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    mimeTypes: {
      'font/woff': ['woff'],
      'font/woff2': ['woff2']
    }
  }
})
