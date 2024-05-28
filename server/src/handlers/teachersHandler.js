import {
    newTeachers,
    deleteTeacher,
    getTeacher,
    getAllTeacher,
    updateTeacher
  } from "../controllers/TeachersControllers.js";
  export async function newTeacherHandler(req, res) {
    try {
      const {
        name,
        lastName,
        email,
        password,
        phone
      } = req.body;
      const resultTeacher = await newTeachers(
        name,
        lastName,
        email,
        password,
        phone
      );
      res.status(200).json({ message: "New Teacher", resultTeacher });
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
  
  export async function changeTeacherHandler(req, res) {
    try {
      const { id } = req.params;
      const { name, lastName, email, phone } = req.body;
      const resultTeacher = await updateTeacher(id, { name, lastName, email, phone });
      res.status(200).json({ message: "Change Teacher", resultTeacher });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  