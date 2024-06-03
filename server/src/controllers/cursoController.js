import { Curso, Subject } from "../models/index.js";

//Crear historia
export const crearCurso = async (req, res, next) => {
  try {
    const cursoCreado = await Curso.create({ ...req.body });
    if (!cursoCreado)
      return res.status(401).send({ message: "el curso no pudo ser creado." });
    res.status(200).send({
      message: "curso creado con exito.",
      cursoCreado,
    });
  } catch (e) {
    next(e);
  }
};

export const traerCurso = async (req, res, next) => {
  try {
    const cursos = await Curso.findAll({ include: { model: Subject } });
    console.log(cursos);
    if (!cursos)
      return res.status(404).send({ message: "No se encontró ningun curso" });
    res.status(200).send(cursos);
  } catch (e) {
    console.log(e);
    next(e);
  }
};
