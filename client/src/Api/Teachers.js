import axios from "axios";

const API = "https://edutech-nle9.onrender.com";

export const listTeachers = async () => {
  try {
    const response = await axios.get(`${API}/teachers/allTeacher`);
    return response; 
  } catch (error) {
    console.error("Error fetching parents:", error);
    throw error;
  }
};