<template>
  <mainpage>
    <cmpt title="Padronização: À Moda da Casa">
      <concept title="Requisitos">
        <badge 
          title="Nivelamento: À Moda da Casa OU Nivelamento: Pontuação Acumulativa" 
          bg="rgba(255,228,209, 1)"
          bg1="rgba(255,228,209, 0.3)"
          bg2="rgba(255,228,209, 0.2)"
          bg3="rgba(255,228,209, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Tipo">
        <badge 
          title="Padronização" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
         <badge 
          title="Padronização Centralizada" 
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
        A padronização irá centralizar em um único atributo. Ele irá ditar os componentes secundários (habilidades, talentos, bônus de classe e raça...). 
        <p>Estes atributos podem ter um ou mais valores, onde o jogador na etapa de criação do personagem distribui seus pontos para os recursos de maior importância e impacto para o personagem final.</p>
        <p><info>Em D&D isto também é chamado de <titalic>Atributo</titalic>, mas deixamos aqui a mecânica de Proficiência e de Perícias como Sub-Agrupamento.</info></p>
        <tcontainer :soft="true">
          <p>Armadura do Aventureiro: O valor do atributo Resiliência é dobrado se estiver em...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Valor por Modificadores" />
        <tbold>Mutualmente Exclusivo com Sub-Agrupamento - Valor Bruto</tbold>
        <p>A base de equilíbrio de cada sub-recurso é 10, onde a cada dois a mais aplica +1 no Modificador e menos dois aplica -1 no Modificador.</p>
        <p>Os modificadores são a base para a gerar recurso, onde a pontuação é distribuída apenas inicialmente.</p>
        <tcontainer :soft="false">
          <h3>Recursos</h3>
          <ul>
            <li>Força: -2</li>
            <li>Agilidade: -1</li>
            <li>Defesa: +1</li>
            <li>Vida: +2</li>
            <li>Conhecimento: +4</li>
          </ul>
        </tcontainer>
      </lines>
      <lines>
        <tsub title=" Sub-Agrupamento - Valor Bruto" />
        <tbold>Mutualmente Exclusivo com Sub-Agrupamento - Valor por Modificadores</tbold>
        <p>O personagem inicia com 0, onde cada valor adicional implica em um bônus adicional.</p>
        <p><warning> Ao utilizar este Sub-Agrupamento com valores inicializados, é recomendado que o personagem inicie com -1.</warning></p>
        <tcontainer :soft="false">
          <h3>Equipamento: Arpão de Tjkat</h3>
          <ul>
            <li>Força 0: Nenhum bônus</li>
            <li>Força 1: Adicione 1d4 do seu tipo de dano primário.</li>
            <li>Força 2: Inflige a condição Desorientado por dois turnos no alvo em caso de acerto crítico.</li>
            <li>...</li>
          </ul>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Bônus de Proficiência" />
        <p>O bônus de proficiência será aplicado em tudo que possuir proficiência, desde a valores base a até Vantagem em rolagens. O valor do bônus é escalável, sendo os valores determinados pelo criador do sistema.</p>
        <tcontainer :soft="true">
          <p>J: ... meu dado de ataque é 1d20 + 2 de Força + 3 da Proficiência...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Recurso Específico" />
        <p>Recursos de componentes (itens, classes, raça, etc...) pode dar valor de recurso baseado em condições, como biomas, inimigos de determinada raça no combate, horário do dia, etc...</p>
        <p><danger>Não é recomendado utilizar com muitos componentes que cedem bônus, pois pode desbalancear totalmente determinadas ações individuais.</danger></p>
        <tcontainer :soft="true">
          <p>J: ... esse Teste de Força é com +2 devido ao Ambiente Difícil, totalizando +6...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Perícias" />
        <p>Perícias são um sub-categoria dos Atributos, onde cada uma delas é referenciada a um único atributo e é primariamente utilizada para testes.</p>
        <tcontainer :soft="true">
          <p>M: Realize um teste de Novo Mundo, sendo 1d20 mais o seu Modificador de Conhecimento...</p>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Falta de diversidade de conteúdo, pois obriga ao jogador a escolher o recurso que claramente é o melhor para a combinação final de ficha, punindo jogadores caso não siga o padrão.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Nada te impede de utilizar o mesmo recurso de D&D, no caso os atributos.</warning></p>
      <tbold>Exemplos:</tbold><tarticle>Chamar o recurso de <titalic>Poderes</titalic>, dividindo por <titalic>Mágico, Físico e Resistência</titalic>, onde o jogador pode distribuir 10 pontos entre os três poderes. Cada ponto em poder determina +1 em rolagens do poder. Outros recursos podem somar ao valor final dos poderes.</tarticle>
    </cmpt>
  </mainpage>
</template>