<template>
  <mainpage>
    <cmpt title="Vitalidade: À Moda da Casa">
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
          title="Vitalidade" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
         <badge 
          title="Padronização" 
          bg="rgba(135,116,232, 1)"
          bg1="rgba(135,116,232, 0.3)"
          bg2="rgba(135,116,232, 0.2)"
          bg3="rgba(135,116,232, 0.1)"
          text="black" 
        />
        <badge 
          title="Personagem Escalável" 
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
          title="Alto" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        Este componente de vitalidade é o mais tradicional encontrado em RPG's, onde a vida dos personagens é decidida por uma barra de vitalidade de valor inteiro, tendo um valor máximo X e ao chegar a 0 o personagem morre.
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Morrendo</tsub>
        <p>Se o personagem ficar com a vida abaixo ou igual a 0, ganha a característica <titalic>Morrendo</titalic>.</p>
        <p>A cada rodada com a característica <titalic>Morrendo</titalic>, o jogador realiza um teste, se o valor for acima de 10 continua com a característica e pode ser levantado por um aliado. Se fracassado, perde a característica <titalic>Morrendo</titalic> entrando na característica <titalic>Morto</titalic>.</p>
        <tcontainer :soft="true">
          <p>J: Ok. Estou com -4... cai.</p>
          <p>...</p>
          <p>J: Uh. Passei... Alguém me levanta ai na moral?</p>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Obrigatoriedade de outros componentes a trabalhar em torno do conceito de vitalidade.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Se estiver usando o componente <titalic>Nivelamento: À Moda da Casa</titalic>, o valor da barra de vitalidade também será um dado somatório por nível, aplicando este valor no máximo dos pontos de vida.</warning></p>
      <tarticle><warning>Utilizando o <titalic>Sub-Agrupamento - Morrendo</titalic>, pode adaptar para componentes terciários de estado/condição.</warning></tarticle>
      <p><tbold>Exemplos:</tbold><tarticle>A <titalic>Barra de Vitalidade</titalic> de todos os personagens é igual, com o valor máximo de 10. A cada ataque sofrido, independente do tipo, perde -1 na barra. Ao chegar a 0, morre.</tarticle></p>
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
