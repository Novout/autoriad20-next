<template>
  <mainpage>
    <cmpt title="Guerra: Á Moda da Casa">
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
          title="Guerra" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
        <badge 
          title="Independente" 
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
        <p>O componente "Á Moda da Casa" de TiraniaD20 não podia ser diferente de grandes opções para batalhas.</p>
        <p>Por ser um componente muito especificado, dividimos todos os recursos em Sub-Agrupamentos, permitindo o criador maior maleabilidade.</p>
        <tcontainer :soft="true">
          <p>M: ...exércitos do sul cruzaram o Yaruga novamente...</p>
          <p>J: E lá vamos nós...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Batalha Local</tsub>
        <p>Quando os personagens estão presentes em uma batalha e desejam se envolver nela, este Sub-Agrupamento é aplicado.</p>
        <p>Em um mapa hexagonal do local(o tamanho depende do tamanho da região, mas este componente não foi feito para grandes distâncias) os tokens são conjuntos de tropas.</p>
        <p>Os conjuntos possuem o mesmo poder(se possível) juntando grupos parecidos(100 guerreiros, 10  catapultas, 5 magos), onde as mecânicas de combate direto são definidas pelo criador.</p>
        <p>Os personagens contam como um único hexágono, realizando suas ações normalmente em seus turnos. Se os personagens são de nível muito baixo(a ponto de não terem poder suficiente para afetar media-larga escala) agrupe com um token já existente.</p>
        <p>A forma que deve nivelar ou aplicar vitalidade depende dos componentes primários OU crie regras específicas se achar necessário.</p>
        <tcontainer :soft="true">
          <p>M: O grupo de arqueiros está em estado Fraco.<p>
          <p>J: Ok, irei conjurar Fúria Flamejante...</p>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold>- Uma batalha inteira pode ocupar um tempo maior do que o planejado.</p>
      <p><tbold>Adaptações:</tbold>- Adaptar as regras escolhidas no componente de Combate para as batalhas.</p>
      <p><tbold>Exemplos:</tbold>
        <tarticle>
          - Uma grande revolução inicia ao mesmo tempo em que os heróis estão na cidade. Agora, precisam escolher um dos lados...
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
