import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg'],
      manifest: {
        name: 'My PWA App',
        short_name: 'MyPWA',
        description: 'My Progressive Web App',
        theme_color: '#ffffff',  
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
      }
    })
  ]
})