import express from 'express';
import morgan from 'morgan';

import { api, system, register, kingdom, login } from './routes';
import logger from './logger';
import errorHandler from './middlewares/error-handler';

const app = express();

app.use(morgan('combined', { stream: logger.stream }));

app.use('/api', api);
app.use('/login', login);
app.use('/system', system);
app.use('/register', register);
app.use('/kingdom', kingdom);

app.use(errorHandler);

export default app;
