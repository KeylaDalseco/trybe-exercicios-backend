// Todas as atividades desse modulo estão no repositório https://github.com/tryber/trybecar. Aqui usamos o branch 1-begin

// Exercício 1
// Qual é a importância da arquitetura de software no desenvolvimento de um sistema?
// Exercício 2
// Quais são os principais objetivos da arquitetura de software?

const resposta1e2 = 'A arquitetura é importante para termos organização do nosso código, principalmente quando a estrutura do código pode crescer muito. Qualquer pessoa desenvolvedora, como jr ou pleno/senior conseguirá entender como está estruturado aquele código e terá facilidade para implementar funções ou outros códigos, além de definir a estrutura básica do software, como seus componentes interagem entre si e garante que o sistema seja escalável, seguro, robusto e tenha boa performance.'

// Exercício 3
// Quais são os possíveis desafios ao realizar alterações na arquitetura de um sistema que já está em produção?

const resposta3 = 'Você pode encontrar dificuldades para implementar algumas funções ou até trocar o banco de dados utilizado, pois podem haver conflitos que podem atrapalhar o funcionamento do sistema, erros de compatibilidade de componentes.';


// Exercício 4
// O que é a camada de model na arquitetura em camadas de software?

const resposta4 = 'A camada de model é responsável por armazenar, alterar e recuperar os dados do sistema. Ela é a camada mais próxima do banco de dados e é responsável por realizar as operações de CRUD (Create, Read, Update e Delete) no banco de dados.'


// 🚀 Exercício 5
// Crie a função na camada de model responsável por deletar uma pessoa passageira.
// Implemente a rota DELETE /passenger/:id para deletar uma pessoa passageira. Ao remover deve retornar o status HTTP 204.
// Utilize a partir da branch 1-live-lecture do repositório do Trybecar para realizar os exercícios.

// meu model:
const remove = async (id) => {
  const result = await connection.execute('DELETE FROM passengers WHERE id = ?', [id]);
  return result;
};

// minha rota:
app.delete('/passengers/:id', async (req, res) => {
  const { id } = req.params;
  await passengerModel.remove(id);
  return res.status(204).end();
});

