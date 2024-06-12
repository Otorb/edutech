import { hahedPassword } from "../utils/hasPassword.js";

import { Teachers, Subject } from "../models/index.js";
import bcrypt from "bcrypt";

export async function newTeachers(
  name,
  lastName,
  email,
  password,
  phone,
  photo
) {
  const userTeacher = await Teachers.findOne({ where: { email } });
  if (userTeacher) {
    throw new Error("El profesor ya existe");
  }

  const userTeacherHashedPassword = await hahedPassword(password);
  const student = await Teachers.create({
    name,
    lastName,
    email,
    password: userTeacherHashedPassword,
    phone,
    photo,
  });
  return student;
}

export async function changePassword(newPassword, email, password) {
  const findTeacher = await Teachers.findOne({ where: { email } });
  if (!findTeacher) {
    throw new Error(`el usuario con el  ${email} no existe`);
  }

  const passwordMatch = await bcrypt.compare(password, findTeacher.password);
  if (!passwordMatch) throw new Error("La contraseña es incorrecta");

  const saltRounds = 10;
  const newPasswordHashed = await bcrypt.hash(newPassword, saltRounds);
  const newPasswordTeachers = await Teachers.update(
    { password: newPasswordHashed },
    { where: { email } }
  );
  return newPasswordTeachers;
}

/*export async function desactiveTeacher(id, active) {
  const [teacher] = await Teachers.update({ active: active }, { where: { id } });
  if (!teacher) {
    throw new Error("El profesor no existe");
  }
  const updateTeacher = await Teachers.findOne({ where: { id } });
  return updateTeacher;
}*/

export async function deleteTeacher(id) {
  const teacher = await Teachers.findOne({ where: { id } });
  if (!teacher) {
    throw new Error("El profesor no existe");
  }
  await teacher.destroy();
  return teacher;
}

export async function getTeacher(email) {
  const userTeacher = await Teachers.findOne({ where: { email: email } });
  if (!userTeacher) {
    throw new Error("El profesor no existe");
  }

  return userTeacher;
}

export async function getAllTeacher() {
  //try {
  const allTeachers = await Teachers.findAll({ include: { model: Subject } });
  if (allTeachers.length === 0) {
    throw new Error("No hay profesores, aun");
  }
  //return res.status(404).send({ message: "No se encontraron profesor(es)" });
  //res.status(200).send(allTeachers);
  //} catch (e) {
  //next(e);
  //}
  return allTeachers;
}

export async function updateWithImage(id, updateData) {
  const teacher = await Teachers.findOne({ where: { id } });

  if (!teacher) {
    throw new Error("El profesor no existe");
  }

  await teacher.update(updateData);

  return teacher;
}

export async function updateWithoutImage(id, updateData) {
  const teacher = await Teachers.findOne({ where: { id } });

  if (!teacher) {
    throw new Error("El profesor no existe");
  }

  await teacher.update(updateData);

  return teacher;
}
