import { Students } from "../models/index.js";
import bcrypt from "bcrypt";
export const changePassword = async (email, password, newPassword) => {
  const user = await Students.findOne({ where: { email } });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Contraseña actual incorrecta");
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

  await user.update({ password: hashedPassword });

  return "Contraseña actualizada correctamente";
};

// {
//     "email":"appwebnotificationes@gmail.com",
//     "password":"1234567",
// }
