import axios from 'axios';

const API = 'https://edusync-fbva.onrender.com';

export const listParents = async () => {
  try {
    const response = await axios.get(`${API}/parent/searchAll`);
    return response.data; // Asumiendo que la respuesta contiene los datos en 'data'
  } catch (error) {
    console.error('Error fetching parents:', error);
    throw error; // Lanzar el error para que pueda ser manejado por el código llamante
  }
};



