// O CONTEÚDO DO DIA 2 ASSIM COMO OS OUTROS ESTARÃO NO DIA 1, POR SER OS MESMOS CÓDIGOS

// EXERCÍCIOS DO DIA 2

// 🚀 Exercício 1: Listar todas as pessoas motoristas que estão cadastradas
// Aqui precisamos seguir alguns passos:

// Criar o model e a função findAll, responsável pelo acesso ao banco de dados em src/models/driver.model.js;
// Adicionar esta nova model no arquivo src/models/index.js;
// Criar o teste de unidade desta nova função em tests/unit/models/driver.model.test.js e seu respectivo mock.
// Na escrita dos testes de unidade, pode utilizar este dados como mock:

// [
//   { id: 1, name: 'Liana Cisneiros' },
//   { id: 2, name: 'Fábio Frazão' },
//   { id: 3, name: 'Anastácia Bicalho' },
//   { id: 4, name: 'Samara Granjeiro' },
//   { id: 5, name: 'Levi Teixeira' },
// ]

const findAll = async () => {
  const [drivers] = await connection.execute('SELECT * FROM trybecardb.drivers');
  // console.log(drivers);
  return camelize(drivers);
};

app.post('/drivers', async (req, res) => {
  const { name } = req.body;
  const driverById = await driverModel.insert({ name });
  res.status(200).json(driverById);
});


// 🚀 Exercício 2: Encontrar uma pessoa motorista por meio do id
// Aqui precisamos seguir alguns passos:

// Criar a função findById, responsável pelo acesso ao banco de dados em src/models/driver.model.js;
// Criar o teste de unidade desta nova função em tests/unit/models/driver.model.test.js e seu respectivo mock.
// Na escrita dos testes de unidade, pode utilizar este dados como mock:

// { id: 4, name: 'Samara Granjeiro' }



app.get('/drivers/:id', async (req, res) => {
  const { id } = req.params;
  const driverById = await driverModel.findById(Number(id));
  res.status(200).json(driverById);
});

const findById = async (id) => {
  const [driverById] = await connection.execute(
    'SELECT * FROM trybecardb.drivers WHERE id = ?',
    [id],
  );
  return camelize(driverById);
};

// 🚀 Exercício 3: Cadastrar uma pessoa motorista
// Aqui precisamos seguir alguns passos:

// Criar a função insert, responsável pelo acesso ao banco de dados em src/models/driver.model.js;
// Criar o teste de unidade desta nova função em tests/unit/models/driver.model.test.js e seu respectivo mock.
// Na escrita dos testes de unidade, pode utilizar este dados como mock:

// { insertId: 6 }
// Aqui o id já tem autoincremento.

app.post('/drivers', async (req, res) => {
  const { name } = req.body;
  const driverById = await driverModel.insert({ name });
  res.status(200).json(driverById);
});

const insert = async (driver) => {
  const columns = getFormattedColumnNames(driver);
  const placeholders = getFormattedPlaceholders(driver);
  const query = `INSERT INTO drivers (${columns}) VALUE (${placeholders});`;
  const [{ insertId }] = await connection.execute(query, [...Object.values(driver)]);
  return insertId;
};