import JWT from "jsonwebtoken";
import { JWT_TOKEN_SECRET } from "../config/envs.js";

export const generateToken = (user) => {
  const payload = { userId: user.id, role: user.rol };
  const token = JWT.sign(payload, JWT_TOKEN_SECRET, { expiresIn: "1h" });
  return token;
};
