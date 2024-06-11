import axios from 'axios'

const API='https://edusync-fbva.onrender.com'


export const listCursos = async () => {
    try {
      const response = await axios.get(`${API}/curso`);
      return response; 
    } catch (error) {
      console.error("Error fetching parents:", error);
      throw error;
    }
  };


