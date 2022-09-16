<template>
  <mainpage>
    <cmpt title="Origem: À Moda da Casa">
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
          title="Origem" 
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
          title="Baixo" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        <p>Esta origem determina a região que o personagem passou a maior parte de sua vida, e a onde aprendeu a maioria de seus truques.</p>
        <p>Separado entre os bônus: Bônus de Região e Bônus de Aprendizado. Bônus de Região é apenas o que qualquer membro da região aprende involuntariamente e o Bônus de Aprendizado é a especialização durante uma fase de sua vida. É recomendável que tenha várias opções para o jogador escolher, assim adaptando o passado do personagem ao resultado final.</p>
        <tcontainer :soft="false">
          <h3>Planeta Arrakis</h3>
          Bônus de Região:
          <ul>
            <li>Melange: Sob o efeito de Especiarias, receba +1 no atributo de Inteligência.</li>
            <li>Supressão de Terreno: O valor de Visão dobra em terrenos com Visão Dificultada.</li>
            <li>Economia de Recurso: Gasta três vezes menos de água e comida.</li>
          </ul>
          Bônus de Aprendizado:
          <ul>
            <li>Fremen: 1 kit de Sobrevivente Nato...</li>
            <li>Saudakar Nativo: 1 kit de Guerreiro Especializado...</li>
          </ul>
          //...
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Timeline Inicial</tsub>
        <p>Determina um período de tempo inicial.</p>
        <p>Recomendável para cenários que possuem muita mudança geopolítica.</p>
        <tcontainer :soft="false">
          <p>O cenário inicia em 700 da Segunda Era..</p>
          <p>//...</p>
          <h3>Origem: Númenor</h3>
          //...
          <h3>Origem: Domínio de Sauron</h3>
          // ...
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Origens pode atrapalhar a montagem de personagem. Recomendamos disponibilizar diversas opções de Origem, ou que elas tenham pouco impacto.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>A Origem pode implicar em outros módulos secundários(como raça que existe apenas em um local, por exemplo).</warning></p>
      <p><tbold>Exemplos:</tbold>- Dividido entre cinco origens(Arkato, Ellinder, Os Arruinados, Amelo, Fisarth) podemos colocar um único Bônus de Região e integrar componentes terciários relacionado a itens para os Bônus de Aprendizado.</p>
    </cmpt>
    <cmpt title="Origem: Pontuação Acumulativa">
      <concept title="Requisitos">
        <badge 
          title="Nivelamento: Pontuação Acumulativa" 
          bg="rgba(255,228,209, 1)"
          bg1="rgba(255,228,209, 0.3)"
          bg2="rgba(255,228,209, 0.2)"
          bg3="rgba(255,228,209, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Tipo">
        <badge 
          title="Origem" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
        <badge 
          title="Árvore de Escolhas" 
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
          title="Baixo" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        <p>Componente diretamente dependente de <titalic>Nivelamento: Pontuação Acumulativa</titalic>, funcionando como um anexável para a Árvore de Distribuição de Pontos.</p>
        <p>Utilize se considerar as origens relevantes o suficiente para ter sua própria árvore.</p>
        <tcontainer :soft="false">
          <h3>Origem: Teneza</h3>
          <ul>
            <li>1-1: Especialização: Comerciante</li>
            <li>1-2-1: Ganhe +2 de Carisma temporário ao negociar.</li>
            <li>2-1: Especialização: Lutador das Ruas</li>
            <li>3-1: Especialização: Nobre</li>
            <li>...</li>
          </ul>
          //...
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Categorias</tsub>
        <p>Determine escolhas específicas e que dependem da inicialização do personagem.</p>
        <p>Recomendado utilizar pontos disponíveis apenas para essa ramificação ao criar o personagem.</p>
        <tcontainer :soft="false">
          <h3>Cidade</h3>
          <ul>
            <li>Alisca - O Centro: Possui diversos contatos sub-urbanos ao longo do reino de Teneza.</li>
            <li>Jalhar - A Disciplina: Receba +1 em Agilidade em combates urbanos.</li>
            <li>Meve - Os Itinerantes: Receba +1 permanente em Carisma por cada novo Reino descoberto.</li>
            <li>...</li>
          </ul>
          //...
          <h3>Posição</h3>
          <ul>
            <li>Comerciante: Ganhe +2 de Carisma temporário ao negociar.</li>
            <li>Marginal: Ganhe o módulo Malícia Natural.</li>
            <li>Taverneiro: Ganhe 50% de desconto ao comprar qualquer item abaixo de Incomum.</li>
            <li>...</li>
          </ul>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Difícil de balancear, principalmente ao utilizar o Sub-Agrupamento - Categorias.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Nada te impede de criar requisitos para a escolha de módulos, inclusive utilizar recurso de outros componentes.</warning></p>
      <p><tbold>Exemplos:</tbold><tarticle>
        - Arttat, originário de Teneza, foi um Nobre da corte máxima, abandonou todos os seus privilégios para se aventurar como...
      </tarticle></p>
    </cmpt>
  </mainpage>
</template>