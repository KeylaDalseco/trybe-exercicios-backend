import express, { Request, Response } from 'express';
import packageRouter from './routers/Package.router';

const app = express();

app.use(express.json());
app.use(packageRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
