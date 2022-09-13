import { h } from 'vue'
import { inBrowser } from 'vitepress'
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
  enhanceApp({ app }: any) {
    app.component('Spacing', Spacing)
    app.component('spacing', Spacing)
    app.component('badge', Badge)
    app.component('cmpt', Cmpt)
    app.component('concept', Concept)
    app.component('lines', Lines)
    app.component('mainpage', Mainpage)
    app.component('tarticle', Tarticle)
    app.component('tbold', Tbold)
    app.component('tcontainer', Tcontainer)
    app.component('titalic', Titalic)
    app.component('tlink', Tlink)
    app.component('tsub', Tsub)
    app.component('danger', Danger)
    app.component('warning', Warning)
    app.component('info', Info)

    app.component('p-guide', PGuide)
    app.component('p-leveling', PLeveling)
    app.component('p-padronization', PPadronization)
    app.component('p-roleplay', PRoleplay)
    app.component('p-roll', PRoll)
    app.component('p-vitality', PVitality)

    app.component('s-class', SClass)
    app.component('s-exploration', SExploration)
    app.component('s-fight', SFight)
    app.component('s-origin', SOrigin)
    app.component('s-race', SRace)

    app.component('t-conditions', TConditions)
    app.component('t-divinity', TDivinity)
    app.component('t-equipments', TEquipments)
    app.component('t-magic', TMagic)
    app.component('t-war', TWar)

    app.component('extra-partners', ExtraPartners)

    app.component('components-example', ComponentsExample)
    app.component('components-example-item', ComponentsExampleItem)
  },
  Layout() {
    return h(Theme.Layout, null, {
      'nav-bar-content-before': () => h(HomeSearchBar)
    })
  },
}