import {
  newEvents,
  allEvents,
  searchIdEvents,
} from "../controllers/EventsControllers.js";

export async function postEventsHandlers(req, res) {
  try {
    const { message,
      date,
      title,
      hour, } = req.body;
    console.log(message, date);
    const resultNewEvents = await newEvents(message,
      date,
      title,
      hour,);
    res
      .status(200)
      .json({ message: `historia creada con exito`, resultNewEvents });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export async function getEventsHandlers(req, res) {
  try {
    const resultsId = await allEvents();
    res.status(200).json({ message: `todos los events`, resultsId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export async function searchIdEventsHandlers(req, res) {
  try {
    const { id } = req.params;
    const resultsId = await searchIdEvents(id);
    res
      .status(200)
      .json({ message: `la historia ha sido encontrada`, resultsId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
