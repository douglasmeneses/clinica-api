import { Router } from 'express';
import secretarioRoutes from './secretarioRoutes';
import pacienteRoutes from './pacienteRoutes';
import medicoRoutes from './medicoRoutes';
import consultaRoutes from './consultaRoutes';

const routes = Router();

routes.use(secretarioRoutes);
routes.use(pacienteRoutes);
routes.use(medicoRoutes);
routes.use(consultaRoutes);

export default routes;