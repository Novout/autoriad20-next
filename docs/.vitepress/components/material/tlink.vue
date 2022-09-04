<template>
  <a :href="link" rel="noopener noreferrer" target="_blank"><slot /></a>
</template>

<script>
export default {
  props: ['link']
}
</script>

<style scoped>
a {
  color: #FF744C;
}
</style>