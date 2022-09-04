import { defineConfig } from "vitepress";

export default defineConfig({
  lang: 'pt-BR',
  title: 'Autoria D20',
  description: 'test',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#C1C9F5' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#C1C9F5' }],
    ['meta', { property: 'og:title', content: 'AutoriaD20' }],
    ['meta', { property: 'og:description', content: 'Autoria é um sistema genérico para desenvolvimento de jogos D20.' }],
    ['meta', { property: 'og:url', content: 'https://autoria-website.vercel.app/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/main.png' }],
    ['meta', { property: 'og:image:alt', content: 'Ícone do AutoriaD20' }],
    ['meta', { property: 'og:image:width', content: '300' }],
    ['meta', { property: 'og:image:height', content: '300' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: 'https://autoria-website.vercel.app/' }],
    ['meta', { name: 'twitter:title', content: 'AutoriaD20' }],
    ['meta', { name: 'twitter:description', content: 'Autoria é um sistema genérico para desenvolvimento de jogos D20.' }],
    ['meta', { name: 'twitter:image', content: '/main.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Ícone do AutoriaD20' }],
    ['meta', { name: 'theme-color', content: '#C1C9F5' }],
    ['meta', { charset: 'utf-8' }],
    ['meta', { hid: 'description', name: 'description', content: 'Autoria é um sistema genérico para desenvolvimento de jogos D20.' }]
  ],
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
    },
    footer: {
      message: 'MIT Licensed | Copyright © 2021-present Giovane S.C',
    }
  }
})

function nav() {
  return [
    { text: 'Início', link: '/guide/', activeMatch: '/guide/' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introdução',
      collapsible: true,
      items: [
        { text: 'Componentes', link: '/guide/components' },
        { text: 'Montagem', link: '/guide/mounting' },
        { text: 'Á Moda da Casa', link: '/guide/amdc' },
      ]
    },
    {
      text: 'Criando o Sistema',
      collapsible: true,
      items: [
        { text: 'Primeiros Passos', link: '/guide/getting-start/' },
        { text: 'Primeira Parte', link: '/guide/getting-start/primary' },
        { text: 'Segunda Parte', link: '/guide/getting-start/secondary' },
        { text: 'Terceira Parte', link: '/guide/getting-start/tertiary' },
        { text: 'Quarta Parte', link: '/guide/getting-start/quaternary' },
      ]
    },
    {
      text: 'Componentes Primários',
      collapsible: true,
      items: [
        { text: 'Guia', link: '/guide/content/primary/guide' },
        { text: 'Roleplay', link: '/guide/content/primary/roleplay' },
        { text: 'Nivelamento', link: '/guide/content/primary/leveling' },
        { text: 'Vitalidade', link: '/guide/content/primary/vitality' },
        { text: 'Padronização de Jogo', link: '/guide/content/primary/gamepadronization' },
        { text: 'Rolagem', link: '/guide/content/primary/roll' },
      ]
    },
    {
      text: 'Componentes Secundários',
      collapsible: true,
      items: [
        { text: 'Raça', link: '/guide/content/secondary/race' },
        { text: 'Classe', link: '/guide/content/secondary/class' },
        { text: 'Origem', link: '/guide/content/secondary/origin' },
        { text: 'Exploração', link: '/guide/content/secondary/exploration' },
        { text: 'Combate', link: '/guide/content/secondary/fight' },
      ]
    },
    {
      text: 'Componentes Terciários',
      collapsible: true,
      items: [
        { text: 'Condição', link: '/guide/content/tertiary/conditions' },
        { text: 'Divindade', link: '/guide/content/tertiary/divinity' },
        { text: 'Equipamento', link: '/guide/content/tertiary/equipments' },
        { text: 'Guerra', link: '/guide/content/tertiary/war' },
        { text: 'Magia', link: '/guide/content/tertiary/magic' },
      ]
    }
  ]
}