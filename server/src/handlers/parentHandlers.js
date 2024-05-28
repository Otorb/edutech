import {
    newParents,
    deleteParent,
    getParent,
    getAllParent,
    updateParent
  } from "../controllers/ParentsController.js";
  export async function newParentHandler(req, res) {
    try {
      const {
        name,
        lastName,
        email,
        password,
        address,
        phone
      } = req.body;
      const resultParent = await newParents(
        name,
        lastName,
        email,
        password,
        address,
        phone
      );
      res.status(200).json({ message: "New Parent", resultParent });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  export async function deleteParentHandler(req, res) {
    try {
      const { id } = req.params;
      const resultParent = await deleteParent(id);
      res.status(200).json({ message: "Delete Parent", resultParent });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  export async function getParentHandler(req, res) {
    try {
      const { email } = req.body;
      const resultParent = await getParent(email);
      res.status(200).json({ message: "Get Parent", resultParent });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  export async function getAllParentHandler(req, res) {
    try {
      //const { email } = req.body;
      const resultParent = await getAllParent();
      res.status(200).json({ message: "Get AllParent", resultParent });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  export async function changeParentHandler(req, res) {
    try {
      const { id } = req.params;
      const { name, lastName, email, phone } = req.body;
      const resultParent = await updateParent(id, { name, lastName, email, phone });
      res.status(200).json({ message: "Change Parent", resultParent });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  