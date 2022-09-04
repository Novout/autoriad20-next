<template>
  <div class="__material-component">
    <slot />
  </div>
</template>

<style scoped>
.__material-component {
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 16px;
  width: 150px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>