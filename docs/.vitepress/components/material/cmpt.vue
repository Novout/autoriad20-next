<template>
  <section class="__material-component">
    <h2 :id="setCorrectId(title)"><a :href="`#${setCorrectId(title)}`" class="header-anchor">#</a>{{ ` ${title}` }}</h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { setCorrectId } from '../../../scripts/utils.ts'

defineProps<{
  title: string
}>()
</script>

<style scoped>
.__material-component {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #333;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin: 50px 0;
}

.__material-component > :is(p, section, a) {
  text-align: justify;
}
</style>