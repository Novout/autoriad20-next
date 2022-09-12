import { VitePWA } from 'vite-plugin-pwa'
import { VitePluginFonts } from 'vite-plugin-fonts'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { presetWind } from 'unocss'

export default defineConfig({
  plugins: [
    VitePluginFonts({
      google: {
        families: ['Poppins']
      },
    }),
    VitePWA({ 
      registerType: 'autoUpdate', 
      base: '/',
      includeAssets: [
        'ars.png',
        'bw.png',
        'logo.svg',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'apple-touch-icon.png',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'favicon.ico',
        'mstile-70x70.png',
        'mstile-144x144.png',
        'mstile-150x150.png',
        'mstile-310x150.png',
        'mstile-310x310.png',
        'safari-pinned-tab.svg'
      ],  
      manifest: {
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
        presetWind()
      ]
    }),
  ],
  build: {
    emptyOutDir: true,
    minify: 'esbuild',
  }
})