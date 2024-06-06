import axios from 'axios';

const API = 'https://edusync-fbva.onrender.com';

export const listParents = async () => {
  try {
    const response = await axios.get(`${API}/parent/searchAll`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching parents:', error);
    throw error; 
  }
};



