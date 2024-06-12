import { Router } from "express";
import multer from "multer";
import {
  newParentHandler,
  ChangePasswordHandler,
  getParentHandler,
  getAllParentsHandler,
  updateWithImageHandler,
  updateWithoutImageHandler,
} from "../handlers/parentsHandlers.js";

const parentsRouter = Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

parentsRouter.post("/", upload.none(), newParentHandler);
parentsRouter.put("/changePassword/", ChangePasswordHandler);
parentsRouter.get("/search/:id", getParentHandler);
parentsRouter.get("/searchAll/", getAllParentsHandler);

parentsRouter.put(
  "/updateWihtImage/:id",
  upload.array("image", 1),
  updateWithImageHandler
);
parentsRouter.put(
  "/updateWihtoutImage/:id",
  upload.none(),
  updateWithoutImageHandler
);

export default parentsRouter;
