import express, { Express, Response } from 'express';
import bodyParser from 'body-parser';

import cors from './config/cors.config';

import pingRoutes from './routes/ping.route';
import authRoutes from './routes/auth.route';
import draftRoutes from './routes/draft.route';
//const authMiddleware = require("./middleware/auth");

// init app
const app: Express = express();

// cors
app.use(cors);

// request payload
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/api', [
  pingRoutes,
  authRoutes,
  draftRoutes,
]);

// 404
app.use((_, res: Response) => {
  return res.status(404).send('Not Found.');
});

export default app;
