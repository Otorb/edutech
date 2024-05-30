
import { useState } from 'react'
import style from './style.module.css'
import { Parents } from './Parents'
import { imagenPadre, infoUser } from './ObjetoPrueba'


const Index = () => {

    let initialState = "Parents"
    initialState = "Son"
    initialState = "Parents"

    const Prevent = (e) => {
        e.preventDefault()
    }
    const [role, setRole] = useState(initialState)
    return (
        <>

            {
                initialState === "Parents" && (
                    <div className={style.bgContainer}>
                        <article className={style.articleRole}>
                            <div className={style.containerPicture}>
                                <img className={style.imgRole} src={imagenPadre} alt="" />
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
                                            Padre del alumno:
                                            <u>
                                                {infoUser.nameFather}-
                                                {infoUser.lastNameFather}
                                            </u>
                                        </p>
                                    </div>
                                    <div className={style.ToContantFather}>
                                        <b>Contacto: </b>
                                        <p>Email: <a href='' onClick={Prevent}>{infoUser.email}</a></p>
                                        <p>Telefono: <a href='' onClick={Prevent}>{infoUser.phone}</a></p>
                                        <p>Direccion: <a href='' onClick={Prevent}>{infoUser.address}</a></p>
                                    </div>
                                    <div className={style.redireccionDeUsuario}>
                                        <div className={style.infoNameAnotherUser}>
                                            {
                                                <Parents
                                                    data={infoUser.hijos}
                                                    setRole={setRole}
                                                />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </div>
                )
            }
        </>
    )
}
export default Index
