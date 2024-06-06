import axios from 'axios'

const API='https://edusync-fbva.onrender.com'


export const userLogin = async (data) => {
    try {
      const response = await axios.post(`${API}/login`, data);
      return response.data;
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un estatus diferente a 2xx
        console.error('Error response:', error.response.data);
        throw new Error(error.response.data.message || 'Los datos ingresados son incorrecto');
      } else if (error.request) {
        // La solicitud fue hecha pero no hubo respuesta
        console.error('Error request:', error.request);
        throw new Error('No se recibió respuesta del servidor');
      } else {
        // Algo más causó el error
        console.error('Error:', error.message);
        throw new Error('Error al realizar la solicitud de inicio de sesión');
      }
    }
  };

  export const allEmails = async () => {
    try {
      const response = await axios.get(`${API}/Emails`);
      return response; 
    } catch (error) {
      console.error("Error fetching parents:", error);
      throw error;
    }
  };

  