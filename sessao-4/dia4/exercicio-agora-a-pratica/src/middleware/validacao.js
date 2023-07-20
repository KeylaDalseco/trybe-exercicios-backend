const name = (req, res , next) => {
  const properties = ['name'];
  const propNameExists = properties.every((prop) => prop in req.body);

  if(!propNameExists) {
    return res.status(400).json({ "message": "O campo name é obrigatório" });
  }

  const lengthProp = properties.every((prop) => {
    const value = req.body[prop];
    return value.length >= 5;
  });

  if(!lengthProp) {
    return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" });
  }
  next();
};

const validPrice = (req, res, next) => {
  const { price } = req.body;
  
  if(!price) {
    return res.status(400).json({ "message": "O campo price é obrigatório" });
  }

  if(price.length < 0) {
    return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
  }
  next();
};

const validDescription = (req, res, next) => {
  const { description } = req.body;

  if(!description) {
    res.status(400).json({ "message": "O campo description é obrigatório" });
  }
  if(!description.createdAt) {
    res.status(400).json({ "message": "O campo createdAt é obrigatório" });
  }
  if(!description.rating) {
    res.status(400).json({ "message": "O campo rating é obrigatório" });
  }
  if(!description.difficulty) {
    res.status(400).json({ "message": "O campo difficulty é obrigatório" });
  }
  next();
};

const validCreatedAt = (req, res, next) => {
  const { description: { createdAt } } = req.body;

  if (!createdAt) {
    return res.status(400).json({ message: "A chave 'createdAt' é obrigatória." });
  }

  // utilizando regex conferindo o dia - mes de 1 até 12 - ano com 4 digitos.
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  //quanfo for utilizar, devemos usar o método test informando que o campo deve ter um formato válido.
  if(!isFormatDate.test(createdAt)){
    return res.status(400).json(
      { message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' },
    );
  }
  
  next();
};

const validRating = (req, res, next) => {
  const { description: { rating } } = req.body;

  if (!rating) {
    return res.status(400).json({ message: "A chave 'createdAt' é obrigatória." });
  }

  if(!Number.isInteger(rating) || rating < 1 || rating > 5){
    return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  }
  
  next();
};

const validDifficulty = (req, res, next) => {
  const { description: { difficulty } } = req.body;
  const dificuldade = ['Fácil', 'Médio', 'Difícil'];

  if (!dificuldade.includes(difficulty)) {
    return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }
  
  next();
};

const validData = (req, res, next) => {
  const dados = ['email', 'password', 'firstName', 'phone'];

  const verifyProps = dados.every((dado) => dado in req.body)
  if(!verifyProps) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  next();
};

module.exports = { 
  name,
  validPrice,
  validDescription,
  validCreatedAt,
  validRating,
  validDifficulty,
  validData};