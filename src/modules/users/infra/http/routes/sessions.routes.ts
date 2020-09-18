import { Router } from 'express';

import SessiosController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessiosController();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
