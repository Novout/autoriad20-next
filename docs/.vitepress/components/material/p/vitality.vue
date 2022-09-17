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
        A vida dos personagens é decidida por uma barra de vitalidade de valor inteiro (0-1-2-3-4...), tendo um valor máximo X. Se o personagem chegar a 0 pontos de vida, o personagem morre ou entra em uma condição específica.
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Morrendo" />
        <p><tbold>Requer o Componente Terciário: Condição</tbold></p>
        <p>Se o personagem ficar com a vida abaixo ou igual a 0, ganha a característica <titalic>Morrendo</titalic>.</p>
        <p>A cada rodada com a característica <titalic>Morrendo</titalic>, o jogador realiza um teste, se o valor for acima de 10, continua com a característica e pode ser levantado por um aliado. Se fracassado, perde a característica <titalic>Morrendo</titalic>e acaba entrando na característica <titalic>Morto</titalic>.</p>
        <tcontainer :soft="true">
          <p>J: Ok. Estou com -4... cai.</p>
          <p>...</p>
          <p>J: Uh. Passei... Alguém me levanta ai na moral?</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Barras Adicionais" />
        <p>Use outros componentes para criar barras adicionais para cada personagem, seguindo às mesmas regras da barra de vida, só que com o valor para uma finalidade diferente.</p>
        <tcontainer>
          <div class="w-full py-1 bg-green-500 text-center">10/10 - Barra de Vida</div>
          <div class="w-full py-1 bg-yellow-600 text-center my-3">6 - Pontos de Esquiva</div>
          <div class="w-full py-1 bg-blue-500 text-center">2/3 - Pontos de Magia</div>
        </tcontainer>
        <info>
          Diversos Componentes Terciários permitirão regras e ideias para conseguir implementar este Sub-Agrupamento.
        </info>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Personagens Relevantes" />
        <p>Atribui característica e conteúdos de outros componentes apenas para personagens controlados por pessoas. Assim, fichas de animais ou inimigos, por exemplo, terão a liberdade para saírem do padrão do sistema.</p>
        <tcontainer>
          <p>Azelath - Personagem Relevante - Nível: 5 / Classe: Mago</p>
          <p>//...</p>
          <p>Rerold - Ataque Corpo-A-Corpo: 3d16 causando 2d10 de Dano Físico...</p>
        </tcontainer>
        <danger>
          Este Sub-Agrupamento é recomendado apenas para TTRPG.
        </danger>
        <info>
          O Componente Terciário: Condições permitiria criar regras de utilidade única para cada Personagem Não-Relevante.
        </info>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Obrigatoriedade de outros componentes a trabalhar em torno do conceito de vitalidade.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Se estiver usando o componente <titalic>Nivelamento: À Moda da Casa</titalic>, o valor da barra de vitalidade também será um dado somatório por nível, aplicando este valor no máximo dos pontos de vida.</warning></p>
      <p><tbold>Exemplos:</tbold><tarticle>A <titalic>Barra de Vitalidade</titalic> de todos os personagens é igual, com o valor máximo de 10. A cada ataque sofrido, independente do tipo, perde -1 na barra. Ao chegar a 0, morre.</tarticle></p>
    </cmpt>
  </mainpage>
</template>