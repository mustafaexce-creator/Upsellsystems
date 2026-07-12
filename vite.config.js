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
        }
      }
    }
  }
})
