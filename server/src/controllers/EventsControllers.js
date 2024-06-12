import { Events } from "../models/index.js";

export async function newEvents( message,
  date,
  title,
  hour,) {
  const events = await Events.create({
    message,
    date,
    title,
    hour,
  });
  if (!events) {
    throw new Error(`la historia no puede ser creada`);
  }
  return events;
}

export async function allEvents() {
  const allEvents = await Events.findAll();
  if (!allEvents) {
    throw new Error(`no se encontro ninguna historia`);
  }
  return allEvents;
}

export async function searchIdEvents(id) {
  const eventsId = await Events.findByPk(id);
  if (!eventsId) {
    throw new Error(`no se encontro la historia con el id ${id}`);
  }
  return eventsId;
}


export const editarEvento = async (req, res, next) => {
  try {
    const { id } = req.params;
    const eventoEditado = await Events.findByPk(id);
    if (!eventoEditado)
      return res
        .status(404)
        .send({ message: "No se pudo encontrar el evento para editarlo" });
        eventoEditado?.update({ ...req.body });
    res
      .status(201)
      .send({ message: "El evento fue editado", usuario: eventoEditado });
  } catch (e) {
    next(e);
  }
};

export const delectEvent = async (req, res) =>{
  try {
      const {id} = req.params
      const result = await Events.destroy({
          where:{idHistorial : id },
      })
      console.log(result)
      res.send({ msg: "su evento  se ha elminado correctamente" });

  } catch (error) {
      return res
      .status(404)
      .json({ msg: "no hemos podido realizar su solicitud" });  
  }
}
