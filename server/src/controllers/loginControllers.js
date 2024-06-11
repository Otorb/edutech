import bcrypt from "bcrypt";
import { Op } from "sequelize";
import { generateToken } from "../auth/generateToken.js";
import { Students, Admin, Teachers, Parents } from "../models/index.js";
import { sendAccountCreationSuccessEmail } from "../services/emailServices.js";

async function findUserByEmail(email, model) {
  const user = await model.findOne({
    where: {
      email: {
        [Op.eq]: email,
      },
    },
  });

  return user;
}
async function verifyPassword(password, user) {
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error("La contraseña es incorrecta");
  }
}
async function authenticateUser(email, password, model) {
  const user = await findUserByEmail(email, model);
  if (user) {
    await verifyPassword(password, user);
    return user;
  }
  return null;
}

export async function login(email, password) {
  const user = await authenticateUser(email, password, Admin);
  if (user) {
    const token = generateToken(user);
    // const emailVerified = await sendAccountCreationSuccessEmail(email);
    return { user: [user.email, user.role], token };
  }

  const userTeacher = await authenticateUser(email, password, Teachers);
  if (userTeacher) {
    const token = generateToken(userTeacher);
    // const emailVerified = await sendAccountCreationSuccessEmail(email);
    return { userTeacher: [userTeacher.email, userTeacher.role], token };
  }

  const userStudent = await authenticateUser(email, password, Students);
  if (userStudent) {
    const token = generateToken(userStudent);
    // const emailVerified = await sendAccountCreationSuccessEmail(email);
    return { userStudent: [userStudent.email, userStudent.role], token };
  }

  const parenstUser = await authenticateUser(email, password, Parents);
  if (parenstUser) {
    const token = generateToken(parenstUser);
    // const emailVerified = await sendAccountCreationSuccessEmail(email);
    return { userStudent: [parenstUser.email, parenstUser.role], token };
  }

  throw new Error("Credenciales inválidas");
}
