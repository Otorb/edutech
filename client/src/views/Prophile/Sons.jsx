import React from 'react'
import style from './style.module.css'
import { FaRegEye } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { infoUser } from './ObjetoPrueba'
import { useAppSelector } from '../../Hooks/useAppSelector'
const Sons = ({
    // data
}) => {

    const parametros = useParams()

    const Nav = useNavigate()


    const FunctionfilterSon = () => {
        let filterSon;
        return filterSon = infoUser.hijos.find(e => e.name === parametros.name)
    }

    const cumpleañosGrado = {
        display: "flex",
        gap: "5px",
    }
    const SelectedSon = FunctionfilterSon()

    const userData = useAppSelector((state) => state.user.data);
    console.log(userData)

    return (
        <>
            <div>

                {/* <h1>{SelectedSon.name}</h1> */}
                <div className={style.bgContainer}>
                    <article className={style.articleRole}>

                        <section className={style.infoUser}>
                            <div className={style.ContainerUserInfo}>

                                <div className={style.ToContactUser}>
                                    <div>
                                        <b>Email  </b>
                                        <a href='' onClick={(e) => e.preventDefault()}>{userData?.email}</a>
                                    </div>
                                    <div>
                                        <b>Celular  </b>
                                        <a href='' onClick={(e) => e.preventDefault()}>{userData?.phone}</a>
                                    </div>
                                    <div className={style.birthdayAndGrade}>
                                        <b >F. de Nacimiento & Curso</b>

                                        <div style={cumpleañosGrado}>

                                            <i >
                                                {userData?.birthd}
                                            </i>
                                            <i>
                                                ({userData?.grade})
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.subjectNotes}>
                                    <b>Calificaciones por materia</b>
                                    {userData?.Subjects.map(e => (
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
                                    {userData?.fullName}
                                </p>
                                <p style={{ color: "#9AC0EE", fontWeight: "bold" }}>
                                    {userData?.rol === "student" ? "Alumno" : "no existe"}
                                </p>
                            </div>
                            <img className={style.imgRole} src={SelectedSon.imagen} alt="" />
                        </div>
                    </article>
                </div>


            </div>
        </>
    )
}
export default Sons