import { REQUEST_PAYLOAD_TYPE } from '@/core/enum';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@/core/http-exception';
import { Request, Response, NextFunction } from 'express';
import { z, Schema } from 'zod';

export const validateZodMiddleware = ({
  schema,
  type,
  payload = {},
}: {
  schema: Schema;
  type: REQUEST_PAYLOAD_TYPE;
  payload?: Object;
}) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      switch (type) {
        case REQUEST_PAYLOAD_TYPE.BODY:
          schema.parse(req.body);
          break;
        case REQUEST_PAYLOAD_TYPE.PARAMS:
          schema.parse(req.params);
          break;
        case REQUEST_PAYLOAD_TYPE.QUERY:
          schema.parse(req.query);
          break;
        case REQUEST_PAYLOAD_TYPE.HEADERS:
          schema.parse(req.headers);
          break;
        case REQUEST_PAYLOAD_TYPE.COOKIES:
          schema.parse(req.cookies);
          break;
        default:
          schema.parse(payload);
      }

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new BadRequestException('Validation failed', error?.issues);
      } else {
        console.log('Error ---->: ', error);
        throw new InternalServerErrorException('server error');
      }
    }
  };
};
