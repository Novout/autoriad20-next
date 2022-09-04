<template>
  <p :style="{ backgroundColor: bg, color: text, boxShadow: bg1 + ' 5px 5px, ' + bg2 + ' 10px 10px, ' + bg3 + ' 15px 15px '}">{{ title }}</p>
</template>

<script>
export default {
  props: ['title', 'bg', 'bg1', 'bg2', 'bg3', 'text']
}
</script>

<style scoped>
p {
  font-weight: 400;
  font-size: 13px;
  padding: 0 6px;
  border-radius: 6px;
  pointer-events: none;
}
</style>