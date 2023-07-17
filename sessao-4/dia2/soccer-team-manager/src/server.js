// src/server.js
const app = require('./app');

// O primeiro parametro aqui é o port(porta): qualquer valor acima de 1023;
// Segundo parâmetro e uma função;
app.listen(3001, () => console.log('server running on port 3001'));