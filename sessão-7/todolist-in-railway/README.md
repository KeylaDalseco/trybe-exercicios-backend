# TodoList in Railway

Aplicação full stack simples de lista de tarefas utilizada na Masterclass de Deploy com Railway do Curso de Desenvolvimento Full Stack da Trybe.

As instruções para subir a aplicação no Railway estão nas lições da plataforma.

## Bônus - Rodando a aplicação localmente

1. Para rodar a aplicação localmente, é necessário ter um banco de dados MySQL rodando. Caso nenhum esteja ativo, inicie um container MySQL no Docker com o seguinte comando:

    ```sh
    docker run -p 3306:3306 --name mysql_80 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=todolist -d mysql:8.0.32 mysqld
    ```

2. Crie o arquivo `backend/.env` com as variáveis de ambiente necessárias para o backend

    > 💡 Dica: o arquivo `backend/env.example` já vem preenchido com os valores padrão do container gerado com o comando acima, ajuste para a sua instância conforme a necessidade.

3. Instale as dependências de backend, prepare o banco de dados e inicie o backend:

    ```sh
    cd back-end
    npm install
    env $(cat .env) npx sequelize-cli db:create
    env $(cat .env) npx sequelize-cli db:migrate
    env $(cat .env) npx sequelize-cli db:seed:all
    env $(cat .env) npm run dev
    ```

4. Crie o arquivo `frontend/.env` com as variáveis de ambiente necessárias para o frontend

    > 💡 Dica: o arquivo `frontend/env.example` já vem preenchido com os valores padrão.

5. Em um novo terminal, instale as dependências e inicie a aplicação de frontend:

    ```sh
    cd front-end
    npm install
    env $(cat .env) npm start
    ```
