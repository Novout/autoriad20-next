<template>
  <a :href="text" target="_blank">{{ text }}</a>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>