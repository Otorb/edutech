import { Router } from "express";
import { crearHistoria , traerHistoriaPorID, traerHistoria} from '../controllers/HistoriaController.js';



const historyRouter = Router();

historyRouter.post("/", crearHistoria);
historyRouter.get("/", traerHistoria);
historyRouter.get("/:id", traerHistoriaPorID);




export default historyRouter;
