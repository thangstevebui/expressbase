import express from 'express';
import { REQUEST_PAYLOAD_TYPE } from '@/core/enum';
import { validateZodMiddleware } from '@/middlewares/validate.middleware';
import { registerSchema } from '@/modules/auth/schemas/register.schema';
import { registerController } from '@/modules/auth/auth.controller';
import asyncHandler from '@/utils/async-handler';

const router = express.Router();

router
  .post(
    '/register',
    validateZodMiddleware({
      schema: registerSchema,
      type: REQUEST_PAYLOAD_TYPE.BODY,
    }),
    asyncHandler(registerController),
  )
  .post('/login', (req, res) => {
    res.send('login');
  });

export default router;
