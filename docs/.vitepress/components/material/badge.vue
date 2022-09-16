<template>
  <p :style="{ backgroundColor: bg, color: text, boxShadow: bg1 + ' 5px 5px, ' + bg2 + ' 10px 10px, ' + bg3 + ' 15px 15px '}">{{ title }}</p>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  bg: string,
  bg1: string,
  bg2: string,
  bg3: string,
  text: string
}>()
</script>

<style scoped>
p {
  font-weight: 400;
  font-size: 13px;
  padding: 0 6px;
  border-radius: 6px;
  pointer-events: none;
  margin-left: 0.5rem;
}
</style>