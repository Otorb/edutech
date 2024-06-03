import { Events } from "../models/index.js";

export async function newEvents(message, date) {
  const events = await Events.create({
    message,
    date,
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
