import express, { Request, Response } from 'express';
import transactionsRouter from './routers/transactions.router';
import loginRouter from './routers/login.router';
import authMiddleware from './middlewares/auth.middleware';

const app = express();

app.use(express.json());
app.use(loginRouter);
app.use(authMiddleware);
app.use(transactionsRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
