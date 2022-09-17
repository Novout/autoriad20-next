import { VitePWA } from 'vite-plugin-pwa'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { presetUno, presetWind } from 'unocss'
import { resolve } from 'pathe'
import fg from 'fast-glob'

export default defineConfig({
  ssr: {
    format: 'cjs',
  },
  legacy: {
    buildSsrCjsExternalHeuristics: true,
  },
  optimizeDeps: {
    exclude: ['vitepress'],
  },
  plugins: [
    VitePWA({
      outDir: '.vitepress/dist',
      registerType: 'autoUpdate', 
      includeAssets: fg.sync('**/*.{png,svg,ico,txt}', { cwd: resolve(__dirname, 'public') }),
      manifest: {
        id: '/',
        background_color: '#222222',
        name: 'AutoriaD20',
        short_name: 'AutoriaD20',
        description: 'Autoria é um sistema genérico para desenvolvimento de jogos D20.',
        theme_color: '#C1C9F5',
        categories: ['rpg', 'd20', 'system'],
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
        ],
      },
      workbox: {
        navigateFallbackDenylist: [/^\/new$/],
        navigateFallback: null,
        globPatterns: ['**/*.{css,js,html,ico,txt,woff2,png,svg,json}'],
      } 
    }),
    Unocss({ 
      presets: [
        presetWind(),
        presetUno()
      ]
    })
  ],
  build: {
    emptyOutDir: true,
    minify: 'esbuild',
  }
})