<template>
  <div class="__container">
    <div class="__m">
      <componentsexampleitem>
        Primário
      </componentsexampleitem>
      <componentsexampleitem>
        Secundário
      </componentsexampleitem>
      <componentsexampleitem>
        Terciário
      </componentsexampleitem>
    </div>
    <div>
      <componentsexampleitem>
        Padronização
      </componentsexampleitem>
      <componentsexampleitem>
        Combate
      </componentsexampleitem>
      <componentsexampleitem>
        ...
      </componentsexampleitem>
    </div>
    <div>
      <componentsexampleitem>
        Vitalidade
      </componentsexampleitem>
      <componentsexampleitem>
        Exploração
      </componentsexampleitem>
      <componentsexampleitem>
        ...
      </componentsexampleitem>
    </div>
    <div>
      <componentsexampleitem>
        Nivelamento
      </componentsexampleitem>
      <componentsexampleitem>
        Origem
      </componentsexampleitem>
      <componentsexampleitem>
        Magias
      </componentsexampleitem>
    </div>
    <div>
      <componentsexampleitem>
        Roleplay
      </componentsexampleitem>
      <componentsexampleitem>
        Classes
      </componentsexampleitem>
      <componentsexampleitem>
        Itens
      </componentsexampleitem>
    </div>
    <div>
      <componentsexampleitem>
        Guia
      </componentsexampleitem>
      <componentsexampleitem>
        Raças
      </componentsexampleitem>
      <componentsexampleitem>
        Talentos
      </componentsexampleitem>
    </div>
  </div>
</template>

<script>
import componentsexampleitem from './componentsexampleitem.vue'

export default {
  components: {
    componentsexampleitem
  }
}
</script>

<style scoped>
.__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.2rem;
}

.__m {
  margin-bottom: 30px;
  font-weight: 700;
}

.__container > div {
  display: flex;
  gap: 20px;
}
</style>