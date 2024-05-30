import React from 'react'
import style from './style.module.css'
import { FaRegEye } from 'react-icons/fa'
import { Link, Navigate, Route, useNavigate, useParams } from 'react-router-dom'
import { infoUser } from './ObjetoPrueba'
const Sons = ({
    // data
}) => {

    const parametros = useParams()






    const Nav = useNavigate()

    // console.log(parametros)

    const FunctionfilterSon = () => {
        let filterSon;
        return filterSon = infoUser.hijos.find(e => e.name === parametros.name)
    }

    const SelectedSon = FunctionfilterSon()
    // console.log(SelectedSon)
/*
const userData = useAppSelector((state) => state.user.data);
  console.log(userData)

*/

    return (
        <>
            <div>

                {/* <h1>{SelectedSon.name}</h1> */}
                <div className={style.bgContainer}>
                    <article className={style.articleRole}>
                        <div className={style.containerPicture}>
                            <img className={style.imgRole} src={SelectedSon.imagen} alt="" />
                        </div>
                        <section className={style.infoUser}>
                            <div className={style.ContainerUserInfo}>
                                <div className={style.LastName}>
                                    <p
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-evenly"
                                        }}
                                    >
                                        Alumno:
                                        <u>
                                            {SelectedSon.name}-
                                            {SelectedSon.lastName}
                                        </u>
                                    </p>
                                </div>
                                <div className={style.ToContantFather}>
                                    <b>Contacto: </b>

                                    <p>Email: <a href='' onClick={(e) => e.preventDefault()}>{SelectedSon.email}</a></p>
                                    <p>Telefono: <a href='' onClick={(e) => e.preventDefault()}>{SelectedSon.phone}</a></p>
                                    <p>Direccion: <a href='' onClick={(e) => e.preventDefault()}>{SelectedSon.address}</a></p>
                                </div>
                                <div >
                                    <u>Calificaciones por materia del Alumno</u>
                                    {SelectedSon.CalificacionesEnMaterias.map(e => (
                                        <div key={e.id}>
                                            <p>Pacticas Del Lenguaje: {e.lengua}</p>
                                            <p>Ingles: {e.ingles}</p>
                                            <p>Matematicas: {e.matematicas}</p>

                                        </div>
                                    ))}
                                </div>
                                <div className={style.redireccionAPadre}>
                                    <div>
                                        <div >
                                            <button style={{ fontWeight: "900" }} onClick={() => Nav(-1)}>
                                                Volver al Perfil del Padre
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>


            </div>
        </>
    )
}
export default Sons