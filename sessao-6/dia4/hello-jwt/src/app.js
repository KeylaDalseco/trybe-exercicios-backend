const express = require('express');
const cors = require('cors');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.get('/ping', controllers.ping);
app.post('/login', controllers.login);
app.get('/users/me', middlewares.auth, controllers.me);
app.get('/top-secret',
  middlewares.auth,
  /* Middleware que verifica se a pessoa autenticada é admin */
  middlewares.admin,
  /* Controller do endpoint */
  controllers.topSecret);

app.use(middlewares.error);

module.exports = app;
