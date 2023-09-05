const express = require('express');
const generateToken = require('./utils/cripto');
const auth = require('./middleware/autorization');

const { 
  name, validPrice, validDescription,
  validCreatedAt, validRating, validDifficulty,
  validData} = require('./middleware/validacao')

const app = express();

app.use(express.json());

app.post('/activities',
  auth,
  name,
  validPrice,
  validDescription,
  validCreatedAt,
  validRating,
  validDifficulty,
  (req, res) => {
res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
});

app.post('/signup', validData, (_req, res) => {
  const token = generateToken();

  res.status(200).json({ token });
});

module.exports = app;