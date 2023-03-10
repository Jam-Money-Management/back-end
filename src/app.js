import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

import indexRouter from './routes/index';
import { logErrors, clientError, serverError } from './errorHandlers';

import './models/connect';

const app = express();

app.use(
  morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  }),
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors('*'));
app.use(compression());

app.use('/v1', indexRouter);

app.use(logErrors);
app.use(clientError);
app.use(serverError);

export default app;
