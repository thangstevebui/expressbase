import express from 'express';

import authRouter from './auth.route';
import userRouter from './user.route';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('Hello, world! PING');
});

router.use('/auth', authRouter);
router.use('/user', userRouter);

export { router };
