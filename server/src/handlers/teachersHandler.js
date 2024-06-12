import {
  newTeachers,
  changePassword,
  deleteTeacher,
  getTeacher,
  getAllTeacher,
  updateWithImage,
  updateWithoutImage,
} from "../controllers/TeachersControllers.js";
import storage from "../utils/cloud_storage.js";

export async function newTeacherHandler(req, res) {
  try {
    const { name, lastName, email, password, phone, photo } = req.body;
    const resultTeacher = await newTeachers(
      name,
      lastName,
      email,
      password,
      phone,
      photo
    );
    res.status(200).json({ message: "New Teacher", resultTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function ChangePasswordHandler(req, res) {
  try {
    const { newPassword, email, password } = req.body;
    const resultChangePassword = await changePassword(
      newPassword,
      email,
      password
    );
    res.status(200).json({
      message: `contrasena acualizado con exito`,
      resultChangePassword: email,
      newPassword,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteTeacherHandler(req, res) {
  try {
    const { id } = req.params;
    const resultTeacher = await deleteTeacher(id);
    res.status(200).json({ message: "Delete Teacher", resultTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getTeacherHandler(req, res) {
  try {
    const { email } = req.body;
    const resultTeacher = await getTeacher(email);
    res.status(200).json({ message: "Get Teacher", resultTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAllTeacherHandler(req, res) {
  try {
    //const { email } = req.body;
    const resultTeacher = await getAllTeacher();
    res.status(200).json({ message: "Get AllTeacher", resultTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateWithImageHandler(req, res) {
  try {
    const { id } = req.params;
    const { name, lastName, email, phone, photo } = req.body;
    const files = req.files;
    let image = "";
    if (files.length > 0) {
      //const file = req.files[0].buffer.buffer;
      const pathImage = `image_${Date.now()}`;
      const url = await storage(files[0], pathImage, photo);
      if (url != undefined && url != null) {
        image = url;
      }
    }
    const resultTeacher = await updateWithImage(id, {
      name,
      lastName,
      email,
      phone,
      photo: image,
    });
    res
      .status(200)
      .json({ message: "Update data Teacher + Image", resultTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateWithoutImageHandler(req, res) {
  try {
    const { id } = req.params;
    const { name, lastName, email, phone } = req.body;
    const resultTeacher = await updateWithoutImage(id, {
      name,
      lastName,
      email,
      phone,
    });
    res.status(200).json({ message: "Update data Teacher", resultTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
