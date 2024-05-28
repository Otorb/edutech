import { Router } from "express";
import { crearMateria, traerMaterias} from '../controllers/subjectController.js';



const MateriaRoute = Router();

MateriaRoute.post("/", crearMateria);
MateriaRoute.get("/", traerMaterias);




export default MateriaRoute