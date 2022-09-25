import { h } from 'vue'
import { inBrowser } from 'vitepress'
import { installSchemaOrg } from '@vueuse/schema-org-vite/vitepress'
import Theme from 'vitepress/theme'
import '../style/main.css'
import '../style/vars.css'
import 'uno.css'

import Spacing from '../components/material/Spacing.vue'
import Badge from '../components/material/badge.vue'
import Cmpt from '../components/material/cmpt.vue'
import Concept from '../components/material/concept.vue'
import Lines from '../components/material/lines.vue'
import Mainpage from '../components/material/mainpage.vue'
import Tarticle from '../components/material/tarticle.vue'
import Tbold from '../components/material/tbold.vue'
import Tcontainer from '../components/material/tcontainer.vue'
import Titalic from '../components/material/titalic.vue'
import Tlink from '../components/material/tlink.vue'
import Tsub from '../components/material/tsub.vue'

import Danger from '../components/material/danger.vue'
import Warning from '../components/material/warning.vue'
import Info from '../components/material/info.vue'

import PGuide from '../components/material/p/guide.vue'
import PLeveling from '../components/material/p/leveling.vue'
import PPadronization from '../components/material/p/padronization.vue'
import PRoleplay from '../components/material/p/roleplay.vue'
import PRoll from '../components/material/p/roll.vue'
import PVitality from '../components/material/p/vitality.vue'

import SClass from '../components/material/s/class.vue'
import SExploration from '../components/material/s/exploration.vue'
import SFight from '../components/material/s/fight.vue'
import SOrigin from '../components/material/s/origin.vue'
import SRace from '../components/material/s/race.vue'

import TConditions from '../components/material/t/conditions.vue'
import TDivinity from '../components/material/t/divinity.vue'
import TEquipments from '../components/material/t/equipments.vue'
import TMagic from '../components/material/t/magic.vue'
import TWar from '../components/material/t/war.vue'

import ComponentsExample from '../components/pages/componentsexample.vue'
import ComponentsExampleItem from '../components/pages/componentsexampleitem.vue'

import ExtraPartners from '../components/pages/ExtraPartners.vue'
import HomeSearchBar from '../components/pages/HomeSearchBar.vue'

if (inBrowser)
  import('./pwa')
  

export default {
  ...Theme,
  enhanceApp(ctx: any) {
    installSchemaOrg(ctx, {
      canonicalHost: 'https://autoria20.com/',
      defaultLanguage: 'pt-BR'
    })
    ctx.app.component('Spacing', Spacing)
    ctx.app.component('spacing', Spacing)
    ctx.app.component('badge', Badge)
    ctx.app.component('cmpt', Cmpt)
    ctx.app.component('concept', Concept)
    ctx.app.component('lines', Lines)
    ctx.app.component('mainpage', Mainpage)
    ctx.app.component('tarticle', Tarticle)
    ctx.app.component('tbold', Tbold)
    ctx.app.component('tcontainer', Tcontainer)
    ctx.app.component('titalic', Titalic)
    ctx.app.component('tlink', Tlink)
    ctx.app.component('tsub', Tsub)
    ctx.app.component('danger', Danger)
    ctx.app.component('warning', Warning)
    ctx.app.component('info', Info)

    ctx.app.component('p-guide', PGuide)
    ctx.app.component('p-leveling', PLeveling)
    ctx.app.component('p-padronization', PPadronization)
    ctx.app.component('p-roleplay', PRoleplay)
    ctx.app.component('p-roll', PRoll)
    ctx.app.component('p-vitality', PVitality)

    ctx.app.component('s-class', SClass)
    ctx.app.component('s-exploration', SExploration)
    ctx.app.component('s-fight', SFight)
    ctx.app.component('s-origin', SOrigin)
    ctx.app.component('s-race', SRace)

    ctx.app.component('t-conditions', TConditions)
    ctx.app.component('t-divinity', TDivinity)
    ctx.app.component('t-equipments', TEquipments)
    ctx.app.component('t-magic', TMagic)
    ctx.app.component('t-war', TWar)

    ctx.app.component('extra-partners', ExtraPartners)

    ctx.app.component('components-example', ComponentsExample)
    ctx.app.component('components-example-item', ComponentsExampleItem)
  },
  Layout() {
    return h(Theme.Layout, null, {
      'nav-bar-content-before': () => h(HomeSearchBar)
    })
  },
}