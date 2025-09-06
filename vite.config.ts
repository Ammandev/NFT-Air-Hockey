import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/NFT-Air-Hockey/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
