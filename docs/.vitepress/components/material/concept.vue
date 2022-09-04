<template>
  <section class="__material-concept">
    <span>{{ title }}</span>
    <slot />
  </section>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>

<style scoped>
.__material-concept {
  display: flex;
  width: 100%;
  padding: 4px;
  align-items: center;
}

.__material-concept > p {
  margin-left: 8px;
}
</style>