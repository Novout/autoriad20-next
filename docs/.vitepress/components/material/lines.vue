<template>
  <section>
    <slot />
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  margin: 30px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
}

.yuu-theme-dark section {
  border-top: 1px solid #555;
  border-bottom: 1px solid #555;
}
</style>