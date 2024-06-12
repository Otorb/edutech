import { Parents, Students } from "../models/index.js";
import { hahedPassword } from "../utils/hasPassword.js";
import bcrypt from "bcrypt";

// MANEJORADOR DE ERRORS
const ERROR_NEW_PARENT = (email) => `El usuario ${email} ya existe`;

export async function newParents(
  name,
  lastName,
  email,
  password,
  address,
  photo,
  phone
) {
  const findParent = await Parents.findOne({ where: { email } });
  if (findParent) {
    throw new Error(ERROR_NEW_PARENT(email));
  }

  const parentsHashedPassword = await hahedPassword(password);
  const newParent = await Parents.create({
    name,
    lastName,
    email,
    password: parentsHashedPassword,
    address,
    photo,
    phone,
  });
  //await newParent.setStudent(studentId);

  console.log(newParent, "aca traigo el body");
  // const sendEmail = await sendAccountCreationSuccessEmail(email);
  return newParent;
}

export async function changePassword(newPassword, email, password) {
  const findParent = await Parents.findOne({ where: { email } });
  if (!findParent) {
    throw new Error(`el usuario con el  ${email} no existe`);
  }

  const passwordMatch = await bcrypt.compare(password, findParent.password);
  if (!passwordMatch) throw new Error("La contraseña es incorrecta");

  const saltRounds = 10;
  const newPasswordHashed = await bcrypt.hash(newPassword, saltRounds);
  const newPasswordParents = await Parents.update(
    { password: newPasswordHashed },
    { where: { email } }
  );
  return newPasswordParents;
}

export async function getParents(id) {
  const parent = await Parents.findByPk(id, { include: { model: Students } });
  if (!parent) {
    throw new Error("El usuario no existe");
  }
  return parent;
}

export async function getAllParents() {
  const parents = await Parents.findAll({ include: { model: Students } });
  if (!parents) {
    throw new Error("No se encontraron usuarios");
  }
  return parents;
}

export async function deleteParents(id) {
  const parent = await Parents.findByPk(id);
  if (!parent) {
    throw new Error("El usuario no existe");
  }
  return parent;
}

export async function updateWithImage(id, updateData) {
  const parent = await Parents.findOne({ where: { id } });

  if (!parent) {
    throw new Error("El familiar no existe");
  }

  await parent.update(updateData);

  return parent;
}

export async function updateWithoutImage(id, updateData) {
  const parent = await Parents.findOne({ where: { id } });

  if (!parent) {
    throw new Error("El familiar no existe");
  }

  await parent.update(updateData);

  return parent;
}

export const editarusuario = async (req, res, next) => {
  try {
    const { parentId } = req.params;
    const usuarioEditado = await Parents.findByPk(parentId);
    if (!usuarioEditado)
      return res
        .status(404)
        .send({ message: "No se pudo encontrar el usuario para editarlo" });
    usuarioEditado?.update({ ...req.body });
    res
      .status(201)
      .send({ message: "El usuario fue editado", parent: usuarioEditado });
  } catch (e) {
    next(e);
  }
};
