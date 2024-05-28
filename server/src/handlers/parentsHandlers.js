import {
  newParents,
  getParents,
  getAllParents,
  deleteParents,
  changePassword,
} from "../controllers/parentsControllers.js";
export async function newParentHandler(req, res) {
  try {
    const { name, lastName, email, password, address, phone } = req.body;
    const resultNewParent = await newParents(
      name,
      lastName,
      email,
      password,
      address,
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
