<template>
  <mainpage>
    <cmpt title="Raça: Á Moda da Casa">
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
          title="Raça" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
         <badge 
          title="Personagem Inicializado" 
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
        <p>Cada ser-vivo-relevante possui determinada raça, ganhando diversos bônus definitivos e não são atrelados a nenhum componente primário.</p>
        <p>Recomendável para cenários que possuem grandes diferenças entre as raças jogáveis, exigindo mecânicas próprias para cada.</p>
      </lines>
      <tcontainer>
        <h3>Raça Humana</h3>
        <ul>
          <li>Ganhe uma ação padrão por turno no combate em terrenos urbanos.</li>
          <li>Escolha dois atributos de qualquer tipo.</li>
          <li>Ative itens como ação extra.</li>
          <li>Contra-Ataque: Caso o inimigo falhe em uma ação de Ataque Corpo-a-Corpo contra você, ganhe uma Ação Momentânea.</li>
        </ul>
      </tcontainer>
      <lines>
        <tsub>Sub-Agrupamento - Características Genéricas</tsub>
        <p>Toda raça terá uma pequena tabela com características genéricas(média de tamanho, idade, tipos de aparência, por exemplo) separada por categorias. Estas características de classe não aplicam bônus, mas podem ser afetadas por outros componentes.</p>
        <p>Recomendável para raças que variam de região para região.</p>
        <tcontainer>
          <h3>Raça Humana</h3>
          <ul>
            <li style="list-style-type: square !important;">Tamanho: Médio-Alto</li>
            <li style="list-style-type: square !important;">Expectativa de Vida: 100-150 anos</li>
            <li style="list-style-type: square !important;">...</li>
          </ul>
          <ul>
            <li>Ganhe uma ação padrão por turno no combate em terrenos urbanos.</li>
            <li>Escolha dois atributos de qualquer tipo.</li>
            <li>Ative itens como ação extra.</li>
          </ul>
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Árvore Genealógica</tsub>
        <p>Todos os bônus de raça deriva de antigas mutações até chegar no resultado atual.</p>
        <p>Recomendável ser utilizado quando há necessidade de criar sub-raças, sem repetir conteúdo redundante.</p>
        <tcontainer>
          <h3>Taleks</h3>
          <ul>
            <li>Ganha a habilidade nativa Visão Norturna.</li>
            <li>Escolha um atributo entre Estratégia e Percepção.</li>
          </ul>
          //...
          <h4>Taleks-Urno</h4>
          <ul>
            <li>Ganha a habilidade nativa Visão Norturna.</li>
            <li>Escolha um atributo entre Estratégia e Percepção.</li>
            <li>Ganhe um dado de vida por fim de combate.</li>
          </ul>
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Seres Não Jogáveis</tsub>
        <tbold>Requer Sub-Agrupamento - Árvore Genealógica</tbold>
        <p>Raças de seres não-jogáveis(monstros, por exemplo) irão ter uma ficha de bônus própria. Dessa forma, o estilo de combate/roleplay segue um propósito único, onde as variações desta raça criam seres únicos seguindo um ideal sólido.</p>
        <tcontainer>
          <h3>Cavalo-do-Ar</h3>
          <ul>
            <li>Habilidade Voar por até cinco minutos até ganhar Exaustão.</li>
            <li>Resistência a Dano Perfurante</li>
          </ul>
          //...
          <h4>Sobrevivente-do-Ar Nvl 3</h4>
          <ul>
            <li>Região: Altériath</li>
            <li>Raça: Cavalo-do-Ar</li>
            <li>Vida: 38</li>
            <li>Dado de Ataque: 1d8 + 5 de Dano Perfurante</li>
            <li>...</li>
          </ul>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold>- Personagens no nível inicial já são consideravelmente fortes, devido a quantidade de qualidade disponível.</p>
      <p><tbold>Adaptações:</tbold><tarticle>Ao utilizar <titalic>Padronização: Á Moda da Casa</titalic>, não dê bônus somatório diretamente ao recurso único, e sim bônus que acompanham a característica do personagem(bônus de resistência a dano congelante para um ser robótico, por exemplo).</tarticle></p>
      <tarticle></tarticle>
      <p><tbold>Exemplos:</tbold><tarticle>
        Se utilizar <titalic>Sub-Agrupamento - Características Genéricas</titalic> podemos definir o tamanho entre <titalic>Pequeno, Médio, Grande</titalic>, onde cada tamanho ocupa determinado espaço no campo de batalha definido no componente <titalic>Combate</titalic>.
        <tcontainer>
          <h3>Regras de Combate</h3>
          <ul>
            <li>...</li>
            <li>Médio: 1x1 Sem Colisão de Campo</li>
            <li>Alto: 1x1</li>
            <li>Gigante: 2x2 Sem Colisão de Campo</li>
            <li>...</li>
          </ul> 
          <h3>Raça Humana</h3>
          <ul>
            <li>...</li>
            <li>Tamanho: Médio</li>
            <li>...</li>
          </ul>
        </tcontainer>
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
