import { Historials } from "../models/index.js";



// Crear historia 
export const crearHistoria = async (req, res, next) => {
    try {
      const historiaCreada = await Historials.create({ ...req.body });
      if (!historiaCreada)
        return res
          .status(401)
          .send({ message: "La historia no pudo ser creada." });
      res.status(200).send({
        message: "Historia creada con exito.",
        historiaCreada,
      });
    } catch (e) {
      next(e);
    }
  };




  /// historias 
export const traerHistoria = async (req, res, next) => {
    try {
      const historias = await Historials.findAll();
      if (!historias)
        return res
          .status(404)
          .send({ message: "No se encontró ningun historial" });
      res.status(200).send(historias);
    } catch (e) {
      next(e);
    }
  };

  //Historia  por ID

export const traerHistoriaPorID = async (req, res, next) => {
    try {
      const { id } = req.params;
      const HistoriaPorID = await Historials.findByPk(id);
      if (!HistoriaPorID)
        return res
          .status(404)
          .send({ message: "La historia  por id no ha sido encontrada." });
      res.status(200).send({
        message: "La historia  ha sido encontrada",
        Historials: HistoriaPorID,
      });
    } catch (e) {
      next(e);
    }
  };
  

