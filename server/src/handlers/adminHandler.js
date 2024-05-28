import { newAdmin } from "../controllers/AdminController.js";

export async function newAdminHandler(req, res) {
  try {
    const { email, password } = req.body;
    const resultAdmin = await newAdmin(email, password);
    res.status(200).json({ message: "New Student", resultAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
