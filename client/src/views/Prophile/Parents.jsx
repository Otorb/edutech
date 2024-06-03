import React from 'react'
import style from './style.module.css'
import { FaRegEye } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export const Parents = ({
    data,
    setRole,
    
}) => {

    // console.log(userData)
   
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
                        <Link style={{textDecoration: "none"}} to={`/profileRole/${e.name} `}>

                            <button className={style.buttonToParent} onClick={() => setRole("Son")}>
                                Su Perfil
                                <FaRegEye />
                            </button>
                        </Link>
                    </div>
                ))
            }



        </div>
    )
}
