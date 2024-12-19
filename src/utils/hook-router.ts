import express, { RouterOptions } from "express";
import asyncHandler from "express-async-handler";

function hookAllRouteMethods(router: any) {
  const methods = [
    "get",
    "post",
    "put",
    "delete",
    "options",
    "head",
    "all",
    "use",
  ]; // all router methods
  methods.forEach((method) => {
    const originalRouterFunc = router[method];
    const hookedRouterMethod = async function (
      path: any,
      ...routeHandlers: any[]
    ) {
      routeHandlers = routeHandlers.map((f) =>
        asyncHandler(function (
          req: any,
          res: any,
          next: (arg0: unknown, arg1: any, arg2: any) => void,
        ) {
          try {
            return f(req, res, next);
          } catch (e) {
            console.log("hahah I caught you =)");
            next(e, req, res); // pass exception to our error handler.
          }
          // sync error handler end
        }),
      );
      originalRouterFunc.apply(router, [path, ...routeHandlers]);
    };
    router[method] = hookedRouterMethod;
  });
}

export function hookRouterCreation() {
  const originalRouterFunc = express.Router;
  express.Router = function (...args: [optional?: RouterOptions]) {
    const router = originalRouterFunc.apply(this, args);
    hookAllRouteMethods(router);
    return router;
  };
}
