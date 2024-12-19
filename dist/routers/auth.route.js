import express from "express";
import { REQUEST_PAYLOAD_TYPE } from "../core/enum.js";
import { validateZodMiddleware } from "../middlewares/validate.middleware.js";
import { registerSchema } from "../modules/auth/schemas/register.schema.js";
import { registerController } from "../modules/auth/auth.controller.js";
import asyncHandler from "../utils/async-handler.js";
const router = express.Router();
router
    .post("/register", validateZodMiddleware({
    schema: registerSchema,
    type: REQUEST_PAYLOAD_TYPE.BODY,
}), asyncHandler(registerController))
    .post("/login", (req, res) => {
    res.send("login");
});
export default router;
