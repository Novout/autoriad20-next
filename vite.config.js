import Components from 'unplugin-vue-components/vite'
import { VitePWA } from 'vite-plugin-pwa'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { presetWind } from 'unocss'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      include: [/\.vue/, /\.md/],
    }),
    VitePWA({ registerType: 'autoUpdate' }),
    Unocss({ 
      presets: [
        presetWind()
      ]
    })
  ]
})