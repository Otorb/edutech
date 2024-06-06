import axios from "axios";

const API = "https://edusync-fbva.onrender.com";

export const listParents = async () => {
  try {
    const response = await axios.get(`${API}/parent/searchAll`);
    return response; 
  } catch (error) {
    console.error("Error fetching parents:", error);
    throw error;
  }
};

export const deleteParents= async (data)=>{
  try {
    const response= await axios.put(`${API}/delete/${data.email}`,{ select: data.role })
    return response;
  } catch (error) {
    console.error('error delete parents:', error)
    throw error
  }
}

export const AddParent= async (data)=>{
  try {
    const response= await axios.post(`${API}/parent`,data)
    return response;
  } catch (error) {
    console.error('error delete parents:', error)
    throw error
  }
}


