<template>
  <section class="__material-component">
    <h2 :id="title"><a :href="`#${title}`" class="header-anchor">#</a>{{ ` ${title}` }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  props: ['title']
}
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