<template>
  <section class="flex justify-center items-center flex-col w-full mt-10">
    <h2 class="text-3xl font-bold mt-10 my-20 border-t-1">Parceiros</h2>
    <div class="flex flex-wrap justify-center gap-5 items-center w-full p-5">
      <HomeBottomItem title="Better Write" link="https://betterwrite.io" description="Processador de Texto Moderno." img="/bw.png" />
      <HomeBottomItem title="Restos da Geada" link="https://restosdageada.com" description="Universo SCI-Fi Pós-Apocalíptico." img="/ars.png" />
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeBottomItem from "./HomeBottomItem.vue";
</script>