import { Router } from "express";
import { loginHandlers } from "../handlers/loginHandlers.js";

const loginRouter = Router();

loginRouter.post("/", loginHandlers);

export default loginRouter;
