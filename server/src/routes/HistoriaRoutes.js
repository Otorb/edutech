import { Router } from "express";
import { crearHistoria , traerHistoriaPorID, traerHistoria, editarHistoria, delectHistory} from '../controllers/HistoriaController.js';



const historyRouter = Router();

historyRouter.post("/", crearHistoria);
historyRouter.get("/", traerHistoria);
historyRouter.get("/:id", traerHistoriaPorID);
historyRouter.put("/:id", editarHistoria);
historyRouter.delete("/:id", delectHistory);




export default historyRouter;
