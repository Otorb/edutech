import React from 'react'
import style from './style.module.css'
import { FaRegEye } from "react-icons/fa6";
export const Parents = ({
    data,
    setRole
}) => {

    /*name,
lastName,
    email,
    phone
    */
    console.log(data)
    return (
        <div>
            {
                data.map(e => (
                    <div key={e.id} className={style.ContainerDatosDePariente}>
                        <div>
                            <i>Hijo{e.id}:</i>
                            <div style={{ cursor: "pointer" }}>

                                <u>{e.name}</u> <br /> <u>{e.lastName}</u>
                            </div>
                        </div>
                        <button onClick={() => setRole("Son")}>
                            Su Perfil
                            <FaRegEye />
                        </button>
                    </div>
                ))
            }



        </div>
    )
}
