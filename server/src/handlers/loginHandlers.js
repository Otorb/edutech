import { login } from "../controllers/loginControllers.js";
export async function loginHandlers(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        error: `el email${email} o la contraseña ${password} requerido`,
      });
    }

    const resultLogin = await login(email, password);

    res.status(200).json({ message: "Login successful", resultLogin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
