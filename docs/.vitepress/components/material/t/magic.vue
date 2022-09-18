<template>
  <mainpage>
    <cmpt title="Magia: À Moda da Casa">
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
          title="Magia" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
        <badge 
          title="Opcionalidade" 
          bg="rgba(135,116,232, 1)"
          bg1="rgba(135,116,232, 0.3)"
          bg2="rgba(135,116,232, 0.2)"
          bg3="rgba(135,116,232, 0.1)"
          text="black" 
        />
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
        <p>Ao chegar em X nível (ou qualquer outro tipo de marcador), desbloqueia uma lista de magias disponíveis.</p>
        <p>Cada magia possui um título, descrição, como podem ser conjuradas e efeitos específicos.</p>
        <p>Os personagens podem usar qualquer magia da lista.</p>
        <tcontainer :soft="false">
          <h3>Magia: Raio Luminescente</h3>
          <p>Tipo: Foco com duas mãos</p>
          <p>Alvo: Único</p>
          <p>Custo: 1 Turno Completo</p>
          <p>Descrição: O alvo designado realiza um teste de Destreza...</p>
        </tcontainer>
        <tcontainer :soft="false">
          <h3>Classe: Conjurador</h3>
          <ul>
            <li>Nível 1: Receba Lista Inicial do Conjurador</li>
            <li>...</li>
            <li>Nível 5: Receba Lista Intermediário do Conjurador</li>
          </ul>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Slots" />
        <p>Cada lista de magias possui os seu próprio slot's, onde o jogador gasta 1 slot para conjurar magia</p>
        <p>A forma que o jogador recupera os slot's é definida pelo criador do sistema(pois depende da mecânica de recuperação dos recursos).</p>
        <tcontainer :soft="false">
          <h3>Classe: Conjurador</h3>
          <ul>
            <li>Nível 1: Dois slots nvl 1.</li>
            <li>...</li>
            <li>Nível 5: Cinco slots nvl 1 e dois slots nvl 2.</li>
          </ul>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Necessidade de equilíbrio, pois classes conjuradoras terão muitas opções permanentemente á disposição.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Com o componente Condições é possível implementar itens utilizando efeitos.</warning></p>
      <p><tbold>Exemplos:</tbold>
        <tarticle>
          - Cada origem possui um conjunto de itens inicias, que todo habitante que já habitou pelas áreas possui. Além disso, uma lista de itens primários foi disponibilizada para uso geral.
        </tarticle>
      </p>
    </cmpt>
  </mainpage>
</template>