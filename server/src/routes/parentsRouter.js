import { Router } from "express";
import {
  newParentHandler,
  ChangePasswordHandler,
  getParentHandler,
  getAllParentsHandler,
} from "../handlers/parentsHandlers.js";

const parentsRouter = Router();

parentsRouter.post("/", newParentHandler);
parentsRouter.put("/changePassword/", ChangePasswordHandler);
parentsRouter.get("/search/:id", getParentHandler);
parentsRouter.get("/searchAll/", getAllParentsHandler);

export default parentsRouter;
