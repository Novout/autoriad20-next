<template>
  <mainpage>
    <cmpt title="Roleplay: Á Moda da Casa">
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
          title="Roleplay" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
         <badge 
          title="Padronizado" 
          bg="rgba(135,116,232, 1)"
          bg1="rgba(135,116,232, 0.3)"
          bg2="rgba(135,116,232, 0.2)"
          bg3="rgba(135,116,232, 0.1)"
          text="black" 
        />
        <badge 
          title="Jogador X Mestre" 
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
        <p>Este é o roleplay tradicional, relacionado a interação de Mestre X Jogador, onde o jogador realiza uma ação, em seguida o mestre responde a ação e por último o jogador reage a alternativas da resposta do mestre, continuando o ciclo até finalizar o diálogo.</p>
        <p>Não exige muitas explicações, pois é o método mais tradicional que os sitemas D20 disponibilizam.</p>
        <p>A definição <titalic>Jogador CONTRA Mestre</titalic> pode parecer imprópria, mas a partir do ideal de que o Mestre é o suprassumo do contexto, e que qualquer desavença pode ser resolvida com um TPK acaba tornando a definição "aceitável".</p>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Pontos de Contexto</tsub>
        <p>Por cada boa interpretação, onde o critério é definido pelo Mestre, o jogador em destaque ganha 1 ponto de contexto.</p>
        <p>Os jogadores podem gastar pontos de contexto para interferir na existência da cena, por exemplo, adicionar um recurso que não foi descrito pelo mestre.</p>
        <p>- Este tipo de sub-agrupamento exige certa discussão entre os jogadores e o Mestre sobre a mecânica, evitando desavenças.</p>
        <p>- Não é recomendável para campanhas com personagens e plot's bem definidos.</p>
        <tcontainer :soft="true">
          <p>M: Dois humanos, de mesma estatura, entram na tarverna...</p>
          <p>J: Mestre, gasto um ponto de contexto para que um desses humanos seja um amigo distante do passado.</p>
          <p>M: Ok... você rapidamente percebe, sem muito esforço, que o da direta é o...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Interferência de Diálogo</tsub>
        <p>Em uma discussão, o grupo pode optar por sempre utilizar o membro com melhores características para diálogo, assim todos os jogadores do grupo podem participar da discussão sem que sejam penalizados pelos seus personagens.</p>
        <p>- Não é recomendável para sistemas com muitas mecânicas de conversa.</p>
        <p>- Certos componentes não são permitidos de serem utilizados com esse sub-agrupamento.</p>
        <tcontainer :soft="true">
          <p>M: Tarlla vem na direção do grupo...</p>
          <p>J: Posso rolar Percepção pelo grupo?</p>
          <p>M: Sim, pode utilizar o valor base do X personagem...</p>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold> - Certos componentes secundários e terciários são restritos a interações Mestre X Jogador.</p>
      <p>- Limitação da criatividade dos jogadores</p>
      <p>- O Mestre possui o total controle do universo.</p>
      <p><tbold>Adaptações:</tbold>- Componentes terciários de discurso podem dar um pouco mais de voz aos jogadores.</p>
      <p><tbold>Exemplos:</tbold>Toda a narrativa não se distância de RPG's tradicionais:</p>
      <tcontainer :soft="true">
        <p>J: Mestre, posso utilizar a habilidade A para descobrir sons na região?</p>
        <p>M: Pode, lembre que sua classe permite rolar esse tipo de teste com vantagem.</p>
        <p>J: Ok, irei rolar com vantagem... 16 no dado.</p>
        <p>M: Você percebe alguns barulhos distoantes do vento vindo da direção B...</p>
      </tcontainer>
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
import tbold from '../tbold.vue'
import tcontainer from '../tcontainer.vue'
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
    tbold,
    tcontainer,
    tsub
  }
}
</script>
