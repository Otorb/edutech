import axios from "axios";

const API = 'https://edusync-fbva.onrender.com'
//seguir haciendo esto

export const listEvent = async () => {
    try {
        const response = await axios.get(`${API}/events`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}