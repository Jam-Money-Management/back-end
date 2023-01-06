import express from 'express';

import { messagesPage, addMessage, signin, signup } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);

indexRouter.post('/signin', signin);
indexRouter.post('/signup', signup);

export default indexRouter;
