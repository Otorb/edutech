import React from 'react'
import style from './style.module.css'
import { FaRegEye } from 'react-icons/fa'
import { Navigate, Route } from 'react-router-dom'
const Sons = ({
    // data
}) => {


    const infoSon = {
        name: 'Bruno',
        lastName: 'Perez',
        email: 'aFtXa@example.com',
        phone: '123456789',
        parents: [
            {
                id: 1,
                name: 'Ernesto',
                lastName: 'Pereira',
                email: 'aFtXa@example.com',
                phone: '123456789',
            },
        ]
    }


    console.log(infoSon)




    return (
        <>
            <div>
                <Route path='/prophile/son' />
                {
                    infoSon.parents.map(e => (
                        <div key={e.id} className={style.ContainerDatosDePariente}>
                            <div>
                                <i>Padre: {e.id}:</i>
                                <div style={{ cursor: "pointer" }}>

                                    <u>{e.name}</u> <br /> <u>{e.lastName}</u>
                                </div>
                            </div>
                            <button onClick={() => setRole("Parents")}>
                                Perfil padre
                                <FaRegEye />
                            </button>
                        </div>
                    ))
                }



            </div>
        </>
    )
}
export default Sons
