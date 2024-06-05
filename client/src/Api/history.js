import axios from 'axios'

const API='https://edusync-fbva.onrender.com'


export const userHistory= () => axios.get(`${API}/historia`)