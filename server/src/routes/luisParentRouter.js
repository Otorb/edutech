import { Router } from "express";
import {
  newParentHandler,
  deleteParentHandler,
  getParentHandler,
  getAllParentHandler,
  changeParentHandler,

} from "../handlers/parentHandlers.js";
import {editarusuario} from '../controllers/parentsControllers.js'
const parentsRouter = Router();

parentsRouter.post("/", newParentHandler);
parentsRouter.get("/searchParent/", getParentHandler);
parentsRouter.get("/allParent/", getAllParentHandler);
parentsRouter.put("/changeParent/:id", changeParentHandler);
parentsRouter.put("/:id", editarusuario);
parentsRouter.delete("/delete/:id", deleteParentHandler);

export default parentsRouter;