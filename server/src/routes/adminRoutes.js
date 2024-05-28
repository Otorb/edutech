import { Router } from "express";
import { newAdminHandler } from "../handlers/adminHandler.js";
import { admins } from "../controllers/AdminController.js";

const adminRouter = Router();

adminRouter.post("/", newAdminHandler);
adminRouter.get("/", admins);

export default adminRouter;
