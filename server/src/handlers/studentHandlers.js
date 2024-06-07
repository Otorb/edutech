import {
  newStudents,
  deleteStudent,
  getStudent,
  getAllStudents,
  updateWithImage,
  updateWithoutImage
} from "../controllers/newStudentControllers.js";

import { changePassword } from "../controllers/passwordResetEstudent.js";
import storage from "../utils/cloud_storage.js";

export async function newStudentHandler(req, res) {
  try {
    console.log("ABC", req.body);
    const {
      name,
      lastName,
      email,
      password,
      phone,
      birthd,
      registration,
      photo,
      parentId
    } = req.body;
    const resultStudent = await newStudents(
      name,
      lastName,
      email,
      password,
      phone,
      birthd,
      registration,
      photo,
      parentId
    );
    res.status(200).json({ message: "New Student", resultStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteStudentHandler(req, res) {
  try {
    const { id } = req.params;
    const resultStudent = await deleteStudent(id);
    res.status(200).json({ message: "Delete Student", resultStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getStudentHandler(req, res) {
  try {
    const { id } = req.params;
    const resultStudent = await getStudent(id);
    res.status(200).json({ message: "Get Student", resultStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAllStudentsHandler(req, res) {
  try {
    const resultStudent = await getAllStudents();
    res.status(200).json({ message: "Get All Students", resultStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function ChangePasswordHandler(req, res) {
  try {
    const { email, password, newPassword } = req.body;

    console.log(email);
    const result = await changePassword(email, password, newPassword);
    res.status(200).json({
      message: "Contraseña actualizada correctamente",
      result: newPassword,
      email,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateWithImageHandler(req, res) {
  try {
    const { id } = req.params;
    const { name, lastName, email, phone, birthd, registration, grade, photo } = req.body;
    const files = req.files;
    let image = "";
    if(files.length > 0){
      //const file = req.files[0].buffer.buffer;
      const pathImage = `image_${Date.now()}`;
      const url = await storage(files[0], pathImage, photo);
      if(url != undefined && url != null){
          image = url;
      }
    }
    const resultStudent = await updateWithImage(id, { name, lastName, email, phone, birthd, registration, grade, photo: image });
    res.status(200).json({ message: "Update Student", resultStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateWithoutImageHandler(req, res) {
  try {
    const { id } = req.params;
    const { name, lastName, email, phone, birthd, registration, grade } = req.body;

    const resultStudent = await updateWithoutImage(id, { name, lastName, email, phone, birthd, registration, grade });
    res.status(200).json({ message: "Update Student", resultStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}