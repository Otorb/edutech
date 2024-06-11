import axios from "axios";

const API = 'https://edusync-fbva.onrender.com'

export const listEvent = async () => {
    try {
        const { data } = await axios.get(`${API}/events`)
        return data
    } catch (error) {
        console.error('error al ver los events:', error)
        throw error
    }
}


export const getEventById = async (id) => {
    try {
        const { data } = await axios.get(`${API}/events/${id}`)
        return data
    } catch (error) {
        console.error('error al buscar por id al event:', error);
        throw error
    }
}


export const postEvent = async ({ message, date }) => {
    try {
        const { data } = await axios.post(`${API}/events`, { message, date })
        return data
    } catch (error) {
        console.error('error al crear un event:', error);
        throw error
    }
}
