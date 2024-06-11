import axios from 'axios'

const API='https://edusync-fbva.onrender.com'


export const CoursesApi= () => axios.get(`${API}/curso`)


