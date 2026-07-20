import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && (assetInfo.name.endsWith('.woff2') || assetInfo.name.endsWith('.woff'))) {
            return 'assets/[name].[ext]'
          }
          return 'assets/[name]-[hash].[ext]'
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'icons'
            }
            if (id.includes('react-router-dom') || id.includes('react-router') || id.includes('react-helmet-async')) {
              return 'routing'
            }
            return 'vendor'
          }
        }
      }
    }
  }
})
