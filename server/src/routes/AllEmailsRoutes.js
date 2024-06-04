import { Router } from "express";
import { allEmailHandlers } from "../handlers/allEmailsHandlers.js";
const allEmailRouter = Router();

allEmailRouter.get("/", allEmailHandlers);

export default allEmailRouter;
