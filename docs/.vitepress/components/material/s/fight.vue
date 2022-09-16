<template>
  <mainpage>
    <cmpt title="Combate: À Moda da Casa">
      <concept title="Requisitos">
        <badge 
          title="Roleplay: À Moda da Casa" 
          bg="rgba(255,228,209, 1)"
          bg1="rgba(255,228,209, 0.3)"
          bg2="rgba(255,228,209, 0.2)"
          bg3="rgba(255,228,209, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Tipo">
        <badge 
          title="Combate" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
        <badge 
          title="Jogador X Mestre" 
          bg="rgba(135,116,232, 1)"
          bg1="rgba(135,116,232, 0.3)"
          bg2="rgba(135,116,232, 0.2)"
          bg3="rgba(135,116,232, 0.1)"
          text="black" 
        />
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
        <p>O combate determina continuidade em ciclo até o seu fim, o famoso "jogada por turno". Cada rodada é composta por turnos de cada um dos envolvidos.</p>
        <p>O início e a ordem de combate é determinada pelo Mestre(ou por um Sub-Agrupamento).</p>
        <p>Cada personagem possui 6 segundos para realizar ações em sua rodada. Um personagem que possui muitas ações disponíveis em um mesmo turno significa que ele as realiza muito rápido comparado aos outros.</p>
        <p>O fim de um combate termina quando uma das partes fogem, ou desistem, ou são aniquiladas.</p>
        <p>Os jogadores contam com uma lista de Ações que podem realizar durante o seu turno.</p>
        <p>Esta lista de ações é determinada pela criador do sistema, a fim de entregar a experiência desejada.</p>
        <tcontainer :soft="false">
          <h3>Ação: Correr</h3>
          <p>A velocidade de movimento é duas vezes maior até o final do seu turno.</p>
        </tcontainer>
        <p>Os Sub-Agrupamentos deste componente são fortemente recomendados, pois determina a lógica que mais combina com o sistema.</p>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Iniciativa Abrupta" />
        <tbold>Mutualmente Exclusivo com Sub-Agrupamento - Iniciativa Esperada</tbold>
        <p>A Iniciativa acontece anteriormente ao ciclo de rodadas, quando um aliado ou um inimigo realiza uma ação de ataque ou entende-se que a situação está fora de controle. Todos os personagem desatendo ao início do combate, como uma armadilha, por exemplo, recebe uma penalidade inicial determinada pelas regras de rolagem do sistema(desvantagem na primeira ação, -5 no primeiro ataque, etc...).</p>
        <tcontainer :soft="true">
          <p>M: Os bandidos aparecem de assalto, saindo furtivamente da escuridão... todos rolem um teste de Agilidade, por favor...</p>
          <p>...</p>
          <p>J: Mestre, fui o único que falhou...</p>
          <p>M: Ok, receba -5 na Iniciativa, inclusive, podem rolar a Iniciativa...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Iniciativa Esperada" />
        <tbold>Mutualmente Exclusivo com Sub-Agrupamento - Iniciativa Abrupta</tbold>
        <p>A Iniciativa faz parte do combate, onde a ordem de escolhas é intercalada entre um aliado e um inimigo. Em caso de uma luta contra um boss(1x4, 1x5, 1x6...) o boss possui a prioridade de ordem.</p>
        <tcontainer :soft="true">
          <p>M: E começamos o combate! Podem decidir entre si a ordem de combate... no caso Alitha é a primeira, claro...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Ações Delimitadas" />
        <tbold>Mutualmente Exclusivo com Sub-Agrupamento - Ações por Pontuação</tbold>
        <p>O que o personagem pode realizar durante seu turno é denominada Ação, dividida por três tipos: Normal, Bônus e Extra.</p>
        <p>Por padrão, o personagem POSSUI 1 Ação Normal e SE PUDER REALIZAR 1 Ação Bônus.</p>
        <p>Ação Normal é o que o personagem se preocupa a todo momento em realizar durante o turno.</p>
        <p>Ação Bônus é realiza durante a ação normal, aproveitando uma "brecha de tempo".</p>
        <p>Ação Extra são situações específicas que personagens externos podem te conceder.</p>
        <tcontainer :soft="true">
          <p>J: Com minha Ação Principal irei utilizar a ação Atacar, e com minha Ação Bônus posso curar 1d6 de um aliado próximo...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Ações por Pontuação" />
        <tbold>Mutualmente Exclusivo com Sub-Agrupamento - Ações Delimitadas</tbold>
        <p>O que o personagem pode realizar durante seu turno é denominada Ação, possuindo uma pontuação X para utilizar.</p>
        <p>A pontuação depende do personagem (Raça ou Classe, por exemplo).</p>
        <p>Uma ação pode gastar mais de um ponto, dependendo diretamente de sua prioridade.</p>
        <tcontainer :soft="true">
          <p>J: Vou gastar todos os meus pontos de ação, no caso três, para realizar um Ataque Duplo...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Posicionamento Quadrático" />
        <tbold>Mutualmente Exclusivo com Sub-Agrupamento - Posicionamento Hexagonal</tbold>
        <p>Cada quadrado ocupa tamanho X (padrão 5 pés), podendo realizar ações de fronteira nos nove quadrados ao redor.</p>
        <p><warning>A possibilidade de andar na diagonal depende do Mestre (ou o criador do sistema pode especificar como conteúdo bruto). Em geral, não é recomendado.</warning></p>
        <p><warning>Recomendado que os personagens tenham uma movimentação base X por turno (por exemplo, 30 pés - 6 quadrados)</warning></p>
        <tcontainer :soft="true">
          <p>J: Posso movimentar oito quadrados... vou usar minha ação principal para dobrar a movimentação...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Posicionamento Hexagonal" />
        <tbold>Mutualmente Exclusivo com Sub-Agrupamento - Posicionamento Quadrático</tbold>
        <p>Cada hexágono ocupa tamanho X(padrão 5 pés), podendo realizar ações de fronteira nos nove quadrados ao redor.</p>
        <p><info>A movimentação na diagonal é permitida.</info></p>
        <p><warning>Recomendado que os personagens tenham uma movimentação base X por turno (por exemplo, 30 pés - 6 quadrados)</warning></p>
        <tcontainer :soft="true">
          <p>J: Posso movimentar oito hexágonos... vou usar minha ação principal para dobrar a movimentação...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Flanqueamento" />
        <p>Caso algum personagem esteja adjacente a pelo menos dois inimigos, é aplicado efeito negativo ao personagem.</p>
        <tcontainer :soft="true">
          <p>J: Estou Flanqueando Mestre, então meus sete ataques serão realizados com Vantagem...</p>
          <p>M: ...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Retardar Rodada" />
        <p>O jogador pode escolher por adiar seu turno até anteriormente ao início da próxima rodada. Caso mais de um jogador adie seu turno, o primeiro que atrasou continua sendo o última da rodada, em um esquema de pilhagem.</p>
        <p>Isso garante maiores combinações(principalmente da possibilidade de combos) e versatilidade ao jogador.</p>
        <tcontainer :soft="true">
          <p>M: Seu turno, Alla.</p>
          <p>J: Hm... prefiro adiar minha rodada, Mestre.</p>
          <p>M: Ok. Então... Tarlle, é você...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Superioridade Clara" />
        <p>Ao invés do boss contar na ordem de jogada, ele irá intercalar entre as jogadas dos aliados.</p>
        <p><info>Recomendado para lutas em alta escala.</info></p>
        <tcontainer :soft="true">
          <p>M: Tyr joga um raio de energia...</p>
          <p>J: Vou utilizar dois Ataques Rápidos como ação principal...</p>
          <p>M: Tyr realiza uma jogada de Esquiva...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Ação Conjunta" />
        <p>Se o próximo na contagem da rodada também é aliado, ambos podem realizar as ações simultaneamente.</p>
        <p><danger>Não é recomendado ter mais de dois jogadores realizando ações simultâneas pois pode ocorrer confusões.</danger></p>
        <tcontainer :soft="true">
          <p>J1: Use sua ação principal primeiro, e depois eu conjuro uma ação extra pra você...</p>
          <p>J2: Meu item aplica ação bônus para um Aliado, então conseguimos realizar cerca de...</p>
          <p>M: ...</p>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Exaustão" />
        <p>Mecânica adicional que permite os jogadores a realizarem ações melhoradas(por terem habilidades que são aprimoradas a gastar exaustão) ou a testes específicos.</p>
        <p>Exaustão possui uso único e sua recuperação é determinada por X rodadas.</p>
        <tcontainer :soft="true">
          <p>J: Mestre, irei gastar minha Exaustão para realizar uma ação bônus adicional...</p>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Caso os jogadores tiverem muitas ações/recursos para utilizarem em suas rodadas, o tempo real para acabar um turno pode ser consideravelmente alto.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Componentes Terciários podem mudar bruscamente o funcionamento do começo-meio-fim.</warning></p>
      <p><tbold>Exemplos:</tbold><tarticle>
        - Os jogadores e o Mestre concordam quando o combate inicia, considerando o valor de <titalic>Atitude</titalic> para a ordem de rodadas. O combate termina quando uma das partes morre.
      </tarticle></p>
    </cmpt>
  </mainpage>
</template>