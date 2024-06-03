import { Router } from "express";
import { authGoogleHandlers } from "../handlers/authGoogleHandlers.js";
const googleRouter = Router();
googleRouter.post("/", authGoogleHandlers);

export default googleRouter;
//http://localhost:3001/auth/google
