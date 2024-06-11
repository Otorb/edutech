import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { imagenHijo, imagenPadre, infoUser } from './ObjetoPrueba'
import { useAppSelector } from '../../Hooks/useAppSelector'
const ParentsAndSons = ({ estado }) => {
    const state = estado

    console.log(parent)
    const student = estado
    console.log(student)

    return (
        <>
            <div className={style.bgContainer}>
                <article className={style.articleRole}>
                    <section className={style.infoUser}>
                        <div className={style.ContainerUserInfo}>

                            <div className={style.ToContactUser}>
                                <div>
                                    <b>Email  </b>
                                    <a href='' onClick={(e) => e.preventDefault()}>{student?.email}</a>
                                </div>
                                <div>
                                    <b>Celular  </b>
                                    <a href='' onClick={(e) => e.preventDefault()}>{student?.phone}</a>
                                </div>

                                {parent?.role === "parent" && (
                                    (<div>
                                        <b>Direccion  </b>
                                        <a href='' onClick={(e) => e.preventDefault()}>{student?.address || "no hay direccion"}</a>
                                    </div>)
                                )}
                                {student?.rol === "student" &&
                                    <div className={style.birthdayAndGrade}>
                                        <b >F. de Nacimiento & Curso</b>
                                        <div className={style.FechNavYGrado} >
                                            <b >
                                                {student?.birthd || null}
                                            </b>
                                            <b>
                                                ({student?.grade || ""})
                                            </b>
                                        </div>
                                    </div>}

                            </div>
                            {student?.rol === "student" && (
                                <div className={style.subjectNotes}>
                                    <div>
                                        <b className={style.titleQualifications}>Calificaciones por materia</b>
                                    </div>
                                    {student?.Subjects.map(e => (
                                        <div key={e?.idSubject} className={style.subjectAndCalification} >
                                            <div className={style.ChildsubjectAndCalification}>
                                                <b> Materia: ({e?.subjec})</b>
                                            </div>
                                            <div>

                                                <b>Calificacion en {e?.subjec} (vacío)</b>
                                            </div>
                                            --
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className={style.redireccionAPadre}>

                                <Link to="/dashboard/profile">
                                    <button>
                                        Detalles
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <div className={style.containerPicture}>
                        <section>

                            <div>
                                <p className={style.Name}>{student?.fullName}</p>

                            </div>
                            <div>
                                {
                                    estado?.rol === "student" ?
                                        <p className={style.RolTitle} >
                                            Alumno
                                        </p> : null
                                }

                            </div>
                        </section>
                        <img className={style.imgRole} src={imagenHijo} alt="" />
                    </div>
                </article>
            </div>
        </>
    )
}
export default ParentsAndSons