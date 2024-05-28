import { Promedio } from "../models/index.js";



// Crear historia 
export const crearBoleta = async (req, res, next) => {
    try {

      const boletaCreada = await Notas.create({ ...req.body });
      if (!boletaCreada)
        return res
          .status(401)
          .send({ message: "La Boleta no pudo ser creada." });
      res.status(200).send({
        message: "Nota Cargada con exito.",
        boletaCreada,
      });
    } catch (e) {
        console.log(e, "error en crear");
      next(e);
    }
  };




  /// historias 
export const traerNotas = async (req, res, next) => {
    try {
      const notasAll = await Notas.findAll();
      if (!notasAll)
        return res
          .status(404)
          .send({ message: "No se encontró ninguna Nota " });
      res.status(200).send(notasAll);
    } catch (e) {
      next(e);
    }
  };

  //Historia  por ID

export const traerNotasPorID = async (req, res, next) => {
    try {
      const { id } = req.params;
      const notasId = await Notas.findByPk(id);
      if (!notasId)
        return res
          .status(404)
          .send({ message: "La nota solicitadano ha sido encontrada." });
      res.status(200).send({
        message: "La nota ha sido encontrada",
        Notas: notasId,
      });
    } catch (e) {
      next(e);
    }
  };
  


  export const editarPromedio = async (req, res, next) => {
    try {
      const { id } = req.params;
      const promedio = await Promedio.findByPk(id);
      if (!promedio)
        return res
          .status(404)
          .send({ message: "La nota solicitada no ha sido encontrada." });
      const promedioEditado = await Promedio.update(req.body, { where: { id } });
      if (!promedioEditado)
        return res
          .status(401)
          .send({ message: "La nota no pudo ser editada." });
      res.status(200).send({
        message: "La nota ha sido editada",
        promedioEditado,
      });
    } catch (e) {
      next(e);
    }
  };