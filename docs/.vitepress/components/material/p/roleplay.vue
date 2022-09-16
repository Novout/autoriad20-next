<template>
  <mainpage>
    <cmpt title="Roleplay: À Moda da Casa">
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
        <p>Este é o <titalic>roleplay</titalic> tradicional, relacionado à interação de Mestre X Jogador, onde o jogador realiza uma ação, e em seguida o mestre responde a ação e por último o jogador reage a alternativas da resposta do mestre, continuando o ciclo até finalizar a cena.</p>
        <p>Não exige muitas explicações, pois é o método mais tradicional que os sistemas D20 disponibilizam.</p>
        <warning>
          A definição <titalic>Jogador CONTRA Mestre</titalic> pode parecer imprópria, mas a partir do ideal de que o Mestre é o suprassumo do contexto, deu-se a característica do componente.
        </warning>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Pontos de Contexto</tsub>
        <p>Por cada boa interpretação, onde o critério é definido pelo Mestre, o jogador em destaque ganha 1 ponto de contexto.</p>
        <p>Os jogadores podem gastar pontos de contexto para interferir na existência da cena, por exemplo, adicionar um recurso que não foi descrito pelo mestre.</p>
        <warning>
          Este tipo de sub-agrupamento exige certa discussão entre os jogadores e o Mestre para entrar em um consenso de utilização.
        </warning>
        <warning>
          Não é recomendado para campanhas com personagens e plot's pré-definidos.
        </warning>
        <tcontainer :soft="true">
          <p>M: Dois humanos, de mesma estatura, entram na taverna...</p>
          <p>J: Mestre, gasto um ponto de contexto para que um desses humanos seja um amigo distante do passado.</p>
          <p>M: Ok... você rapidamente percebe, sem muito esforço, que o humano da direta é um velho conhecido..</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub>Sub-Agrupamento - Interferência de Diálogo</tsub>
        <p>Em uma discussão, o grupo pode optar por sempre utilizar o membro com melhores características para as rolagens de diálogo, assim todos os jogadores do grupo podem participar da discussão sem que sejam penalizados pela falta de lábia de seus personagens.</p>
        <warning>
          Não é recomendado para sistemas com muitas mecânicas de diálogo.
        </warning>
        <tcontainer :soft="true">
          <p>M: Tarlla vem na direção do grupo...</p>
          <p>J: Posso rolar Percepção pelo grupo?</p>
          <p>M: Sim, pode utilizar o valor base do X personagem...</p>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Certos componentes secundários e terciários são restritos à interações Mestre X Jogador.</danger></p>
      <p><danger>A criatividade dos jogadores é limitada dependendo das imposições do Mestre</danger></p>
      <p><warning>O Mestre possui o total controle do universo.</warning></p>
      <p><tbold>Adaptações:</tbold><warning>Componentes terciários de discurso podem dar um pouco mais de voz aos jogadores.</warning></p>
      <p><tbold>Exemplos:</tbold>Toda a narrativa não se distância de RPG's tradicionais:</p>
      <tcontainer :soft="true">
        <p>J: Mestre, posso utilizar a habilidade A para descobrir sons na região?</p>
        <p>M: Pode, lembre que sua classe permite rolar esse tipo de teste com vantagem.</p>
        <p>J: Ok, irei rolar com vantagem... 16 no primeiro dado e 4 no segundo.</p>
        <p>M: Você percebe alguns barulhos distantes do vento vindo da direção B...</p>
      </tcontainer>
    </cmpt>
  </mainpage>
</template>
