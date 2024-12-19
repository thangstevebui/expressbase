export const errorHandleMiddleware = (err, req, res, next) => {
    const status = err instanceof Error ? err?.status : 500;
    res.status(Number(status)).json(err);
};
