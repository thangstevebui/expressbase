import express, { urlencoded, json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import comperssion from 'compression';
import session from 'express-session';

import { router } from './routers';
import { CoreDataSource } from './core/database';
import { errorHandleMiddleware } from './middlewares/error-handle.middleware';

//CONNECT TO DATABASE
CoreDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

const app = express();

app.use(urlencoded({ limit: '10mb', extended: true }));
app.use(json({ limit: '10mb' }));
app.use(cors());
app.use(cookieParser());
app.use(comperssion());

app.use(
  session({
    cookie: { maxAge: 3 * 60 * 60 * 1000 },
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use('/v1/api/', router);

// Global Error handler
app.use(errorHandleMiddleware);
export default app;
