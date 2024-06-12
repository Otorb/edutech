import {
  newParents,
  getParents,
  getAllParents,
  deleteParents,
  changePassword,
  updateWithImage,
  updateWithoutImage,
} from "../controllers/parentsControllers.js";
import storage from "../utils/cloud_storage.js";

export async function newParentHandler(req, res) {
  try {
    const { name, lastName, email, password, address, photo, phone } = req.body;
    console.log(name, lastName, email, password, address, photo, phone);
    console.log(req.body);
    const resultNewParent = await newParents(
      name,
      lastName,
      email,
      password,
      address,
      photo,
      phone
    );
    res.status(200).json({
      message: "usuario creado parents creado exitosamente",
      resultNewParent,
    });
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
      message: `contrasena acualizado con esxito`,
      resultChangePassword: email,
      newPassword,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getParentHandler(req, res) {
  try {
    const { id } = req.params;
    const resultGetParent = await getParents(id);
    res.status(200).json({ resultGetParent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAllParentsHandler(req, res) {
  try {
    const resultGetAllParents = await getAllParents();
    res.status(200).json({ resultGetAllParents });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export async function deleteParentHandler(req, res) {
  try {
    const { id } = req.params;
    const resultDeleteParent = await deleteParents(id);
    res.status(200).json({ resultDeleteParent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateWithImageHandler(req, res) {
  try {
    const { id } = req.params;
    const { name, lastName, email, address, phone, photo } = req.body;
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
    const resultParent = await updateWithImage(id, {
      name,
      lastName,
      email,
      address,
      phone,
      photo: image,
    });
    res
      .status(200)
      .json({ message: "Update data Parent + Image", resultParent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateWithoutImageHandler(req, res) {
  try {
    const { id } = req.params;
    const { name, lastName, email, address, phone } = req.body;
    const resultParent = await updateWithoutImage(id, {
      name,
      lastName,
      email,
      address,
      phone,
    });
    res.status(200).json({ message: "Update data Parent", resultParent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
