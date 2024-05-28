import { Subject } from "../models/index.js";





// Crear historia 
export const crearMateria = async (req, res, next) => {
    try {
      const materiaCreada = await Subject.create({ ...req.body });
      if (!materiaCreada)
        return res
          .status(401)
          .send({ message: "La Materia no pudo ser creada." });
      res.status(200).send({
        message: "materia creada con exito.",
        materiaCreada,
      });
    } catch (e) {
      next(e);
    }
  };




  /// historias 
export const traerMaterias = async (req, res, next) => {
    try {
      const materias = await Subject.findAll();
      if (!materias)
        return res
          .status(404)
          .send({ message: "No se encontró ningun historial" });
      res.status(200).send(materias);
    } catch (e) {
      next(e);
    }
  };