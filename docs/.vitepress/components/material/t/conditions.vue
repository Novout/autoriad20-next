<template>
  <mainpage>
    <cmpt title="Condição: Á Moda da Casa">
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
          title="Condição" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
        <badge 
          title="Genérico" 
          bg="rgba(135,116,232, 1)"
          bg1="rgba(135,116,232, 0.3)"
          bg2="rgba(135,116,232, 0.2)"
          bg3="rgba(135,116,232, 0.1)"
          text="black" 
        />
        <badge 
          title="Conteúdo Dependente" 
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
          title="Baixo" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        <p>A criação de uma lista de condições, onde cada uma é definida por um título e uma descrição.</p>
        <tcontainer :soft="false">
          <h3>Condição: Sangramento</h3>
          <p>- Aplique 1d4 de Dano por Sangramento por turno.</p>
          //...
          <h3>Condição: Atordoado</h3>
          <p>- Não pode realizar nenhum tipo de ação(normal, bônus e extra).</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Tipos de Dano</tsub>
        <p>Defina tipos de dano e os utilize para fraquezas ou resistências a certos tipos de ataques. Podem estar relacionadas a outros tipos de Condições.</p>
        <tcontainer :soft="false">
          <h3>Dano Perfurante</h3>
          <p>- Caso o valor do Dano Perfurante equivale a metade da vida atual do alvo, aplique Sangramento por dois turnos.</p>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold>- A sua aplicabilidade depende(e somente) das suas escolhas em Padronização de Jogo e Rolagem.</p>
      <p><tbold>Adaptações:</tbold>- Aplicar a temporização(duramento em turnos, por exemplo) diretamente nas condições, sem depender do contexto.</p>
      <p>- Criar condições exclusivas para pertencer a componentes secundários(por exemplo, apenas a Classe Monge teria Dano Radiante, ou aplicaria Cegueira com a condição Cego.</p>
      <p><tbold>Exemplos:</tbold><tarticle>
        - Duas listas, uma com os Tipos de Dano(Congelante, Perfurante, Cortante, Psiônico...) e a outra com Efeitos(Sangramento, Atordoado, Cego, Voando...).
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
