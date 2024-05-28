import { Notas, Promedio } from "../models/index.js";
import { editarPromedio } from '../controllers/promedioController.js';

// Crear historia
const PromedioMateria = (notas) => {
  const notasNum = notas.map((n) => {
    return Number(n.nota);
  });
  console.log(notasNum, "notasNum");
  const sum = notasNum.reduce((previous, current) => current += previous);
  const prom = sum / notas.length;
  console.log(prom, "promedio");
  return prom;
};

export const crearBoleta = async (req, res, next) => {
  try {
    const boletaCreada = await Notas.create({ ...req.body });
    
    
    if (!boletaCreada)
      return res.status(401).send({ message: "La Boleta no pudo ser creada." });
      const notasAll = await Notas.findAll({where:{idSubject:req.body.idSubject}});
      
      console.log(notasAll, "notasAll")
     const proMat= PromedioMateria(notasAll)
     const putPromedio = await Subject.findOne({where:{idSubject:req.body.idSubject}})
     console.log("Promaaaaaatttttttt",proMat);
     console.log("PUUUUUTTTTPROMEDIO",req.body); 
     putPromedio.set(toString(proMat))
     await putPromedio.save()
     
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
      return res.status(404).send({ message: "No se encontró ninguna Nota " });
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
