import React from 'react'
import style from './style.module.css'
import { FaRegEye } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { imagenHijo, imagenPadre, infoUser } from './ObjetoPrueba'
import { useAppSelector } from '../../Hooks/useAppSelector'
const ParentsAndSons = ({ estado }) => {

    console.log(estado)
    const Nav = useNavigate()

    return (
        <>
            <div>

                <div className={style.bgContainer}>
                    <article className={style.articleRole}>

                        <section className={style.infoUser}>
                            <div className={style.ContainerUserInfo}>

                                <div className={style.ToContactUser}>
                                    <div>
                                        <b>Email  </b>
                                        <a href='' onClick={(e) => e.preventDefault()}>{estado?.email || "sin correo"}</a>
                                    </div>
                                    <div>
                                        <b>Celular  </b>
                                        <a href='' onClick={(e) => e.preventDefault()}>{estado?.phone || "sin telefono"}</a>
                                    </div>
                                    <div>
                                        <b>Direccion  </b>
                                        <a href='' onClick={(e) => e.preventDefault()}>{estado?.address || "sin telefono"}</a>
                                    </div>
                                    {
                                        estado.rol === "student" && (
                                            <div className={style.birthdayAndGrade}>
                                                <b >F. de Nacimiento & Curso</b>

                                                <div style={{
                                                    display: "flex",
                                                    gap: "5px",
                                                }}>

                                                    <i >
                                                        {estado?.birthd || null}
                                                    </i>
                                                    <i>
                                                        ({estado?.grade || ""})
                                                    </i>
                                                </div>
                                            </div>

                                        )
                                    }
                                </div>
                                {estado.Subjects && (
                                    <div className={style.subjectNotes}>
                                        <b>Calificaciones por materia</b>
                                        {estado.Subjects.map(e => (
                                            <div className={style.subjectAndCalification} key={e.idSubject}>
                                                <div >
                                                    <i> Materia: </i>
                                                    <p>{e.subjec}</p>
                                                </div>
                                                <div >
                                                    <b>Calificacion en</b>
                                                    <div >
                                                        <p>{e.subjec}:</p> <br />
                                                        <p>{e.Promedio || "Sin promedio"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className={style.redireccionAPadre}>
                                    <button style={{ fontWeight: "900", backgroundColor: "#9AC0EE" }} onClick={() => Nav(-1)}>
                                        Volver al Perfil del Padre
                                    </button>
                                </div>
                            </div>
                        </section>
                        <div className={style.containerPicture}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly"
                                }}
                            >

                                <p>
                                    {estado?.fullName}
                                </p>
                                <p style={{ color: "#9AC0EE", fontWeight: "bold" }}>
                                    {estado?.rol === "student" ? "Alumno" : "no existe"}
                                </p>
                            </div>
                            <img className={style.imgRole} src={imagenHijo} alt="" />
                        </div>
                    </article>
                </div>


            </div >
        </>
    )
}
export default ParentsAndSons