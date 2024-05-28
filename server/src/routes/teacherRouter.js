import { Router } from "express";
import {
  newTeacherHandler,
  deleteTeacherHandler,
  getTeacherHandler,
  getAllTeacherHandler,
  changeTeacherHandler,
} from "../handlers/teachersHandler.js";
const teachersRouter = Router();

teachersRouter.post("/", newTeacherHandler);
teachersRouter.get("/searchTeacher/", getTeacherHandler);
teachersRouter.get("/allTeacher/", getAllTeacherHandler);
teachersRouter.put("/changeTeacher/:id", changeTeacherHandler);
teachersRouter.delete("/delete/:id", deleteTeacherHandler);

export default teachersRouter;