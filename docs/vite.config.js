import { VitePWA } from 'vite-plugin-pwa'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { presetUno, presetWind } from 'unocss'

export default defineConfig({
  plugins: [
    VitePWA({
      outDir: '.vitepress/dist',
      registerType: 'autoUpdate', 
      base: '/',
      manifest: {
        background_color: '#625975',
        name: 'AutoriaD20',
        short_name: 'AutoriaD20',
        description: 'Autoria é um sistema genérico para desenvolvimento de jogos D20.',
        theme_color: '#C1C9F5',
        categories: ['rpg', 'd20', 'system'],
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: "any maskable"
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: "any maskable"
          }
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 3145728000,
        sourcemap: false,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              },
            }
          }
        ]
      } 
    }),
    Unocss({ 
      presets: [
        presetWind(),
        presetUno()
      ]
    }),
  ],
  build: {
    emptyOutDir: true,
    minify: 'esbuild',
  }
})