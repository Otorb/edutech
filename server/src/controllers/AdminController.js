import { Admin } from "../models/index.js";
import { hahedPassword } from "../utils/hasPassword.js";

export async function newAdmin(email, password) {
  const user = await Admin.findOne({ where: { email } });
  if (user) {
    throw new Error("El administrador ya existe");
  }
  const userHashedPassword = await hahedPassword(password);
  const admin = await Admin.create({
    email,
    password: userHashedPassword,
  });

  return admin;
}



export const admins = async (req, res, next) => {
  try {
    const aministradores = await Admin.findAll({
      // include: { model: Historiaclinica },
    });
    if (aministradores.length === 0)
      return res.status(404).send({ message: "No se encontraron usuarios" });
    res.status(200).send(aministradores);
  } catch (e) {
    next(e);
  }
};
