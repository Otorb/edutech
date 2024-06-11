import { Router } from "express";
import {
  postEventsHandlers,
  getEventsHandlers,
  searchIdEventsHandlers,
  
} from "../handlers/eventsHandlers.js";
import { editarEvento, delectEvent } from "../controllers/EventsControllers.js";

const EventsRouter = Router();

EventsRouter.post("/", postEventsHandlers);
EventsRouter.get("/", getEventsHandlers);
EventsRouter.get("/:id", searchIdEventsHandlers);
EventsRouter.put("/:id", editarEvento);
EventsRouter.delete("/:id", delectEvent);

export default EventsRouter;
