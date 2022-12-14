# Componentes

Os **Componentes** são módulos únicos e flexíveis que define diversos funcionamentos de seu sistema final. Este modelo possibilita uma melhor abordagem de regras e o quão elas podem ou não afetar diretamente o jogo, permitindo a coerência do cenário perante a jogabilidade proposta.

Os componentes funcionam como uma mera interface, onde o **criador** (quem está construindo o sistema) utilizará os componentes para **gerar conteúdo bruto**.

<info>
Exemplo: O Componente Raça explicaria como <u>criar uma raça</u>, e o criador <u>escreveria e definiria</u>, ou seja, <u>criaria o conteúdo bruto</u> Raça Humana. Se o sistema não necessitar de raças, ou pelo menos desta denominação, o Componente Raça não precisa participar do sistema, ou seja, podendo ser simplesmente descartado.
</info>

<danger>
Até o lançamento final de AutoriaD20 (versão 1.0), novos componentes para a escolha serão adicionados na lista de opções.
</danger>

## Agrupamento

Para construir uma hierarquia de componentes concisa e estável, o **AutoriaD20** apresenta os componentes agrupados em três níveis diferentes para que haja a execução de um sistema completo e que não se torne uma tarefa árdua e confusa. 

A seguir, um exemplo de um possível sistema com cada componente separado em seu devido grupo:

<components-example />

- **Componentes Primários** representam as etapas obrigatórias para conseguir ter um sistema jogável, entre etapas de decisão de game-design até a melhor experiência dos jogadores em relação ao cenário.

- **Componentes Secundários** são opcionais e representam o que pode aderir diretamente ao seu sistema, sem interferir em outros componentes.

- **Componentes Terciários** são opcionais e podem ter pré-requisitos dependentes das escolhas dos componentes primários e secundários. Normalmente, são complementos para os Componentes Secundários

## Sub-Agrupamentos

Os Sub-Agrupamentos são definições opcionais dentro do próprio componente, voltado a trazer abordagens específicas sem interferir no objetivo final. Os Sub-Agrupamentos não são obrigatórios mas agregam ao oferecer mais alternativas.

<info>
Exemplo: Componente de <u>Perícias</u> possui o Sub-Agrupamento <u>Perícias por Nivelamento</u>, que a cada nível o personagem recebe uma perícia adicional. Este Sub-Agrupamento possui o pré-requisito <u>Nivelamento: À Moda da Casa</u> OU <u>Nivelamento: Pontuação Acumulativa</u>.
</info>

## Estrutura para Criadores

Os Componentes possuem diversas características que ditam o funcionamento e a sua integração no sistema, sendo elas:

### Requisitos

Quando o componente exige ou restringe a utilização de outros componentes. Requisitos são necessários exclusivamente para componentes que foram criados para servirem de forma adicional para outro componente de maior importância. Por exemplo, um Componente Secundário pode ter um Componente Primário como requisito, assim como um Componente Terciário pode ter requisito de um Componente Secundário.

### Tipo

Relacionado a categorização do componente. Todo tipo de componente é único e não pode haver a instanciação, pois o tipo ocupa diretamente um "local" no campo do sistema, e não pode ser sobrecarregado.

Apenas tipos de componentes primários são obrigatórios no sistema. Em suma, utiliza-se nenhum ou apenas um componente de mesmo tipo.

### Categoria

A forma como o componente foi montado e seu intuito final. Quanto mais componentes de mesma categoria o sistema possuir, maior harmonia o seu sistema terá, e consequentemente mais genérico.

<warning>
Recomendamos que em cenários tradicionais, ou seja, que não fujam de propostas comuns de RPG, utilizem bastantes componentes de mesma categoria.
</warning>

<warning>
Recomendamos que cenários únicos utilizem maior diversidade de categorias, permitindo o criador explorar a criatividade do cenário sem ficar preso nas regras dos próprios componentes.
</warning>

### Estilo

Estilo de abordagem, onde os mais tradicionais em **AutoriaD20** são RPG em tempo real ou RPG baseado em turno.

<info>
AutoriaD20 é essencialmente focado na criação de sistemas D20 para jogos de tabuleiro, mas possui conteúdos para outros estilos de jogos.
</info>

### Impacto

Nível de prioridade em relação a outros módulos. O impacto determina o quão o sistema restringe os jogadores na prática.

<warning>
Sistemas com muitos componentes de Alto Impacto podem acarretar em diversas inconstâncias, enquanto sistemas com muitos componentes de Baixo Impacto podem acarretar em ausência de conteúdo.
</warning>

<warning>
Adicionar um Sub-Agrupamento é o mesmo que adicionar mais regras, ou seja, os Sub-Agrupamentos afetam no Impacto.
</warning>

### Problemáticas

Todos os componentes exigem certo tipo de cuidado, principalmente pelo lado do criador de talvez não conseguir entender exatamente o propósito do componente. Devido a isso, esse tópico pretende sempre listar os problemas mais comuns, seja eles de cunho imediato ou futuro.

### Exemplos

Demonstrações de como aplicar o módulo na prática. Os exemplos são extensos e contextualizados para melhor percepção do criador e entender como o módulo irá possivelmente funcionar em seu cenário.

<info>
Todos os exemplos disponibilizam um conteúdo finalizado em utilização já pronta para facilitar a interpretação por parte do criador.
</info>

### Adaptações

Demonstrações de como manter a compatibilidade com outros módulos.

<warning>
Aparecerá com frequência em módulos com muitos requisitos obrigatórios.
</warning>