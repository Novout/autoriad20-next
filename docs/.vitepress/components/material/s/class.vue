<template>
  <mainpage>
    <cmpt title="Classe: À Moda da Casa">
      <concept title="Requisitos">
        <badge 
          title="Nivelamento: À Moda da Casa" 
          bg="rgba(255,228,209, 1)"
          bg1="rgba(255,228,209, 0.3)"
          bg2="rgba(255,228,209, 0.2)"
          bg3="rgba(255,228,209, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Tipo">
        <badge 
          title="Classe" 
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
          title="Muito Alto" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        <p>Cada ser-vivo-relevante possui determinada classe, ganhando habilidades únicas (não-customizáveis) por escalabilidade. Toda ficha de classe irá conter inicialmente uma tabela com os bônus por nível, segundamente características permanentes de classe e terceiramente a descrição de cada habilidade ganha.</p>
        <p>Este componente oferece diversos Sub-Atributos para tornar a ficha de classe mais atrativa e menos rígida.</p>
        <info>
          <p>Recomendado se deseja aplicar a experiência tradicional de um RPG, onde cada nível o jogador ganha uma ou mais possibilidades de jogo.</p>
        </info>
        <tcontainer :soft="false">
          <h3>Lutador</h3>
          <ul>
            <li>Nível 1: Ganha passivamente +3 na Defesa contra Ataques Corpo-A-Corpo</li>
            <li>Nível 1: Ganha vantagem em todas as rolagens ao duelar. Perde os efeitos se você ou o inimigo receberem qualquer tipo de ação externa.</li>
            <li>Nível 2: ...</li>
          </ul>
          //...
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Vitalidade Escalar" />
        <tbold>Exclusivo de Vitalidade: À Moda da Casa</tbold>
        <p>A classe recebe por cada nível 1dX valor de vitalidade. O valor é determinado pelo tipo de componente escolhido em Vitalidade.</p>
        <tcontainer :soft="false">
          <h3>Lutador</h3>
          <ul>
            <li>Vida: Inicialmente 12, recebendo 1d8 por nível de classe.</li>
            <li>...</li>
          </ul>
          //...
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Terceirizando" />
        <p>Possibilita anexar componentes terciários nas definições da classe. Em suma, todo componente terciário que possuir <titalic>Conteúdo Dependente</titalic> como <titalic>Categoria</titalic> está disponível para utilização.</p>
        <tcontainer :soft="false">
          <h3>Lutador</h3>
          <ul>
            <li>Talentos: Escolha entre Inabalável, Duelista Assíduo e Resiliência Intrínseca.</li>
            <li>Perícias: Escolha duas entre Percepção, Liderança, Intuição e Atletismo.</li>
            <li>Equipamentos: 1 kit de Lutador Completo.</li>
            <li>...</li>
          </ul>
          //...
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Multiclasse" />
        <p>Permite os jogadores utilizar duas classes simultaneamente, onde o nível do personagem é separado do nível da classe.</p>
        <p><warning>Utilizando este componente, determina que os níveis devem aplicar bônus significantes para manter a harmonia do balanceamento.</warning></p>
        <p><danger>Não é recomendado para sistemas que não utilizam o componente <titalic>Combate</titalic>.</danger></p>
        <tcontainer :soft="true">
          <h3>Skyria</h3>
          <ul>
            <li>Vida: 31/42</li>
            <li>Conjurador Nvl 5 / Lutador Nvl 3 </li>
            <li>...</li>
          </ul>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Exige um certo escopo da aplicabilidade do conceito de classe. Recomendamos que escolha os sub-atributos depois de definir outros componentes secundários e terciários.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Diversos componentes podem ser anexados na classe e tem uma estrutura preparada para isso, não tenha medo de acrescentar conteúdo.</warning></p>
      <p><tbold>Exemplos:</tbold><tarticle>
        <tarticle>Em seguida uma representação fiel contendo diversos Sub-Agrupamentos.</tarticle>
        <tcontainer :soft="false">
          <h3>Lutador</h3>
          <ul>
            <li>Vida: Inicialmente 12, recebendo 1d8 por nível de classe.</li>
            <li>Talentos: Escolha entre Inabalável, Duelista Assíduo e Resiliência Intrínseca.</li>
            <li>Perícias: Escolha duas entre Percepção, Liderança, Intuição e Atletismo.</li>
            <li>Equipamentos: 1 kit de Lutador Completo.</li>
          </ul>
          
          <ul>
            <li>Nível 1: Ganha passivamente +3 na Defesa contra Ataques Corpo-A-Corpo</li>
            <li>Nível 1: Ganha vantagem em todas as rolagens ao duelar. Perde os efeitos se você ou o inimigo receberem qualquer tipo de ação externa.</li>
            <li>Nível 2: ...</li>
          </ul>
        </tcontainer>
      </tarticle></p>
    </cmpt>
    <cmpt title="Classe: Pontuação Acumulativa">
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
          title="Classe" 
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
        <p>Utilize se considerar relevante a necessidade de aplicar "profissões" para os personagens.</p>
        <tcontainer :soft="false">
          <h3>Classe: Caçador</h3>
          <ul>
            <li>1-1: Arquétipo: Caçador da Sombra</li>
            <li>1-2-1: Ganhe o dobro do valor da Iniciativa caso esteja Camuflado.</li>
            <li>2-1: Arquétipo: Caçador Selvagem</li>
            <li>3-1: Arquétipo: Mago-Caçador</li>
            <li>...</li>
          </ul>
          //...
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Padronizando a Lógica" />
        <p>Determine bônus específicos por cada x valor na árvore. Por exemplo, todo terceiro nível de uma árvore(*-3-*) dá bônus na vida máxima.</p>
        <p>Recomendável para sistemas que exige padronização de recursos, onde esse agrupamento consegue facilitar o equilíbrio de habilidades.</p>
        <tcontainer :soft="false">
          <h3>Classe: Caçador</h3>
          <ul>
            <li>...</li>
            <li>1-3: Ganhe +2 pontos de atributo para distribuir da forma que desejar.</li>
            <li>...</li>
          </ul>
          //...
          <h3>Classe: Inventor</h3>
          <ul>
            <li>...</li>
            <li>1-3: Ganhe +2 pontos de atributo para distribuir da forma que desejar.</li>
            <li>...</li>
          </ul>
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Terceirizando" />
        <p>Possibilita anexar componentes terciários nas definições de cada módulo na árvore de escolhas. Em suma, todo componente terciário que possuir <titalic>Conteúdo Dependente</titalic> como <titalic>Categoria</titalic> está disponível para utilização.</p>
        <tcontainer :soft="false">
          <h3>Classe: Bruxo</h3>
          <ul>
            <li>...</li>
            <li>1-3-2: Ganhe a perícia História.</li>
            <li>...</li>
          </ul>
          //...
        </tcontainer>
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Multiclasse" />
        <p>Permite os jogadores utilizar duas classes simultaneamente, escolhendo em qual árvore utilizará seus pontos.</p>
        <p><warning>Utilizando este componente, determina que os níveis devem aplicar bônus significantes para manter a harmonia do balanceamento.</warning></p>
        <p><danger>Não é recomendado para sistemas que não utilizam o componente <titalic>Combate</titalic>.</danger></p>
        <tcontainer :soft="true">
          <h3>Leto</h3>
          <ul>
            <li>Vida: 50/57</li>
            <li>Bruxo 7 Pts / Lutador 2 Pts </li>
            <li>...</li>
          </ul>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Exige um certo escopo da aplicabilidade do conceito de classe. Recomendamos que escolha os sub-atributos depois de definir outros componentes secundários e terciários.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Nada impede de criar requisitos para a escolha de módulos, inclusive utilizar recurso de outros componentes.</warning></p>
      <p><tbold>Exemplos:</tbold><tarticle>
        <tarticle>- Geto, Inventor Nvl 3, possui três pontos no Arquétipo: Mecanização, sendo eles 2-1, 2-2-1 e 2-2-2.</tarticle>
      </tarticle></p>
    </cmpt>
  </mainpage>
</template>
