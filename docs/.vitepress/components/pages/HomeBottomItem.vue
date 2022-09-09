<template>
  <div @click="onLink" :style="{ fontFamily: 'Poppins', backgroundColor: 'var(--vp-c-bg-soft)'}" class="flex cursor-pointer transition-shadow shadow-none hover:shadow-xl w-60 h-80 text-center flex-col items-center gap-5 shadow-xl rounded-lg p-8">
    <img :src="img" class="bg-cover w-20 h-20 rounded-full" />
    <h2 class="font-bold text-lg">{{ title }}</h2>
    <p class="text-sm" :style="{ color: 'var(--vp-c-text-2)'}">{{ description }}</p>
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