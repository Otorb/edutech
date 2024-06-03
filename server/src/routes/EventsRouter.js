import { Router } from "express";
import {
  postEventsHandlers,
  getEventsHandlers,
  searchIdEventsHandlers,
} from "../handlers/eventsHandlers.js";

const EventsRouter = Router();

EventsRouter.post("/", postEventsHandlers);
EventsRouter.get("/", getEventsHandlers);
EventsRouter.get("/:id", searchIdEventsHandlers);

export default EventsRouter;
