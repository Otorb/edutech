import { Router } from "express";
import multer from "multer";
import { verifyToken } from "../auth/JWTPassport.js"; //import { verifyToken } from "../auth/JWTPassport.js";

import {
  newStudentHandler,
  deleteStudentHandler,
  getStudentHandler,
  getAllStudentsHandler,
  ChangePasswordHandler,
  updateWithImageHandler,
  updateWithoutImageHandler
} from "../handlers/studentHandlers.js";
import { validateStudents } from "../middlewares/validateStudents.js";
const studentsRouter = Router();

const upload = multer({
  storage: multer.memoryStorage()
});

studentsRouter.post("/", validateStudents, newStudentHandler);
studentsRouter.get("/search/:id", getStudentHandler);
studentsRouter.get("/searchAll/", getAllStudentsHandler);
studentsRouter.put("/change/", ChangePasswordHandler);
studentsRouter.delete("/delete/:id", verifyToken, deleteStudentHandler);

studentsRouter.put("/updateWihtImage/:id", upload.array('image',1), updateWithImageHandler);
studentsRouter.put("/updateWihtoutImage/:id", upload.none(), updateWithoutImageHandler);

export default studentsRouter;
