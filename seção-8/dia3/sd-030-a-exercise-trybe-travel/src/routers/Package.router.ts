import { Router } from 'express';
import packageController from '../controllers/package.controller';

const packageRouter = Router();

packageRouter.patch('/packages/:id', packageController.update);
packageRouter.delete('/packages/:id', packageController.remove);

export default packageRouter;