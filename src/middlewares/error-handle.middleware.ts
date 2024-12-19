import { ErrorCore } from "@/core/core.interface";
import { NextFunction, Request, Response } from "express";

export const errorHandleMiddleware = (
  err: ErrorCore,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = err instanceof Error ? err?.status : 500;
  res.status(Number(status)).json(err);
};
