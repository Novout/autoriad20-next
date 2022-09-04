<template>
  <mainpage>
    <cmpt title="Magia: Á Moda da Casa">
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
          title="Magia" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
        <badge 
          title="Opcionalidade" 
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
        <p>Ao chegar em X nível(ou qualquer outro tipo de marcador), desbloqueia uma lista de magias disponíveis.</p>
        <p>Cada magia possui um título, descrição, como podem ser conjuradas e efeitos específicos.</p>
        <p>Os personagens podem usar qualquer magia da lista.</p>
        <tcontainer :soft="false">
          <h3>Magia: Raio Luminescente</h3>
          <p>Tipo: Foco com duas mãos</p>
          <p>Alvo: Único</p>
          <p>Custo: 1 Turno Completo</p>
          <p>Descrição: O alvo designado realiza um teste de Destreza...</p>
        </tcontainer>
        <tcontainer :soft="false">
          <h3>Classe: Conjurador</h3>
          <ul>
            <li>Nível 1: Receba Lista Inicial do Conjurador</li>
            <li>...</li>
            <li>Nível 5: Receba Lista Intermediário do Conjurador</li>
          </ul>
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Slots</tsub>
        <p>Cada lista de magias possui os seu próprio slot's, onde o jogador gasta 1 slot para conjurar magia</p>
        <p>A forma que o jogador recupera os slot's é definida pelo criador do sistema(pois depende da mecânica de recuperação dos recursos).</p>
        <tcontainer :soft="false">
          <h3>Classe: Conjurador</h3>
          <ul>
            <li>Nível 1: Dois slots nvl 1.</li>
            <li>...</li>
            <li>Nível 5: Cinco slots nvl 1 e dois slots nvl 2.</li>
          </ul>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold>- Necessidade de equilíbrio, pois classes conjuradoras terão muitas opções pernamentemente á disposição.</p>
      <p><tbold>Adaptações:</tbold>- Com o componente Condições é possivel implementar itens utilizando efeitos.</p>
      <p><tbold>Exemplos:</tbold>
        <tarticle>
          - Cada origem possui um conjunto de itens inicias, que todo habitante que já habitou pelas áreas possui. Além disso, uma lista de itens primários foi disponibilizada para uso geral.
        </tarticle>
      </p>
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
