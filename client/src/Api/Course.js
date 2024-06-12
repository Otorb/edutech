import axios from 'axios'

const API='https://edusync-fbva.onrender.com'


<<<<<<< HEAD
export const CoursesApi= () => axios.get(`${API}/curso`)
=======
export const listCursos = async () => {
    try {
      const response = await axios.get(`${API}/curso`);
      return response; 
    } catch (error) {
      console.error("Error fetching parents:", error);
      throw error;
    }
  };
>>>>>>> dea74fe1c153f5ecebc5d6b4283311e6ca7e4c5f


