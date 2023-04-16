import express, { Express } from 'express';
import configExpress from './config/express';
import routes from './routes';

const app: Express = express();
const PORT = process.env.PORT || 8000;

configExpress(app);

routes(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
