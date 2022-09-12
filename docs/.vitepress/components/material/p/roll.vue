<template>
  <mainpage>
    <cmpt title="Rolagem: À Moda da Casa">
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
          title="Rolagem" 
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
          title="Mediano" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        <p>D20 tradicional. O valor somatório dificilmente ultrapassa 30-35.</p>
        <p><info>Rolagens principais são obrigatoriamente D20.</info></p>
        <p><info>Rolagens para necessidades menores com D12,D10,D8,D6 e D4.</info></p>
        <p><info>Regras generalistas(por exemplo, a rolagem de looting) utilizam D100.</info></p>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Vantagem e Desvantagem</tsub>
        <p>Determinados recursos podem aplicar Vantagem ou Desvantagem.</p>
        <p>Vantagem: Dois D20 são rolados, pegando o maior valor.</p>
        <p>Desvantagem: Dois D20 são rolados, pegando o menor valor.</p>
        <p><warning>Vantagem e Desvantagem não são somáveis, por exemplo, em caso de duas regras aplicarem Vantagem, os mesmos dois dados serão jogados, no lugar de três.</warning></p>
        <tcontainer :soft="true">
          <p>J: Por conta do Flanqueamento, irei rolar meu dois ataques com Vantagem...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Crítico e Falha</tsub>
        <p>Em rolagens de D20, 1 significa Falha e 20 significa Crítico. Falha aplica efeito negativa mais impactante que apenas o erro enquanto Crítico aplica efeito positivo mais impactante que apenas o acerto.</p>
        <tcontainer :soft="true">
          <p>J: CRITEI MESTRE!</p>
          <p>M: ... rola os dados de dano adicionais...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Versus</tsub>
        <p>Quando há opostos, ou seja, dois personagens realizam a mesma ideia em sentidos opostos(tentar abrir e fechar a porta no mesmo momento), os personagens rolam 1d20 para decidir quem terá a prioridade.</p>
        <tcontainer :soft="true">
          <p>J: Vou empurrar a porta, Mestre.</p>
          <p>M: Algo do outro lado está segurando a porta... jogue 1d20 + Modificador de Força...</p>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Dificuldade de equilibrar recursos em personagens de alto nível quanto utilizado componentes de Nivelamento de Alto Impacto.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Aproveitar os Sub-Agrupamentos para a criação de recursos terciários (condições, reações).</warning></p>
      <p><tbold>Exemplos:</tbold><tarticle>
        A ação de <titalic>Ataque</titalic> rola com 1d20 + Bônus pelo nível do personagem. Ao acertar, role o valor na arma + o <titalic>Atributo</titalic> necessário.
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
