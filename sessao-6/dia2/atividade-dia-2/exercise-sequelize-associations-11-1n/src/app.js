const bodyParser = require('body-parser');
const express = require('express');
const controllersAccounts = require('./controllers/accounts.controller');
const controllerComments = require('./controllers/comments.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/accounts', controllersAccounts.saveAccountAndProfile);
app.get('/accounts-v2/:id', controllersAccounts.getById);
app.get('/accounts/:id', controllersAccounts.getAccountById);
app.get('/accounts/:id/comments', controllerComments.getCommentsByAccountId);

module.exports = app;
