const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = (req, res, next) => {
/* Buscamos o token no header `Authorization` */
const bearerToken = req.header('Authorization');

const token = extractToken(bearerToken);

/* Caso o token não exista */
if (!token) {
  const err = new Error('Token not found');
  err.statusCode = 401;
  return next(err);
}

/* Realizamos uma tentativa de validar o token */
try {
  const payload = jwt.verify(token, JWT_SECRET);
  req.user = payload;
  return next();
} catch (err) {
  err.statusCode = 401;
  return next(err);
}
};