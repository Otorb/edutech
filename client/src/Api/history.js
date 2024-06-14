import axios from 'axios'

const API='https://edusync-fbva.onrender.com'


export const listHistoria = async () => {
    try {
      const response = await axios.get(`${API}/historia`);
      return response; 
    } catch (error) {
      console.error("Error fetching parents:", error);
      throw error;
    }
  };