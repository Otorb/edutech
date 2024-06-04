
import { useEffect, useState } from 'react'
import style from './style.module.css'
import { Parents } from './Parents'
import { imagenPadre, infoUser } from './ObjetoPrueba'
import { useAppSelector } from '../../Hooks/useAppSelector'
import axios from 'axios'
import ParentsAndSons from './ParentsAndSons'


const Index = () => {

    // let initialState = "Parents"
    // initialState = "Son"
    // initialState = "Parents"

    // const Prevent = (e) => {
    //     e.preventDefault()
    // }
    const [parentsState, setEstado] = useState([])
    const API = "https://edutech-nle9.onrender.com/parent";
    // const API2 = "https://edutech-nle9.onrender.com/students";

    const listParents = async () => {
        try {
            const response = await axios.get(`/${API}/searchAll`);
            console.log(response.data)
            setEstado(response.data.resultGetAllParents)
            return response.data // Asumiendo que la respuesta contiene los datos en 'data'
        } catch (error) {
            if (error) {
                console.error(`Error message: ${error.message}`)
            } else if (error.request) {
                console.error(`Error Request: ${error.request}`)

            }
            console.error("Error fetching parents:", error);
            throw error; // Lanzar el error para que pueda ser manejado por el código llamante
        }
    };

    useEffect(() => {
        listParents()
    }, [])



    const estado = useAppSelector((state) => state.user.data);
    console.log(parentsState)
    console.log(estado)





    return (
        <>
            <ParentsAndSons estado={estado} />
        </>
    )
}
export default Index

