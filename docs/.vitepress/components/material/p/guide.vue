<template>
  <mainpage>
    <cmpt title="Guia: À Moda da Casa">
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
          title="Guia" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
        <badge 
          title="Estrutural" 
          bg="rgba(135,116,232, 1)"
          bg1="rgba(135,116,232, 0.3)"
          bg2="rgba(135,116,232, 0.2)"
          bg3="rgba(135,116,232, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Estilo">
        <badge 
          title="Genérico"
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
        Este é o guia tradicional para TTRPG, seguindo uma lógica de construção baseado na experiência do usuário iniciante, primeiramente demonstrando um resumo básico do cenário (se necessário), segundamente ensinando como montar um personagem do começo ao fim, e terceiramente demonstrando o conteúdo por categorias.
      </lines>
      <p><tbold>Cenário(Opcional):</tbold> Explicação geral sobre o cenário. Não recomendamos que utilize muitas páginas para não demonstrar muito conteúdo diretamente para o jogador. Se desejar, crie outro PDF (Livro do Mestre, por exemplo) e situe melhor os detalhes para o Mestre(se tiver) ter mais acesso a conteúdo especificamente do cenário.</p>
      <p><tbold>Introdução:</tbold> Aqui teremos o que é RPG, e como jogar. Se o seu cenário for muito específico, demonstre exemplos de mecânicas e eventos que os jogadores terão ao decorrer da jogatina. Se for um cRPG, descarte esta parte para explicar diretamente na gameplay, usando as outras partes para a criação de um documento exclusivamente para a equipe.</p>
      <p><tbold>Conteúdo:</tbold> Cada módulo secundário terá uma própria seção, seguindo a ordem do que o jogador necessita. Recomendamos</p>
      <p><tbold>Extras:</tbold> Apêndices e Conteúdo Adicional.</p>
      <lines>
        <tsub title="Sub-Agrupamento - Descrição Interativa" />
        <p>Ganhe a atenção do jogador exibindo uma leve demonstração de narrativa, e em seguindo situando o seu impacto no cenário.</p>
        <p>Desta forma o jogador tem uma melhor percepção do que poderá realizar com aquela classe, e se é realmente o que deseja, evitando quebras de expectativa.</p>
        <p>Recomendado para cenários que fogem de RPG's tradicionais.</p>
        <tcontainer :soft="true">
          <h3>Skyro</h3>
          <p>Alarmes foram acionados. Os reforços ao longo da região de Taraph entraram em estado de emergência. Após três dias de buscas incessantes, nada foi determinado a não ser execuções desesperadas e errôneas. Uma grande instabilidade abraçou a corte com a certeza de um traidor no Império. Totalmente equivocados.</p>
          <span>Skyro, o povo desconhecido entre eles mesmos. Possuem o dom da ilusão e da retórica, transformando em um piscar de olhos no que quiserem e como quiserem. Poucos sabem do conhecimento deles, e menos ainda das suas reais aparências.</span>
        </tcontainer>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>Este componente é o mais genérico, devido a isso é o melhor componente para iniciantes construírem seus personagens, mas não para eles consultarem.</danger></p>
      <p><danger>A forma de separar os itens em componentes e em diferentes seções que dependem entre si faz o leitor ficar 'viajando' nas páginas, podendo confundir principalmente quem não está acostumado com o documento.</danger></p>
      <p><danger>Por exemplo, se o jogador ficar em dúvida entre classes conjuradoras, ele terá que consultar diversas vezes as páginas distantes do componente terciário de magia, e isso sem sequer começar a jogar.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>É possível colocar o cenário junto na seção de extras, ou seja, no final e não no começo.</warning></p>
    </cmpt>
    <cmpt title="Guia: Documentação Interna">
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
          title="Guia" 
          bg="rgba(77,255,158, 1)"
          bg1="rgba(77,255,158, 0.3)"
          bg2="rgba(77,255,158, 0.2)"
          bg3="rgba(77,255,158, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Categoria">
        <badge 
          title="Estrutural" 
          bg="rgba(135,116,232, 1)"
          bg1="rgba(135,116,232, 0.3)"
          bg2="rgba(135,116,232, 0.2)"
          bg3="rgba(135,116,232, 0.1)"
          text="black" 
        />
      </concept>
      <concept title="Estilo">
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
          title="Médio" 
          bg="rgba(232,116,132, 1)"
          bg1="rgba(232,116,132, 0.3)"
          bg2="rgba(232,116,132, 0.2)"
          bg3="rgba(232,116,132, 0.1)"
          text="black" 
        />
      </concept>
      <lines>
        Recomendado para jogos cRPG. Demonstre ao jogador uma janela que consigo sempre consultar alguma dúvida sobre as mecânicas ou de raças e classes, por exemplo, sem o que o jogador precise abrir um site ou espere que o jogo apresente conteúdo sucessivamente.
      </lines>
      <lines>
        <tsub title="Sub-Agrupamento - Limitar o Conhecimento" />
        <p>Permita que o jogador veja o conteúdo somente se possuir a devida permissão para isso.</p>
        <info>
          Exemplo: O jogador desbloqueou a planta <titalic>Syufaero</titalic> no Herbário, então agora o jogo permitirá o acesso aos atributos da planta.
        </info>
      </lines>
      <p><tbold>Problemáticas:</tbold><danger>O jogador pode se sentir desconfortado com a quantidade de texto excessivo nas janelas de explicação, o que pode faze-lo desistir de procurar e entender uma mecânica específica.</danger></p>
      <p><tbold>Adaptações:</tbold><warning>Coloque um menu lateral para dividir cada regra ou item em uma categoria única.</warning></p>
    </cmpt>
  </mainpage>
</template>