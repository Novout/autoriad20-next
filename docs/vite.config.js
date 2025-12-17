import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { presetWind3 } from 'unocss'

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
    Unocss({ 
      presets: [
        presetWind3()
      ]
    })
  ],
  build: {
    emptyOutDir: true,
    minify: 'esbuild',
  }
})