<template>
  <mainpage>
    <cmpt title="Equipamento: À Moda da Casa">
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
          title="Equipamento" 
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
          title="Muito Baixo" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        <p>Equipamento: À Moda da Casa considera a ideia do "aventureiro feliz", ou algo do tipo.</p>
        <p>Todos os itens genéricos são auto interpretativos, onde apenas os essenciais(armas, por exemplo) entram em consideração.</p>
        <p><info>Recomendado para sistemas que possuem o foco simplista.</info></p>
        <tcontainer :soft="true">
          <p>J: Mestre, posso usar corda?</p>
          <p>M: Bem, você é um aventureiro... pode.</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Componentes Externos" />
        <p>Para itens essenciais, use outro tipo de componente disponível nesta seção.</p>
        <tcontainer :soft="false">
          <h3>Lanterna Grande</h3>
          <ul>
            <li>Tipo: Duas mãos</li>
            <li>Ao ligar, dispara um rastro de luz em formato cilíndrico com cerca de 4 pés de raio.</li>
          </ul>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>A inexistência de recursos disponíveis ao jogador pode dificultar a interpretação por parte dos jogadores.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Trate tudo o que puder como genérico.</warning></p>
      <p><tbold>Exemplos:</tbold>
        <tarticle>
          - Disponibilizar apenas os itens iniciais, onde o Mestre futuramente pode criar seus próprios itens de looting.
        </tarticle>
      </p>
    </cmpt>
    <cmpt title="Equipamento: Generalizando">
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
          title="Equipamento" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
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
        <p>Todo os itens possuem três características: título, descrição e como utilizá-lo.</p>
        <p><info>Recomendado para cenários que o conteúdo é muito divergente do tradicional mas que não exigia tanto detalhismo.</info></p>
        <tcontainer :soft="false">
          <h3>Lanterna Grande</h3>
          <ul>
            <li>Tipo: Duas mãos</li>
            <li>Ao ligar, dispara um feiche de luz em formato cilíndrico com cerca de 4 pés de raio.</li>
          </ul>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Kit Inicial" />
        <p>Coloque itens diversos em Kit's que os personagens recebem desde o início.</p>
        <tcontainer :soft="false">
          <h3>Kit do Caçador</h3>
          <ul>
            <li>Requisitos: Classe Caçador.</li>
            <li>Itens: Corda Extensa, Armadilha de Urso, ...</li>
          </ul>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Descrições vagas podem dificultar a interpretação por parte dos jogadores.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Com o componente Condições é possível implementar itens utilizando efeitos.</warning></p>
      <p><tbold>Exemplos:</tbold>
        <tarticle>
          - Cada origem possui um conjunto de itens inicias, que todo habitante que já habitou pelas áreas possui. Além disso, uma lista de itens primários foi disponibilizada para uso geral.
        </tarticle>
      </p>
    </cmpt>
  </mainpage>
</template>