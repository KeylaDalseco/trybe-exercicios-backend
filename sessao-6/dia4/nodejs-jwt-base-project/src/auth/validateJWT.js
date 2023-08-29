// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');

const { UserService } = require('../services');

/* Mesma chave privada que usamos para criptografar o token.
   Agora, vamos usá-la para descriptografá-lo.
   Numa aplicação real, essa chave jamais ficaria hardcoded no código assim,
   e muitos menos de forma duplicada, mas aqui só estamos interessados em
   ilustrar seu uso ;) */
const secret = process.env.JWT_SECRET || 'seusecretdetoken';

/* Esta função extrai o token da string "Bearer ..."
   recebida pela requisição do login */
function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = async (req, res, next) => {
  /* Aquele token gerado anteriormente virá na requisição através do
     header Authorization em todas as rotas que queremos que
     sejam autenticadas. */
  const bearerToken = req.header('Authorization');

  /* Caso o token não seja informado, simplesmente retornamos
     o código de status 401 - não autorizado. */
  if (!bearerToken) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  /* Utilizamos a função para extrair o token */
  const token = extractToken(bearerToken);

  try {
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */
    const decoded = jwt.verify(token, secret);
    /*
      A variável decoded será um objeto equivalente ao seguinte:
      {
        data: {
          userId: 1
        },
        iat: 1656616422,
        exp: 1657221222
      }
    */

    /* Caso o token esteja expirado, a própria biblioteca irá retornar um erro,
       por isso não é necessário fazer validação do tempo.
       Caso esteja tudo certo, nós então usamos o serviço de usuário para obter seus dados atualizados */

    const user = await UserService.getByUserId(decoded.data.userId);

    /* Não existe um usuário na nossa base com o id informado no token. */
    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }

    /* O usuário existe! Colocamos ele em um campo no objeto req.
       Dessa forma, o usuário estará disponível para outros middlewares que
       executem em sequência */
    req.user = user;

    /* Por fim, chamamos o próximo middleware que, no nosso caso,
       é a própria callback da rota. */
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};