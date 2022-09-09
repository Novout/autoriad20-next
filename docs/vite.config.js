import { VitePWA } from 'vite-plugin-pwa'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { presetWind } from 'unocss'

export default defineConfig({
  plugins: [
    VitePWA({ registerType: 'autoUpdate' }),
    Unocss({ 
      presets: [
        presetWind()
      ]
    }),
  ]
})