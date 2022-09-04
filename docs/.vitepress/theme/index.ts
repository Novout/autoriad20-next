import { h } from 'vue'
import Theme from 'vitepress/theme'
import '../style/main.css'
import '../style/vars.css'
import 'unocss'
import Spacing from '../components/material/Spacing.vue'

export default {
  ...Theme,
  enhanceApp({ app }: any) {
    app.component('Spacing', Spacing)
  },
  Layout() {
    return h(Theme.Layout, null, {})
  },
}