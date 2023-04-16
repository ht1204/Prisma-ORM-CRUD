import { Application } from "express";

import healthcheck_routes from './api/routes/healthcheck.routes';
import user_routes from './api/routes/user.routes';

const routes = (app: Application): void => {
    app.use('/api/healthcheck', healthcheck_routes);
    app.use('/api/users', user_routes)
}

export default routes;
