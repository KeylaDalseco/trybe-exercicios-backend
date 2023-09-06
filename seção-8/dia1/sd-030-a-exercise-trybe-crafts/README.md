# Boas-vindas ao repositório de exercícios Trybe Crafts

Nesse exercício, você vai criar uma parte do sistema de uma empresa de produtos personalizados que deseja aumentar as vendas de seu e-commerce. Vamos lá?

Para desenvolver o exercício, você deverá seguir este README. Tenha atenção ao que é pedido e, em caso de dúvida, procure o time de instrução via Slack ou nas mentorias! #vqv 🚀

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary>

Para entregar o seu exercício, você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary>

Suponha que Trybe Crafts seja uma empresa de produtos personalizados que deseja aumentar as vendas de seu e-commerce e que ela tenha contratado você para implementar algumas funções. A Trybe Crafts preza muito pela segurança e qualidade de seus produtos. Por esse motivo, exigiu que você utilizasse tipagens estáticas no código a fim de prevenir bugs e facilitar trabalhos futuros.

</details>

# Orientações

<details>
<summary><strong>🛠 Como começar os exercícios?</strong></summary>

Instale todas as dependências com o seguinte comando:

```bash
npm install
```

Para rodar o eslint, faça o seguinte:

```bash
npm run lint
```

> ***Atenção ⚠️:** Nos arquivos retire as barras (`//`), conforme avançar nos exercícios e iniciar a implementação da função ou variável.

</details>

<details>
<summary><strong>🧪 Como executar os testes localmente?</strong></summary>

Para um único exercício, faça:

```bash
npm test <N>
## Onde <N> é o número do exercício
## Exemplo: npm test 01
```

Para todos os exercícios, faça:

```bash
npm test
```

> **Atenção ⚠️**: Se você errar as tipagens, os testes podem quebrar antes mesmo de rodarem. Nesses casos, a action do avaliador falhará e você deverá investigá-la ou executar os testes localmente para capturar os erros de tipagem.

</details>

<details>
  <summary>🎛 Rodando o linter com <code>npm run lint</code></summary>

  Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática de seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

  Para rodar o `ESLint` em um projeto, basta executar o comando `npm install` dentro do projeto e, depois, `npm run lint`. Se a análise do `ESLint` encontrar problemas em seu código, tais problemas serão mostrados no terminal. Se não houver problema em seu código, nada será impresso no terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o exercício</strong></summary>

  Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o formulário.

  **Leva menos de 3 minutos!**

  [FORMULÁRIO DE AVALIAÇÃO DE EXERCÍCIO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH30-A&template=betrybe/sd-0x-exercise-trybe-crafts)

</details>

# Exercícios

## Exercício 1

Implemente a função `insert` no arquivo `01-insert.ts` e faça a tipagem utilizando `Type Annotation` e considerando que a função deve:

- Receber um parâmetro com o nome do produto do tipo string.
- Retornar um valor do tipo string.
  - Retornar a mensagem: `<productName> adicionado(a) com sucesso!`.

## Exercício 2

Implemente a função `insertProducts` no arquivo `02-insertProducts.ts` e faça a tipagem utilizando `Type Aliases` e considerando que a função deve:

- Receber dois parâmetros – um array de `strings`, que será uma lista de marcas, e um produto, que será um objeto do tipo `Product`, com as propriedades a seguir.

|  Chave   |       Tipo       |
| :------: | :--------------: |
|    id    |      number      |
|   name   |      string      |
|  price   |      number      |
| quantity |      number      |
|  brands  | Array de strings |

> **Atenção ⚠️**: você deve nomear o `Type Alias` como `Product` e exportá-lo separadamente de sua função neste mesmo arquivo para que os testes funcionem.
>
> Exemplo: `export type Product`

- Retornar um valor do tipo string.
- Verificar se as marcas, `brands`, do produto estão no array passado por parâmetro.
  - Se houver, a mensagem retornada deverá ser `<productName> adicionado(a) com o preço de R$ <price>.`. Se o preço for um número decimal, pode ignorar o último zero na mensagem.
  - Se não, a mensagem retornada deverá ser `Seu produto contém marcas indisponíveis.`

## Exercício 3

Implemente a função `findById` no arquivo `03-findById.ts` realizando a tipagem com `Union Type` e considerando que a função deve:

- Receber um parâmetro com o `id` do produto do tipo `number`.
- Retornar um valor do tipo `Product` ou `string`.

  - Caso o `id` seja encontrado no array de produtos, deve ser retornado um valor do tipo `Product` com as informações do produto, conforme apresentado a seguir.

  ```typescript
    {
      id: 2,
      name: 'Caneca',
      price: 19.90,
      quantity: 12
      brands: ['Stanley', 'Camelbak'],
    }
  ```

  - Caso o `id` **não** seja encontrado, deve ser retornado um valor do tipo string com a mensagem `Produto com ID <id> não encontrado.`,  em que `<id>` é o id do produto passado por parâmetro.

> Atenção ⚠️: O array de produtos já está declarado no arquivo `03-findById.ts` como uma constante chamada `products`.

## Exercício 4

Implemente a função `calculateTotalPrice` no arquivo `04-calculateTotalPrice.ts` realizando a tipagem com `Type Aliases` e considerando que a função deve:

- Receber um array de objetos do tipo `Item` como parâmetro. Você deve declará-lo e exportá-lo deste mesmo arquivo para que os testes funcionem. Ele deve ter as seguintes propriedades:

|  Chave   |  Tipo   |
| :------: | :-----: |
| product  | Product |
| quantity | number  |
|  phrase  | string  |
|  brand   | string  |

- Retornar o valor total de todos os itens recebidos como parâmetro.
  - Retornar o tipo `number`, com duas casas decimais.
  - Retornar `0` caso a função receba um array vazio de itens.

> Lembre-se de que o valor total considera o preço e a quantidade de itens.

## Exercício 5

Implemente a função `orderRequest` no arquivo `05-orderRequest.ts` e faça a tipagem utilizando `Type Aliases` e `Union Type` e considerando que a função deve:

- Receber como parâmetro um pedido que será um objeto do tipo `Order`. Você deve declará-lo e exportá-lo deste mesmo arquivo para que os testes funcionem. Ele deve ter as seguintes propriedades:

|     Chave     |              Tipo               |
| :-----------: | :-----------------------------: |
|      id       |             number              |
| customerName  |             string              |
| customerEmail |             string              |
|     items     |         Array de Items          |
|    status     | pendente ou enviado ou entregue |

- Caso algum dos produtos não tenha estoque, deve-se lançar um erro com uma mensagem no formato: `Desculpe, <productName> não está disponível no estoque`. Sendo `<productName>` o nome do primeiro produto da lista que não tem estoque.
  - Caso todos os produtos tenham estoque, a mensagem retornada deve ser: `Olá <customerName>, o seu pedido de ID <id> foi <status>.`. Onde `<customerName>`, `<id>` e `<status>` são informações do pedido passado por parâmetro;
