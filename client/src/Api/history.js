import axios from 'axios'

const API='http://localhost:3001'


export const userHistory= () => axios.get(`${API}/historia`)