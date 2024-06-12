import { Router } from "express";
import { crearBoleta, traerNotas, editarNotas,delectNotas} from '../controllers/notasController.js';



const NotasRoute = Router();

NotasRoute.post("/", crearBoleta);
NotasRoute.get("/", traerNotas);
NotasRoute.put("/:id", editarNotas);
NotasRoute.delete("/:id", delectNotas);




export default NotasRoute