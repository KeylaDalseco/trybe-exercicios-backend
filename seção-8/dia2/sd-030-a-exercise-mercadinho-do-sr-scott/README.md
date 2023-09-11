# Boas vindas ao repositório de exercício Mercadinho do Sr. Scott

Para realizar o exercício, atente a cada passo descrito a seguir. Se tiver qualquer dúvida, nos envie uma mensagem por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento de seu exercício a partir deste repositório utilizando uma branch específica e um Pull Request para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar seu exercício, você deverá criar um Pull Request neste repositório.

Lembre-se de que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Considere que o Sr. M. Scott esteja abrindo uma lojinha de conveniência que vende comidas e bebidas e que ele tenha contratado você para desenvolver uma aplicação que registra os itens vendidos em seu mercadinho em uma tabela.

Você precisa criar uma prova de conceito que lide com esses dados usando a tipagem do TypeScript e algumas funções básicas antes de M. Scott começar a desenvolver uma API RESTful. Você usará funções genéricas, visto que o Sr. M. Scott já sinalizou que, no futuro, pretende criar novos tipos de itens para seu mercadinho – além de comidas e bebidas.

</details>

# Orientações

<details>
  <summary><strong>🛠 Como começar os exercícios?</strong></summary><br />

Instale todas as dependências com o seguinte comando:

```
npm install
```

Para rodar o eslint, faça:

```
npm run lint
```

</details>

<details>
  <summary><strong>🧪 Execução de testes localmente</strong></summary>

Para rodar os testes de um único exercício, faça:

```bash
npm test <N>
## Em que <N> é o número do exercício.
## Exemplo: npm test 01
```

Para todos os exercícios, faça:

```bash
npm test
```

> Atenção ⚠️: Se você errar as tipagens, é possível que, em vários casos, os testes quebrem antes mesmo de rodarem. Nesses casos, a _action_ do avaliador falhará e você deverá investigá-la ou executar os testes localmente para capturar os erros de tipagem.

<br />
</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o exercício</strong></summary>

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.

**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH30-A&template=betrybe/sd-0x-exercise-mercadinho-do-sr-scott)

<br />
</details>

# Requisitos

</details>

### Exercício 1 – Crie o type `Food`

O Sr. M. Scott quer que todos os itens que são comidas tenham um nome, um preço, um peso e uma unidade de peso (que pode ser _quilogramas_ ou _gramas_). Para isso, é preciso definir um tipo obedecendo às seguintes regras:

- Ter o nome `Food` e ser exportado com a sintaxe export type ...
- Ser criado no arquivo `src/types/Food.ts`.
- Ter os seguintes atributos como obrigatórios:
  - `name`: deve ser uma _string_
  - `price`: deve ser um número
  - `weight`: deve ser um número
  - `weightUnit`: deve aceitar apenas os valores `kg` ou `g`.

---

### Exercício 2 - Crie o type `Drink`

O Sr M. Scott quer que todos os itens que são bebidas tenha um nome, preço, capacidade e unidade de capacidade (que pode ser _litros_ ou _mililitros_). Para isso, precisamos definir um tipo obedecendo as seguintes regras:

- Ter o nome `Drink` e ser exportado com a sintaxe export type ...
- Ser criado no arquivo `src/types/Drink.ts`;
- Ter os seguintes atributos como obrigatórios:
  - `name`: deve ser uma string.
  - `price`: deve ser um número.
  - `capacity`: deve ser um número.
  - `capacityUnit`: deve aceitar apenas os valores `ml` ou `l`.

---

### Exercício 3 – Crie a função `first`

O Sr. M. Scott quer que a aplicação tenha uma funcionalidade capaz de retornar o primeiro item de um array, seja esse array de qualquer tipo de produto. A função deve:

- Ter o nome `first` e ser exportada com a sintaxe `export function ...`.
- Ser criada no arquivo `src/functions.ts`.
- Ter um único parâmetro que seja **um array** do tipo especificado pelo _Generic_.
- Retornar **um objeto** do tipo especificado pelo _Generic_, o primeiro da lista passada por parâmetro.

> ⚠️ Atenção: Ignore o erro de linter recomendando a exportação default da função. Ele irá desaparecer com a implementação dos próximos exercícios.

### Exercício 4 - Crie a função `updateItem`

Como as comidas e as bebidas podem ter seus preços e demais propriedades atualizadas, é preciso desenvolver uma função para isso. A função `updateItem` deve:

- Ter o nome `updateItem` e ser exportada com a sintaxe `export function...`.
- Ser criada no arquivo `src/functions.ts`.
- Ter os seguintes parâmetros, nesta exata ordem:
  1. **um array** do tipo especificado pelo _Generic_.
  2️. **um number** correspondente ao índice contendo o elemento do array a ser alterado.
  3️. **um objeto** do mesmo tipo especificado pelo _Generic_.
- O retorno da função `updateItem` deve ser **um array** do tipo especificado pelo _Generic_, com o item marcado atualizado.
- Se a função receber um índice que não existe, ela deve retornar o array inalterado.

---

### Exercício 5 – Crie o type `CartItem`

Agora, precisamos de uma funcionalidade para criar um carrinho virtual de itens que podem ser tanto comidas quanto bebidas. O item do carrinho será um tipo com somente as informações necessárias para efetivar a compra: as propriedades `nome`, `preço` e `quantidade`. O novo tipo deve:

- Ter o nome `CartItem` e ser exportado com a sintaxe `export type ...`.
- Ser criado no arquivo `src/types/CartItem.ts`.
- Ter os seguintes atributos como obrigatórios:
  - `name`: deve ser uma string.
  - `price`: deve ser um número.
  - `quantity`: deve ser um número.

---

### Exercício 6 – Crie a função `buildCartItem`

Por fim, você precisa de uma função que seja capaz de transformar qualquer item que tenha **nome** e **preço**, como `Food` e `Drink`, em um `CartItem`. A função deve:

> Dica: Utilize _Type Assertion_!

- Se chamar `buildCartItem` e ser exportada com a sintaxe `export function...`.
- Ser criada no arquivo `src/functions.ts`.
- Ter os seguintes parâmetros, nesta ordem:
  1️. `item`: deve ser um objeto do tipo `Food` ou `Drink`.
  2️. `quantity`: deve ser um número.
- Retornar um objeto do tipo `CartItem`.
