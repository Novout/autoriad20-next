<template>
  <div class="flex rounded-lg items-center mr-0 md:mr-20 shadow-lg" :style="{ backgroundColor: 'rgba(0, 0, 0, 0.1)'}">
    <input spellcheck="on" autocorrect="on" placeholder="Pesquise um componente..." :style="{ fontFamily: 'Inter var' }" v-model="input" class="pl-2 py-1" type="text" />
    <div class="pr-2">
      <svg width="20" height="20" viewBox="0 0 512 512"><path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z" fill="currentColor"/></svg>
    </div>
    <div :style="{ backgroundColor: 'var(--vp-c-bg-alt)'}" class="flex shadow flex-col absolute top-12 w-60 rounded max-h-50 overflow-y-auto">
      <a @click="onReset" class="cursor-pointer p-2 opacity-100 hover:opacity-50" :href="target.url + '#' + setCorrectId(target.name)" v-for="(target, index) in targets" :key="index">
        {{ target.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { setCorrectId } from '../../../scripts/utils.ts'

const base = [
  { name: 'Guia: À Moda da Casa', url: '/guide/content/primary/guide' }, 
  { name: 'Roleplay: À Moda da Casa', url: '/guide/content/primary/roleplay' }, 
  { name: 'Rolagem: À Moda da Casa', url: '/guide/content/primary/roll' }, 
  { name: 'Vitalidade: À Moda da Casa', url: '/guide/content/primary/vitality' }, 
  { name: 'Padronização de Jogo: À Moda da Casa', url: '/guide/content/primary/gamepadronization' }, 
  { name: 'Nivelamento: Fixo', url: '/guide/content/primary/leveling' }, 
  { name: 'Nivelamento: À Moda da Casa', url: '/guide/content/primary/leveling' },
  { name: 'Nivelamento: Pontuação Acumulativa', url: '/guide/content/primary/leveling' },
  { name: 'Raça: À Moda da Casa', url: '/guide/content/secondary/race' },
  { name: 'Classe: À Moda da Casa', url: '/guide/content/secondary/class' },
  { name: 'Classe: Pontuação Acumulativa', url: '/guide/content/secondary/class' },
  { name: 'Origem: À Moda da Casa', url: '/guide/content/secondary/origin' },
  { name: 'Origem: Pontuação Acumulativa', url: '/guide/content/secondary/origin' },
  { name: 'Exploração: À Moda da Casa', url: '/guide/content/secondary/exploration' },
  { name: 'Combate: À Moda da Casa', url: '/guide/content/secondary/fight' },
  { name: 'Condição: À Moda da Casa', url: '/guide/content/tertiary/conditions' },
  { name: 'Divindade: À Moda da Casa', url: '/guide/content/tertiary/divinity' },
  { name: 'Equipamento: À Moda da Casa', url: '/guide/content/tertiary/equipments' },
  { name: 'Guerra: À Moda da Casa', url: '/guide/content/tertiary/war' },
  { name: 'Magia: À Moda da Casa', url: '/guide/content/tertiary/magic' },
]

const input = ref()
const targets = ref([])

watch(input, str => {
  const val = str.toLowerCase()

  targets.value.length = 0

  base.forEach((i: Record<string, any>) => {
    const target = i['name'].toLowerCase()

    if(target.includes(val) && input.value) targets.value.push(i)
  });
})

const onReset = () => {
  targets.value.length = 0
  input.value = ''
}
</script>