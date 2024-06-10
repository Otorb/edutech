import { hahedPassword } from "../utils/hasPassword.js";

import { Students, Subject , Historials, Promedio, Notas, Parents } from "../models/index.js";
// import Subject from "../models/Subject.js";
export async function newParents(
  name,
  lastName,
  email,
  password,
  address,
  phone
) {
  const user = await Parents.findOne({ where: { email } });
  if (user) {
    throw new Error("El padre ya existe");
  }

  const userHashedPassword = await hahedPassword(password);
  const parent = await Parents.create({
    name,
    lastName,
    email,
    password: userHashedPassword,
    address,
    phone
  });
  return parent;
}

export async function deleteParent(id) {
  const parent = await Parents.findOne({ where: { id } });
  if (!parent) {
    throw new Error("El usuario no existe");
  }
  await parent.destroy();
  return parent;
}

export async function getParent(id) {
  const parent = await Parents.findOne({ where: { id: id } })
    // include: { model: Historials, model: Promedio, model: Notas  } }
    

  if (!parent) {
    throw new Error("El usuario no existe");
  }

  return parent;
}

export async function getAllParent() {
  const parent = await Parents.findAll(/*{include:{ model: Subject, include:[{ model: Historials },{ model: Promedio}, {model: Notas }] }}*/);
  if (!parent) {
    throw new Error("No se encontraron padres");
  }
  return parent;
}
// {[include:{ model: Historials },{ model: Promedio}, {model: Notas }]}
export async function updateParent(id, updateData) {
  const parent = await Parents.findOne({ where: { id } });

  if (!parent) {
    throw new Error("El profesor no existe");
  }
  
  await parent.update(updateData);

  return parent;
}