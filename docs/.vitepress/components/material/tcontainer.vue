<template>
  <section v-if="!soft" class="__material-container">
    <slot />
  </section>
  <section v-else class="__material-container-soft">
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    soft: {
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>
.__material-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: calc(100% - 40px);
  background: rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  pointer-events: none;
}

.__material-container::before {
  content: 'Exemplo:';
  font-size: 0.85rem;
}


.__material-container > h3 {
  font-size: 2.2rem;
}

.__material-container > h4 {
  font-size: 1.8rem;
}

.__material-container > ul > li {
  font-weight: 400;
  font-size: 1.4rem;
  list-style-type: circle;
  margin: 20px 0;
}


.__material-container-soft {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: calc(100% - 40px);
  background: rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  pointer-events: none;
}

.__material-container-soft::before {
  content: 'Exemplo:';
  font-size: 0.85rem;
}

.__material-container-soft > h3 {
  font-size: 2.2rem;
}

.__material-container-soft > p {
  font-size: 0.9rem;
  font-style: italic !important;
}

.__material-container-soft > span {
  font-size: 1.05rem;
  margin-top: 10px;
}
</style>