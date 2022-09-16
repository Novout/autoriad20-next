<template>
  <p :id="`group-${setCorrectId(title)}`" style="font-weight: 700; color: #C1C9F5; pointer-events: none;">{{ title }}</p>
</template>

<script setup lang="ts">
import { setCorrectId } from '../../../scripts/utils.ts'

defineProps<{
  title: string
}>()
</script>