import axios from "axios";

const API = "https://edusync-fbva.onrender.com";

export const listStudients = async () => {
  try {
    const response = await axios.get(`${API}/students/searchAll`);
    return response; 
  } catch (error) {
    console.error("Error fetching parents:", error);
    throw error;
  }
};

export const deleteStudient= async (data)=>{
  try {
    const response= await axios.put(`${API}/delete/${data.email}`,{ select: data.role })
    return response;
  } catch (error) {
    console.error('error delete parents:', error)
    throw error
  }
}
