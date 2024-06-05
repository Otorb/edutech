import React from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { imagenHijo, imagenPadre, infoUser } from './ObjetoPrueba'
import { useAppSelector } from '../../Hooks/useAppSelector'
const ParentsAndSons = ({ estado }) => {

    const state = estado


    // console.log(state)
    return (
        <>
            <div className={style.bgContainer}>
                <article className={style.articleRole}>
                    <section className={style.infoUser}>
                        <div className={style.ContainerUserInfo}>

                            <div className={style.ToContactUser}>
                                <div>
                                    <b>Email  </b>
                                    <a href='' onClick={(e) => e.preventDefault()}>{state?.email}</a>
                                </div>
                                <div>
                                    <b>Celular  </b>
                                    <a href='' onClick={(e) => e.preventDefault()}>{state?.phone}</a>
                                </div>

                                {state?.rol === "parent" && (
                                    (<div>
                                        <b>Direccion  </b>
                                        <a href='' onClick={(e) => e.preventDefault()}>{state?.address || "no hay direccion"}</a>
                                    </div>)
                                )}
                                {state?.rol === "student" &&
                                    <div className={style.birthdayAndGrade}>
                                        <b >F. de Nacimiento & Curso</b>
                                        <div style={{
                                            display: "flex",
                                            gap: "5px",
                                        }}>
                                            <i >
                                                {state?.birthd || null}
                                            </i>
                                            <i>
                                                ({state?.grade || ""})
                                            </i>
                                        </div>
                                    </div>}

                            </div>
                            {state?.rol === "student" && (
                                <div className={style.subjectNotes}>
                                    <div>

                                        <b>Calificaciones por materia</b>
                                    </div>
                                    {state?.Subjects.map(e => (
                                        <div key={e?.idSubject} className={style.subjectAndCalification} >
                                            <div >
                                                <b> Materia: </b>
                                                <b>{e?.subjec}</b>
                                            </div>
                                            <div >
                                                <b>Calificacion en</b>
                                                <div >
                                                    <b>{e?.subjec}:</b> <br />
                                                    <b>vacío</b>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className={style.redireccionAPadre}>
                                <button style={{ fontWeight: "900", backgroundColor: "#9AC0EE" }} >
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
                                {state?.fullName}
                            </p>
                            {
                                estado?.rol === "student" ?
                                    <p style={{ color: "#9AC0EE", fontWeight: "bold" }}>
                                        Alumno
                                    </p> : null
                            }
                        </div>
                        <img className={style.imgRole} src={imagenHijo} alt="" />
                    </div>
                </article>
            </div>
        </>
    )
}
export default ParentsAndSons