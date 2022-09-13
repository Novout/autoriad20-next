<template>
  <div @click="onLink" :style="{ backgroundColor: 'var(--vp-c-bg-soft)'}" class="flex my-3 cursor-pointer transition-shadow shadow-none hover:shadow-xl w-full items-center gap-5 shadow-xl rounded-lg p-1">
    <img :src="img" class="ml-2 bg-cover w-12 h-12 rounded-full" />
    <div class="flex flex-col justify-center ml-2">
      <p class="font-bold t">{{ title }}</p>
      <p class="text-sm t" :style="{ color: 'var(--vp-c-text-2)'}">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string,
    link: string,
    description: string,
    img: string
  }>()

  const onLink = () => {
    window.open(props.link, '_blank')
  }
</script>

<style scoped>
.t {
  line-height: 1 !important;
  margin: 0.5rem 0 !important;
}
</style>