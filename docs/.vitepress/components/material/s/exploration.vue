<template>
  <mainpage>
    <cmpt title="Exploração: Á Moda da Casa">
      <concept title="Requisitos">
        <badge 
          title="Nenhum" 
          bg="rgba(255,228,209, 1)"
          bg1="rgba(255,228,209, 0.3)"
          bg2="rgba(255,228,209, 0.2)"
          bg3="rgba(255,228,209, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Tipo">
        <badge 
          title="Exploração" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
        <badge 
          title="Componente Independente" 
          bg="rgba(135,116,232, 1)"
          bg1="rgba(135,116,232, 0.3)"
          bg2="rgba(135,116,232, 0.2)"
          bg3="rgba(135,116,232, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Estilo">
        <badge 
          title="TTRPG" 
          bg="rgba(69,166,235, 1)"
          bg1="rgba(69,166,235, 0.3)"
          bg2="rgba(69,166,235, 0.2)"
          bg3="rgba(69,166,235, 0.1)"
          text="black" 
        />
        <badge 
          title="cRPG" 
          bg="rgba(69,166,235, 1)"
          bg1="rgba(69,166,235, 0.3)"
          bg2="rgba(69,166,235, 0.2)"
          bg3="rgba(69,166,235, 0.1)"
          text="black" 
        />
        <badge 
          title="MMORPG" 
          bg="rgba(69,166,235, 1)"
          bg1="rgba(69,166,235, 0.3)"
          bg2="rgba(69,166,235, 0.2)"
          bg3="rgba(69,166,235, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Impacto">
        <badge 
          title="Muito Baixo" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        <p>As regiões são divididas pelos seus biomas, e estes aplicam efeitos genéricos.</p>
        <p>Possui pouca efetividade, mas pode ser crucial caso os jogadores ignorem totalmente onde estão.</p>
        <tcontainer :soft="true">
          <h3>Bioma: Frio. Muito Frio.</h3>
          <p>- A velocidade de movimento é reduzida pela metade.</p>
          <p>- Efeito Congelando é aplicado. A cada hora, Congelando aplica 1d4 de Dano Congelante.</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Localidade</tsub>
        <p>Além de criar regras para os biomas, considere também o tamanho dos povoados.</p>
        <p>- Recomendado para cenários que existam nações, e não reinos.</p>
        <tcontainer :soft="true">
          <h3>Metrópole</h3>
          <p>- Não é possivel utilizar veículos acima de 60km/h.</p>
          <p>- Efeitos de teleporte são proibidos.</p>
          <p>- A polícia local pode interferir rapidamente em caso de confusão.</p>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold>- Abordagem simplista.</p>
      <p><tbold>Adaptações:</tbold><tarticle>- Componentes terciários de <titalic>Condições</titalic> podem ajudar na criação das regras.</tarticle></p>
      <p><tbold>Exemplos:</tbold><tarticle>
        - Criação de quatro biomas(neve, deserto, floresta temperada, selva) onde cada uma possui interações com certas raças que são nativas destes lugares.
      </tarticle></p>
    </cmpt>
  </mainpage>
</template>

<script>
import badge from '../badge.vue'
import concept from '../concept.vue'
import mainpage from '../mainpage.vue'
import cmpt from '../cmpt.vue'
import lines from '../lines.vue'
import tlink from '../tlink.vue'
import titalic from '../titalic.vue'
import tarticle from '../tarticle.vue'
import tcontainer from '../tcontainer.vue'
import tbold from '../tbold.vue'
import tsub from '../tsub.vue'

export default {
  components: {
    concept,
    mainpage,
    badge,
    cmpt,
    lines,
    tlink,
    titalic,
    tarticle,
    tcontainer,
    tbold,
    tsub
  }
}
</script>
