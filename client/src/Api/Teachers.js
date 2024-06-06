import axios from "axios";

const API = "https://edusync-fbva.onrender.com";

export const listTeachers = async () => {
  try {
    const response = await axios.get(`${API}/teachers/allTeacher`);
    return response; 
  } catch (error) {
    console.error("Error fetching parents:", error);
    throw error;
  }
};

export const deleteTeacher= async (data)=>{
  try {
    const response= await axios.put(`${API}/delete/${data.email}`,{ select: data.role })
    return response;
  } catch (error) {
    console.error('error delete parents:', error)
    throw error
  }
}

export const AddTeacher= async (data)=>{
  try {
    const response= await axios.post(`${API}/teachers`,data)
    return response;
  } catch (error) {
    console.error('error delete parents:', error)
    throw error
  }
}