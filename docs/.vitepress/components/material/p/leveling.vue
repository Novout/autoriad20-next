<template>
  <mainpage>
    <cmpt title="Nivelamento: À Moda da Casa">
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
          title="Nivelamento" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
         <badge 
          title="Dado Somatório" 
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
        O nivelamento mais encontrado em RPG, onde tudo possui um certo número de dado que a cada nível soma mais um dado de mesmo nível.
        <p>Ao escolher este componente, a escalabilidade e o ganho de recompensa estará relacionado diretamente ao ganho de nível.</p>
        <p>Não possui limite de níveis, pois o próprio criador terá que separar o impacto de ganhar um nível, o que varia diretamente do cenário ou do estilo de jogo proposto.</p>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Experiência" />
        <tbold>Mutuamente Exclusivo com Sub-Agrupamento - Ação Relevante</tbold>
        <p>Os personagens acumulam XP pela narrativa, morte de inimigos, entre outros meios.</p>
        <p><info>Consulte tabelas de experiência como RuneScape/Skyrim/ARK/etc... e tenha ideias para chegar na sua expectativa de nivelamento (ou construa sua própria lógica de XP).</info></p>
        <tcontainer :soft="true">
          <p>M: Vocês acabam de ganhar 450 de XP por matarem o Ogro das...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Ação Relevante" />
        <tbold>Mutuamente Exclusivo com Sub-Agrupamento - Experiência</tbold>
        <p>Os personagens upam de nível quando algum acontecimento relevante na histórica acontece.</p>
        <p><info>Recomendável para cenários com grande impacto geopolítico ou com linearidade de campanha.</info></p>
        <tcontainer :soft="true">
          <p>M: Uma grande sede de energia envolve o corpo de todos vocês, trazendo lembranças do passado. Diversas imagens entram em cena, onde a única delas que é idêntica para todos demonstra um estreito corredor, com uma luz no fim do túnel...</p>
          <p>M: Vocês receberam um nível adicional para a classe atual. Além disso... todos vocês ganham um nível de Psiônico!</p>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Dificuldade de trazer conteúdo inovador em altos níveis.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Transforme todo conteúdo não-nivelado em uma possibilidade de reutilizar conteúdo (itens, por exemplo).</warning></p>
      <tbold>Exemplos:</tbold><tarticle>- Os personagem possuem uma <titalic>Barra de Resiliência</titalic>, onde pode gastar esses pontos para ganhar bônus em rolagem de dados ou realizar uma ação sobrenatural de força ou resistência. A cada nível, todo personagem ganha 1d4 (ou 2) adicionalmente e recupera toda a <titalic>Barra de Resiliência</titalic>.</tarticle>
    </cmpt>
    <cmpt title="Nivelamento: Pontuação Acumulativa">
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
          title="Nivelamento" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
         <badge 
          title="Dado Somatório" 
          bg="rgba(135,116,232, 1)"
          bg1="rgba(135,116,232, 0.3)"
          bg2="rgba(135,116,232, 0.2)"
          bg3="rgba(135,116,232, 0.1)"
          text="black" 
        />
        <badge 
          title="Árvore de Escolhas" 
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
          title="Muito Alto" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        A cada novo nível, o personagem ganha X pontos para poder distribuir em uma árvore de escolhas, limitada (ou não) pelas regras impostas do sistema.
        <p>Cada árvore é dividida em um componente secundário, começando "de baixo para cima e da esquerda para direita", dividida em módulos que possuem três números: O primeiro define a sub-árvore (se tiver necessidade), o segundo a altura do módulo e o terceiro a sua posição na altura, da esquerda para a direita. Se uma determinada altura tiver apenas um único módulo, o terceiro valor é desnecessário.</p>
        <info>
          Esta abordagem é recomendada para cenários que todos os impactantes (raça, classe, origem, por exemplo) são muito diferentes entre si, onde as habilidades são definidas por capacidades específicas (capacidade de voar, salto longo, velocidade) e não genéricas (força, constituição, inteligência).
        </info>
        <warning>
          É fortemente recomendado o uso deste componente com outros componentes de Pontuação Acumulativa.
        </warning>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Inicialização de Escolhas" />
        <p>Entrega um valor x para a construção de personagem + valor por nível que o personagem irá começar.</p>
        <p>Abordagem recomendada quando o a vivência do personagem durante a vida possui muito impacto em suas habilidades pessoais.</p>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Iniciantes podem ter dificuldades na criação dos personagens.</danger></p>
      <p><danger>Equilibrar os valores se torna uma tarefa complicada devido a diversas possibilidades de escolhas.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Crie um GFX da árvore de escolhas para facilitar as escolhas dos jogadores.</warning></p>
      <p><warning>Sistemas com muitas árvores poderá exigir maior ganho de pontos por nível.</warning></p>
      <p><info>Árvores não necessariamente dependem de pré-requisitos sobre módulos, tendo eles independentes entre si. Uma boa utilização seria para uma lista de magias, onde todos os módulos possuem o pré-requisito: Classe Conjurador.</info></p>
      <tbold>Exemplos:</tbold>
      <p><tarticle>A categoria Classe exige 7 árvores, onde cada uma delas possui 3 sub-grupos (arquétipos). A árvore Monge possui três arquétipos no primeiro nível para escolher, definidos como 1-1, 2-1 e 3-1. Todo segundo nível possui três alternativas, então determinando (1-2-1, 1-2-2, 1-2-3),  (2-2-1, 2-2-2, 2-2-3),  (3-2-1, 3-2-2, 3-2-3).</tarticle></p>
      <tarticle>- Utilizando o <titalic>Sub-Agrupamento - Inicialização de Escolhas</titalic>, o personagem começa no nível 1 com 11 pontos disponíveis, distribuindo 5 pontos em raça, 5 em origem e 1 em classe. Por novo nível, ganha um ponto adicional para distribuir na classe.</tarticle>
    </cmpt>
    <cmpt title="Nivelamento: Fixo">
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
          title="Nivelamento" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
         <badge 
          title="Dado Esperado" 
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
          title="Muito Alto" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
       Personagens, seja eles controlados pelos Jogadores ou pelo Mestre, possuirão recursos fixos e que não podem ser alterados. Recomendado para jogos onde somente a história importa ou no caso dos resultados da história já serem esperados.
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Limita a tomada de ações dos personagens.</danger></p>
      <p><tbold>Adaptações:</tbold><info>Componentes Terciários (como Equipamentos) fica a mercê do Mestre considerar se os personagens ganham ou perdem Equipamentos, por exemplo.</info></p>
      <tbold>Exemplos:</tbold>
      <p><tarticle>O jogador pode escolher entre selecionar os personagens Maknvo - O Mago e Verto - O Lutador com habilidades já definidas.</tarticle></p>
    </cmpt>
  </mainpage>
</template>