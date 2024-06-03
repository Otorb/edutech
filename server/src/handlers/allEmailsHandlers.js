import { getAllEmails } from "../controllers/allEmailsControllers.js";
export async function allEmailHandlers(req, res) {
  try {
    const resultEmails = await getAllEmails();
    res.status(200).json({ message: `emails`, resultEmails });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
