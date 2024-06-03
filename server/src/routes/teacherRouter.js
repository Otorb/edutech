import { Router } from "express";
import multer from "multer";
import {
  newTeacherHandler,
  ChangePasswordHandler,
  deleteTeacherHandler,
  getTeacherHandler,
  getAllTeacherHandler,
  updateWithImageHandler,
  updateWithoutImageHandler,
} from "../handlers/teachersHandler.js";
const teachersRouter = Router();

const upload = multer({
  storage: multer.memoryStorage()
});

teachersRouter.post("/", upload.none(), newTeacherHandler);
teachersRouter.put("/changePassword/", ChangePasswordHandler);
teachersRouter.get("/searchTeacher/", getTeacherHandler);
teachersRouter.get("/allTeacher/", getAllTeacherHandler);
teachersRouter.delete("/delete/:id", deleteTeacherHandler);

teachersRouter.put("/updateWihtImage/:id", upload.array('image',1), updateWithImageHandler);
teachersRouter.put("/updateWihtoutImage/:id", upload.none(), updateWithoutImageHandler);

export default teachersRouter;