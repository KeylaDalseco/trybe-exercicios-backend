# Boas-vindas ao repositório de exercícios Trybe Travel

Nesse exercício, vamos criar uma API que gerencie o sistema de uma empresa de turismo. Ela oferece diferentes pacotes de viagem para diferentes destinos. Vamos lá?

Para desenvolver o exercício, você deverá seguir este README. Atente-se para aquilo é pedido e, em caso de dúvida, procure o time de instrução via _Slack_ ou nas mentorias!

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

Hoje, o exercício é criar uma API responsável pela gestão de uma agência de viagens. Utilizaremos o ORM Sequelize para gerir o banco de dados e seus relacionamentos e implementaremos nossa API RESTful utilizando a arquitetura em camadas MSC, com TypeScript. Também criaremos rotas cujo acesso é protegido por autenticação com JWT.

</details>

# Orientações

<details>
  <summary><strong>🛠 Como começar os exercícios?</strong></summary><br />

Nesse exercício, a API deve oferecer diferentes pacotes de viagem com duração mínima de 3 dias, saindo de Fortaleza para vários destinos. O sistema tem bastante potencial para crescer futuramente com a criação, por exemplo, de relacionamentos com clientes e reservas.

Este repositório já contém as dependências abaixo no `package.json`.

- Express;
- Nodemon;
- Sequelize;
- Mysql2;
- Sequelize-cli;
- jsonwebtoken.

Além disso, o exercício já vem com a estrutura básica do Sequelize configurada, portanto, **não será necessário inicializar ou criar _migrations_ ou _seeders_ para as tabelas**, pois elas já estão feitas.

O projeto já possui um _script_ `db:reset` que recria o banco do zero sempre que for necessário. Esse comando vai criar respectivamente, a `database`, as `tables` e, em seguida, inserir dados nas tabelas. As tabelas criadas são: _packages_ e _users_.

Para que a aplicação reconheça a importação dos módulos das dependências do projeto, instale-as utilizando o comando:

```bash
npm i
```

Para executar a aplicação, use o comando abaixo. Dessa forma, o container do banco de dados e da API, estarão funcionando e já reconhecem mudanças do código e recarregam a aplicação manualmente.

```bash
docker-compose up -d
```

> Dica: Em caso de erros com a alocação das portas 3001 (api) ou 3306 (banco) utilize os comandos abaixo:

```bash
killall node # parar instancias de processos node em execução!
docker stop $(docker ps -qa) # Para todos os containers que estiverem em execução!
```

---

Feito isso, os exercícios já podem ser realizados! 🚀

  <br/>
</details>

<details>
  <summary><strong>🐋 Especificações sobre uso do Docker</strong></summary>

**Atenção ⚠️**: Antes de começar, seu `docker-compose` precisa ser o da versão 1.29 ou superior. Veja [aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou na [documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir `1.26.0` por `1.29.2`.

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão;

- Esses serviços vão inicializar um _container_ chamado `trybe_travel` e outro com o nome de `trybe_travel_db`;

- A partir daqui você pode rodar os _containers_ via CLI ou abri-los no VS Code;

  > :information_source: Use o comando `docker exec -it trybe_travel bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- **Atenção ⚠️**: Caso você opte por utilizar o Docker, **todos** os comandos disponíveis no `package.json` (`npm start`, `npm test`, `npm run dev` ...) devem ser executados **dentro** do _container_, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. Não é necessário, neste caso, usar o prefixo `env $(cat .env)`, pois as variáveis de ambiente são definidas a partir dos valores mapeados no arquivo [docker-compose.yml](./docker-compose.yml).

- **Atenção ⚠️**: O **Git** dentro do _container_ não vem configurado com suas credenciais. Faça os _commits_ fora do _container_, ou configure as suas credenciais do Git dentro do _container_.

  <br/>

</details>

<details>
  <summary><strong>🧪 Execução de testes localmente</strong></summary>

- Para rodar os testes de um único exercício, faça:

```bash
npm test <N>
## Exemplo: npm test 01
```

- Se for para todos os exercícios, faça isso:

```bash
npm test
```

<br />
</details>

<details>
  <summary><strong>🗣 Nos dê _feedbacks_ sobre o exercício</strong></summary>

- Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.

- **Leva menos de 3 minutos!**

- [Formulário de Avaliação de Projeto](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH30-A&template=betrybe/sd-0x-exercise-trybe-travel)

<br />
</details>

<details>
  <summary><strong>🎛 Rodando o _linter_ com <code>npm run lint</code></strong></summary><br />

- Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

- Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

- Para rodar o `ESLint` em um projeto, dentro dele execute o comando `npm install` e, depois, o `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, eles serão mostrados no terminal. Se não houver problema, nada será impresso no terminal.

- Você pode também instalar o _plugin_ do `ESLint` no `VSCode`. Para isso, faça o _download_ do [_plugin_](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) `ESLint` e instale-o.

</details>

## Exercícios

### 🚀 Exercício 1

Note que as _migrations_ e _seeders_ já estão criadas e funcionando! Dito isso, crie um _model_ para a tabela de pessoas usuárias, da tabela `users`.

**Atenção ⚠️**: Para que o avaliador funcione corretamente, você deve se atentar para algumas especificações:

- O _model_ deve ser criado no diretório `src/database/models`;
- O arquivo deve se chamar **User.model.ts**;
- O _model_ deve ser definido como `UserModel`;
- O _model_ deve ser exportado como `default`;

É esperado que o _model_ contenha os seguintes campos:

- `email`; deve ser do tipo `STRING`;
- `password`; deve ser do tipo `STRING`;

Além disso, é importante que o modelo obedeça a mais duas regras:

- Deve apontar para a tabela `users`.
- Deve informar ao Sequelize que o modelo não possui as colunas de _timestamps_.

O avaliador consultará os dados da tabela _users_, verificando se ela contém os dados iniciais corretos.

### 🚀 Exercício 2

Note que as _migrations_ e _seeders_ já estão criadas e funcionando! Dito isso, crie um _model_ para a tabela de pacotes turísticos, da tabela `packages`.

**Atenção ⚠️**: Para que o avaliador funcione corretamente, você deve se atentar a algumas especificações:

- O _model_ deve ser criado no diretório `src/database/models`;
- O arquivo deve se chamar **Package.model.ts**;
- O _model_ deve ser definido como `PackageModel`;
- O _model_ deve ser exportado como `default`;

É esperado que o _model_ contenha os seguintes campos:

- `destination`; deve ser do tipo `STRING`;
- `category`; deve ser do tipo `STRING`;
- `price`; deve ser do tipo `DECIMAL`;

Além disso, é importante que o modelo obedeça a mais duas regras:

- Deve apontar para a tabela `packages`.
- Deve informar ao Sequelize que o modelo não possui as colunas de _timestamps_.

O avaliador consultará os dados da tabela _packages_, verificando se ela contém os dados iniciais corretos.

> **Observação 🔎**: O campo `destination` se refere ao destino da viagem, enquanto o campo `category` se refere à categoria de pacote (_basic_, _classic_ ou _premium_).

### 🚀 Exercício 3

Crie um _endpoint_ que atualize os dados de um pacote de viagem. Sua requisição deve retornar o _status_ adequado e os dados do objeto criado.

- O _endpoint_ deve ser do tipo `PATCH` e estar acessível no caminho `/packages/:id`;
- Apenas o pacote com o _id_ presente na URL deve ser atualizado;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "destination": "Natal",
  "category": "premium",
  "price": 900.0
}
```

- Caso o _id_ não exista, o retorno deve exibir um _status 404_ com a mensagem:

```ts
{
  message: "Pacote não encontrado!";
}
```

- Em caso de sucesso, o retorno deve ser um _status 200_ com a mensagem:

```ts
{
  "id": 1
  "destination": "Natal",
  "category": "premium",
  "price": 900.0
}
```

> **De olho na dica 👀**: Para resolver esse exercício, pesquise e descubra como usar a função `update` do Sequelize com TypeScript. Saiba, de antemão, que ela, por uma incompatibilidade com o MySQL, não irá validar a existência do dado a atualizar nem retorná-los atualizados. Você deverá fazer isso manualmente, no serviço, com outras funções do _model_.

> **De olho na dica 👀**: _"package"_ (com letra inicial minúscula) é uma palavra reservada. Se atente a isso para evitar problemas!

### 🚀 Exercício 4

Crie um _endpoint_ que remova um pacote de viagem, a partir de seu _id_.

- O _endpoint_ deve ser do tipo `DELETE` e estar acessível no caminho `/packages/:id`;
- Apenas o pacote com o _id_ presente na URL deve ser deletado;
- Caso o _id_ não exista, o retorno deve exibir um _status 404_ com a mensagem:

```ts
{
  message: "Pacote não encontrado!";
}
```

- Se o produto for deletado com sucesso, nenhuma resposta deve ser retornada, apenas um _status HTTP 204_.

> **De olho na dica 👀**: Para resolver esse exercício, você também precisará pesquisar e descobrir como usar a função `destroy` do Sequelize com TypeScript. Ela funciona de forma similar à `update`, do exercício anterior. Você deverá validar a existência da entidade a deletar antes de deletá-la.

## Exercícios bônus (não testados pelo avaliador)

### Exercício 5

Crie um _endpoint_ para fazer _login_ no _site_ com base em um _e-mail_ e senha.

- O _endpoint_ desenvolvido deve ser do tipo `POST` e estar acessível no caminho `/login`;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "email": "michaelscott@gmail.com",
  "password": "123456"
}
```

- Não deve ser possível fazer _login_ caso os dados enviados na requisição sejam de pessoas usuárias não cadastradas na aplicação. Nesse caso, o retorno deve exibir um _status 400_ com a mensagem:

```ts
{
  message: "Dados inválidos!";
}
```

- Em caso de sucesso, a requisição deve apresentar o _status 200_, e um _token_ deve ser retornado, conforme exibido abaixo:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

- Seu _token_ deve ser gerado a partir da variável de ambiente _JWT_SECRET_, do _payload_ da requisição e não deve conter o atributo `password` em sua construção.

## Exercício 6

Crie um _middleware_ para garantir que o código poderá ser reutilizado em todas as rotas que precisarem de autenticação.

- Se um _token_ não for passado, o resultado retornado deverá ser um _status http 401_ com a mensagem:

```ts
{
  message: "Token não encontrado";
}
```

- Caso o _token_ seja inválido, o resultado retornado deverá ser um _status http 401_ com a mensagem:

```ts
{
  message: "Token inválido ou expirado";
}
```

- Se um _token_ válido for passado, deve chamar um **próximo** _middleware_.

> **De olho na dica 👀**: Os testes automatizados não estão preparados para lidar com _login_, então se você posicionar o `middleware` antes dos _endpoints_ de `packages`, alguns deles irão quebrar. Sua nota neles será computada, mesmo que você deixe de passar neles após fazer isso, mas você pode deixar a autenticação depois dessas rotas para evitar que isso aconteça.

## Exercício 7

Crie um _endpoint_ para listar todas as pessoas cadastradas na aplicação.

- O _endpoint_ deve ser do tipo `GET` e estar acessível no caminho `/users`;
- Os dados das pessoas usuárias não devem ser visualizados por alguém que não esteja devidamente autenticado na aplicação;
- Se um _token_ não for passado, o resultado retornado deverá ser um _status http 401_ com a mensagem:

```ts
{
  message: "Token não encontrado";
}
```

- Caso o _token_ seja inválido, o resultado retornado deverá ser um _status http 401_ com a mensagem:

```ts
{
  message: "Token inválido ou expirado";
}
```

- Em caso de sucesso, a requisição deve apresentar o _status 200_ e um retorno, conforme exibido abaixo:

```json
[
  {
    "id": 1,
    "email": "user1@email.com",
    "password": "chang3m3"
  },
  {
    "id": 2,
    "email": "user2@email.com",
    "password": "chang3m3"
  }
]
```
