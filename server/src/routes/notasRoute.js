import { Router } from "express";
import { crearBoleta, traerNotas} from '../controllers/notasController.js';



const NotasRoute = Router();

NotasRoute.post("/", crearBoleta);
NotasRoute.get("/", traerNotas);




export default NotasRoute