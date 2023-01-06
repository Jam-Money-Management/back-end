import debug from 'debug';
import '../models/connect';

import { Messages, User } from '../models';

const logger = debug('dev');

const messageData = [
  { name: 'orji', message: 'second message' },
  { name: 'chidimo', message: 'first message' },
];

const userData = [
  {
    username: 'test_username',
    email: 'test_email@gmail.com',
    password: 'test_password',
  },
];

export const createData = async () =>
  new Promise((resolve) => {
    const messageStop = messageData.length;

    messageData.forEach(async (d, index) => {
      const { name, message } = d;
      const m = new Messages({ name, message });
      try {
        await m.save();
      } catch (err) {
        logger(`error: ${err.message}`);
      }

      if (index + 1 === messageStop) resolve();
    });
  });

export const deleteData = async () =>
  new Promise((resolve) => {
    const messageStop = messageData.length;
    messageData.forEach(async (d, index) => {
      const { name } = d;
      try {
        await Messages.deleteOne({ name });
      } catch (err) {
        logger(`error: ${err.message}`);
      }

      if (index + 1 === messageStop) resolve();
    });

    const userStop = userData.length;
    userData.forEach(async (d, index) => {
      const { email } = d;
      try {
        await User.deleteOne({ email });
      } catch (err) {
        logger(`error: ${err.message}`);
      }

      if (index + 1 === userStop) resolve();
    });
  });
