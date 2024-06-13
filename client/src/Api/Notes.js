import axios from "axios";


const API = "https://edusync-fbva.onrender.com"



export const getNotes = async () => {
    try {
        const response = await axios.get(`${API}/notas`)
        return response
    } catch (error) {
        console.error('error al ver las notas: ', error)
        throw error
    }
}


export const postNote = async (data) => {
    try {
        const response = await axios.post(`${API}/notas`, data)
        return response
    } catch (error) {
        console.error('error al crear una nota: ', error);
        throw error
    }
}


export const deleteNote = async (id) => {
    try {
        const response = await axios.delete(`${API}/notas/${id}`)
        if (response.status === 200) {
            console.log('nota borrada exitosamente');
        }
        return response;
    } catch (error) {
        console.error('error al borrar una nota: ', error);
        throw error
    }
}


export const updateNote = async (data) => {
    try {
        const response = await axios.put(`${API}/notas/${data.id}`, data)
        if (response.status === 200) {
            console.log('Nota editada exitosamente');
        }
        return response;
    } catch (error) {
        console.error('error al editar una nota: ', error);
        throw error
    }
} 

