import express from "express";
import asyncHandler from "express-async-handler";
function hookAllRouteMethods(router) {
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
        const hookedRouterMethod = async function (path, ...routeHandlers) {
            routeHandlers = routeHandlers.map((f) => asyncHandler(function (req, res, next) {
                try {
                    return f(req, res, next);
                }
                catch (e) {
                    console.log("hahah I caught you =)");
                    next(e, req, res); // pass exception to our error handler.
                }
                // sync error handler end
            }));
            originalRouterFunc.apply(router, [path, ...routeHandlers]);
        };
        router[method] = hookedRouterMethod;
    });
}
export function hookRouterCreation() {
    const originalRouterFunc = express.Router;
    express.Router = function (...args) {
        const router = originalRouterFunc.apply(this, args);
        hookAllRouteMethods(router);
        return router;
    };
}
