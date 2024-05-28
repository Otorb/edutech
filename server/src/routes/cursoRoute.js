import { Router } from "express";
import {crearCurso, traerCurso } from '../controllers/cursoController.js';



const cursoRouter = Router();

cursoRouter.post("/", crearCurso);
cursoRouter.get("/", traerCurso);




export default cursoRouter