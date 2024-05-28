import { Router } from "express";
import studentsRouter from "./studentRouter.js";
import teachersRouter from "./teacherRouter.js";
import adminRouter from "./adminRoutes.js";
import cursoRouter from "./cursoRoute.js";
import { debajaOdealta } from "../controllers/deleteController.js";


import historyRouter from "./HistoriaRoutes.js";
import loginRouter from "./loginRouter.js";
import NotasRoute from "./notasRoute.js";
import MateriaRoute from "./subjectRoutes.js";
import ParentsRoute from "./parentsRouter.js";
const router = Router();

router.put("/delete/:email", debajaOdealta);

router.use("/students", studentsRouter);
router.use("/admin", adminRouter);
router.use("/historia", historyRouter);
router.use("/teachers", teachersRouter);
router.use("/login", loginRouter);
router.use("/notas", NotasRoute);
router.use("/subject", MateriaRoute);
router.use("/parent", ParentsRoute);
router.use('/curso',cursoRouter)
export default router;
