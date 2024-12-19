import { StatusCodes } from './http-status-codes';

export interface ICoreReturn<T = any> {
  status: StatusCodes;
  error?: boolean | string;
  message?: string | string[];
  data: T;
}

export interface ErrorCore extends Error {
  status?: StatusCodes;
  error: boolean;
  message: string;
  data?: Object;

  cause?: unknown;
}
