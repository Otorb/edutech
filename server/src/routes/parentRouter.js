import { Router } from "express";
import {
  newParentHandler,
  deleteParentHandler,
  getParentHandler,
  getAllParentHandler,
  changeParentHandler,
} from "../handlers/parentHandlers.js";
const parentsRouter = Router();

parentsRouter.post("/", newParentHandler);
parentsRouter.get("/searchParent/", getParentHandler);
parentsRouter.get("/allParent/", getAllParentHandler);
parentsRouter.put("/changeParent/:id", changeParentHandler);
parentsRouter.delete("/delete/:id", deleteParentHandler);

export default parentsRouter;