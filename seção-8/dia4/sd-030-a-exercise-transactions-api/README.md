# Boas-vindas ao repositório de exercícios Transactions API

Nesse exercício, nós vamos criar testes unitários e de integração para uma API que gerencia transações financeiras de diferentes tipos.

Para desenvolver o exercício, você deverá seguir este README. Atente-se para o que é pedido e, em caso de dúvida, procure o time de instrução via _Slack_ ou nas mentorias!

## Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um _pull request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Testes unitários e de integração para uma API que gerencia transações financeiras de diferentes tipos. Vamos utilzar o _setup_ de testes composto pelas ferramentas Mocha, Chai e Sinon para testar os comportamentos de alguns _features_ da nossa API, levando em consideração, inclusive, se as rotas que iremos testar são protegidas ou não por autenticação.

</details>

# Orientações

<details>
  <summary><strong>🛠 Como começar os exercícios?</strong></summary><br />

Nesse exercício, vamos continuar desenvolvendo os testes (unitários e de integração) para a API de transações financeiras cuja implementação já foi apresentada a você. Essa API utiliza Docker, Sequelize e TypeScript e possui a funcionalidade de _login_ e a possibilidade de cadastrar transações financeiras.

Este repositório já contém as dependências abaixo no `package.json`.

- Express;
- Nodemon;
- Sequelize;
- Mysql2;
- Sequelize-cli;
- jsonwebtoken;
- Mocha;
- Chai;
- Sinon.

A implementação das funcionalidades, bem como os testes para a rota de _login_ que foram implementados no conteúdo, já estão prontas neste repositório. Você pode (e deve) usá-los como base para a construção de seus testes. Além disso, os arquivos nos quais você desenvolverá seus testes já estão criados e especificados em cada exercício, prontos para implementação.

Feito isso, os exercícios já podem ser realizados! 🚀

**Atenção ⚠️**: Se precisar espalhar uns `console.log()` na sua aplicação, remova-os depois! A presença deles quebra o avaliador e fará com que ele reprove seus requisitos.

> **Instruções para rodar a aplicação**

1. Instalar as dependências do exercício com `npm install`.
2. _Buildar_ o projeto com `npm run build`.
3. Subir os _containers_ definidos no `docker-compose` com o comando `docker-compose up -d --build`.
4. Abrir o terminal do _container_ criado (`docker exec -it transactions_api bash`).

> **De olho na dica 👀**: Em caso de erros com a alocação das portas 3001 (api) ou 3306 (banco), utilize os comandos abaixo:

```bash
killall node # parar instancias de processos node em execução!
docker stop $(docker ps -qa) # Para todos os containers que estiverem em execução!
```

</details>

<details>
  <summary><strong>🐋 Especificações sobre uso do Docker</strong></summary>

**Atenção ⚠️**: Antes de começar, seu `docker-compose` precisa ser o da versão 1.29 ou superior. Veja [aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir `1.26.0` por `1.29.2`.

> ℹ️ Rode os serviços `app-transactions` e `db` com o comando `docker-compose up -d`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão.

- Esses serviços irão inicializar um _container_ chamado `ex_transactions_api` e outro chamado `ex_transactions_db`.

- A partir daqui você pode rodar os _containers_ via CLI ou abri-lo no VS Code.

  > ℹ️ Use o comando `docker exec -it ex_transactions_api bash`.

- Ele te dará acesso ao terminal interativo do _container_ criado pelo `compose`, que está rodando em segundo plano.

**Atenção ⚠️**: Caso opte por utilizar o Docker, **todos** os comandos disponíveis no `package.json` (`npm start`, `npm test`, `npm run dev` ...) devem ser executados **dentro** do _container_, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. Não é necessário usar o prefixo `env $(cat .env)` neste caso, pois as variáveis de ambiente são definidas a partir dos valores mapeados no arquivo [docker-compose.yml](./docker-compose.yml).

**Atenção ⚠️**: O **Git** dentro do _container_ não vem configurado com suas credenciais. Ou faça os _commits_ fora do _container_, ou configure as suas credenciais do Git dentro do _container_.

</details>

<details>
  <summary><strong>🧪 Execução de testes localmente</strong></summary>

## Seus testes

Para rodar os testes localmente, utilize o seguinte comando:

```bash
npm run test:local
```

Para verificar os testes de cobertura, utilize o seguinte comando:

```bash
npm run test:coverage
```

## Testes do avaliador

Para rodar os testes de um único exercício, faça:

```bash
npm test <N>
## Exemplo: npm test 01
```

Para todos os exercícios, faça:

```bash
npm test
```

<br />
</details>

<details>
  <summary><strong>🗣 Nos dê _feedbacks_ sobre o exercício</strong></summary>

- Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o formulário.

- **Leva menos de 3 minutos!**

- [Formulário de Avaliação do Exercício](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH30-A&template=betrybe/sd-0x-exercise-transactions-api)

</details>

<details>
  <summary><strong>🎛 Rodando o _linter_ com <code>npm run lint</code></strong></summary><br />

- Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

- Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

- Para rodar o `ESLint` em um projeto, dentro dele execute o comando `npm install` e, depois, o `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no terminal. Se não houver problema no seu código, nada será impresso no terminal.

- Você pode também instalar o _plugin_ do `ESLint` no `VSCode`. Para isso, faça o _download_ do [_plugin_](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) `ESLint`e instale-o.

</details>

## Exercícios

### Exercício 1

Crie testes de integração para a rota `/transactions`, do tipo `POST`.

**Atenção ⚠️**: Você deve se atentar para algumas especificações:

- Os testes devem ser desenvolvidos no arquivo `create.test.ts`, que já está criado no caminho `tests/integration/transactions/create.test.ts`.
- Os testes precisam atender os seguintes cenários:
  - Quando a requisição é feita com dados válidos:
    - Deve retornar um _status HTTP_ `201` com uma transação criada.
    - No `it`, o teste deve ter a descrição `deve retornar um status 201 com uma transação criada`.

  - Quando a requisição é feita com dados inválidos:
    - Ao enviar uma requisição com o atributo `name` presente, mas vazio, deve ser retornado um _status HTTP_ `400` com a mensagem `“Name is required”`.
    - No `it`, o teste deve ter a descrição `ao enviar um nome vazio deve retornar um status 400 com uma mensagem de erro`.

> **De olho na dica 👀:** Esse exercício possui mais camadas do que pode aparentar. Se tiver problemas, utilize o _status_ `http` que a requisição estiver retornando para entender o que está acontecendo!

<details>
  <summary>Sua aplicação está retornando `401` e isso está lhe travando? Veja esta dica!</summary>

Qual o significado do _status_ `401`? Ele significa `UNAUTHORIZED`. Seu teste não está criando uma transação porque você não está sendo autenticado! Lembre-se de que, para criar uma transação, a aplicação deve checar seu _token_, para garantir que ele é válido. Mas você não precisa fazer _login_ de verdade, é necessário apenas simular! No caso, não se esqueça de:

- Fazer a requisição com o _header_ no formato correto e contendo uma `token`.
- _Mockar_ as funções que seu _middleware_ de autenticação chama para fazer a checagem.

**De olho na dica 👀**: Se precisar de um lembrete da sintaxe para alguma dessas funções, faça uma pesquisa rápida.

</details>

### Exercício 2

Crie testes unitários para a função `create`, da camada _service_.

- Os testes devem ser desenvolvidos no arquivo `transactions.service.test.ts`, que já está criado no caminho `tests/unit/services/transactions.service.test.ts`.
- Os testes precisam atender os seguintes cenários:

  - Deve ser possível criar transações com sucesso.
    - No `it`, o teste deve ter a descrição: `deve ser possível criar uma transação com sucesso`.

  - Deve retornar um erro se um nome não for enviado.
    - A mensagem de erro deve ser: `"Name is required"` (com letra inicial maiúscula).
    - No `it`, o teste deve ter a descrição: `deve retornar um erro quando um nome não é enviado`.

### Exercício 3

Crie testes unitários para a função `create`, da camada _controller_.

- Os testes devem ser desenvolvidos no arquivo `transactions.controller.test.ts`, que já está criado no caminho `tests/unit/controllers/transactions.controller.test.ts`.

- Os testes precisam atender os seguintes cenários:
  - Deve ser possível criar transações com sucesso.

- No `it`, o teste deve ter a descrição: `deve salvar ao enviar dados válidos`.

  - Deve retornar um erro se um nome não for enviado.
    - A mensagem de erro deve ser: `"Name is required"` (com letra inicial maiúscula).
    - No `it`, o teste deve ter a descrição `deve retornar um erro se enviar um nome inválido`.

> **De olho na dica 👀:**
>
> 1. Confira a implementação dessa função antes de testá-la, para _mockar_ tudo que for necessário!
> 2. Lembre-se de que as funções do _controller_ são assíncronas.
