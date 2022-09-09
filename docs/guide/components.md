# Componentes

Componentes são módulos únicos e flexíveis que fazem parte do sistema. São definidos por 'tags' que definem o comportamento do componente.

Este modelo possibilita uma melhor abordagem de regras e o quão elas podem afetar diretamente os jogos, permitindo a montagem de sistemas únicos e coerentes.

Os componentes funcionam como uma mera interface, onde o **criador** (quem está construindo o sistema) utilizará os componentes para **gerar conteúdo**.

- Exemplo: O **componente de raça** explicaria como **criar uma raça**, e o **criador** traria o conteúdo **raça humana**. Se o sistema não necessita de raças, ou pelo menos esta denominação, o **componente de raça** pode ser simplesmente descartado.

## Agrupamento

**AutoriaD20** apresenta os componentes separados em três setores necessários para que haja a execução de um sistema completo.

<components-example />

- Componentes primários representam as etapas obrigatórias para conseguir ter um sistema jogável, entre etapas de decisão de game design até a melhor experiência dos jogadores em relação ao cenário.

- Componentes secundários representam o que pode aderir diretamente ao seu sistema, sem interferir em outros componentes.

- Componentes terciários são opcionais e podem depender das escolhas nas necessidades e dos componentes primários e secundários.

## Sub-Agrupamentos

Os Sub-Agrupamentos são definições opcionais dentro do próprio tipo do componente, voltado a trazer abordagens específicas sem interferir no objetivo final do componente.

- Exemplo: Componente de **Perícias** possui os sub-agrupamentos **Perícias por Nivelamento**, que a cada *n* níveis ganha uma perícia adicional e **Perícias por Inicialização**, onde na construção o personagem já ganha *n* perícias e pode ganhar adicionais por escolher outras opções.

- Sub-Agrupamentos não são obrigatórios.

## Estrutura para Criadores

Os Componentes são caracterizados por tag's, sendo elas:

### Requisitos

Quando o componente exige ou restringe a utilização de outros componentes. Requisitos são necessários exclusivamente para componentes que foram criados para servirem de forma auxiliar para outro componente de maior importância.

Por exemplo, um componente secundário pode ter um componente primário como requisito, assim como um componente terciário pode ter requisito de um componente secundário, mas nunca em ordem inversa de hierarquia.

### Tipo

Relacionado a categorização do componente. Todo tipo de componente é único e não pode haver a instanciação, pois o tipo ocupa diretamente um "local" no campo do sistema, e não pode ser sobrecarregado.

Apenas tipos de componentes primários são obrigatórios no sistema. Em suma, utiliza-se ou nenhum ou apenas um componente de mesmo tipo.

### Categoria

A forma como o componente foi montado e seu intuito final. Quanto mais componentes de mesma categoria o sistema possuir, maior harmonia o seu sistema terá, e consequentemente mais genérico.

- Recomendamos que cenários tradicionais, ou seja, que não fujam de propostas comuns de RPG, utilizem bastantes componentes de mesma categoria.

- Recomendamos que cenários únicos utilizam maior diversidade de categorias, permitindo o criador explorar a criatividade do cenário.

### Estilo

Estilo de abordagem, onde os mais tradicionais em **AutoriaD20** são RPG em tempo real ou RPG baseado em turno.

- **AutoriaD20** é essencialmente focado na criação de sistemas D20 para jogos de tabuleiro, mas possui conteúdos para outros tipos de jogos.

### Impacto

Nível de prioridade em relação a outros módulos. O impacto determina o quão o sistema restringe os jogadores na prática.

- Sistema com muitos componentes de alto impacto pode trazer diversas inconstâncias.

- Sistema com muitos componentes de baixo impacto pode trazer ausência de conteúdo.

### Problemáticas

Todos os componentes exigem certo tipo de cuidado, principalmente pelo lado do criador não conseguir entender exatamente o propósito do componente. Devido a isso, essa tag pretende listar todos os possíveis problemas, seja eles imediatos ou futuros, e como lidar com eles da melhor forma possível.

### Exemplos

Demonstrações de como aplicar o módulo na prática.

- Os exemplos são extensos e contextualizados para melhor percepção do criador e entender como o módulo irá possivelmente funcionar em seu cenário.

- Todos os exemplos disponibilizam conteúdo finalizado em utilização já pronta.

### Adaptações

Demonstrações de como manter compatibilidade com módulos específicos. Irá aparecer com frequência em módulos com muitos requisitos necessários.