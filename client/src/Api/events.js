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



//no hace falta esta
export const getEventById = async (id) => {
    try {
        const response = await axios.get(`${API}/events/${id}`)
        return response
    } catch (error) {
        console.error('error al buscar por id al event:', error);
        throw error
    }
}


export const postEvent = async (data) => {
    try {
        const response = await axios.post(`${API}/events`, data)
        return response
    } catch (error) {
        console.error('error al crear un event:', error);
        throw error
    }
}


// export const deleteEvent = async (id) => {
//     try {
//         const response = await axios.delete(`${API}/events/${id}`)
//         if (response.status === 200) {
//             console.log('Evento borrado exitosamente');
//         }
//         return response;
//     } catch (error) {
//         console.error('error al borrar un event:', error);
//         throw error
//     }
// } probar si sigue la estructura del back