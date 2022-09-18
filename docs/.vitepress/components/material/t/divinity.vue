<template>
  <mainpage>
    <cmpt title="Divindade: À Moda da Casa">
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
          title="Divindade" 
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
          title="Baixo" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        <p>As divindades são seres não-cognoscentes e vivem no meio dos seres vivos (não divinos).</p>
        <p>O impacto delas (poderes divinos, hierarquia na corte, etc...) dependem diretamente do cenário, e não do sistema.</p>
        <tcontainer :soft="true">
          <p>M: Agora vocês conseguem ver Azerna, uma psiônica nata, desfilando pelas tundras de...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Poderes Divinos" />
        <p>Cada divindade, mesmo no seu estado de ser vivo, possuem poderes.</p>
        <p><info>É recomendado que a divindade tenha uma ficha própria.</info></p>
        <tcontainer :soft="false">
          <h3>Alitha</h3>
          <ul>
            <li>Desintegrar qualquer tipo de matéria prima.</li>
            <li>Condição Voar permanente.</li>
            <li>...</li>
          </ul>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Por mais que tenha baixo impacto no sistema, o seu impacto no cenário é bem alto.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Tratar as Divindades como personagens jogáveis requer conteúdo exclusivo (classe, por exemplo).</warning></p>
      <p><tbold>Exemplos:</tbold>
        <tarticle>
          - O Grupo PRIMA, com os membros Aelit, Vijad e Thortokir, possuem habilidades únicas e se completam na magnitude.
        </tarticle>
      </p>
    </cmpt>
  </mainpage>
</template>