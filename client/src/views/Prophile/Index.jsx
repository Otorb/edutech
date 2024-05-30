
import { useState } from 'react'
import style from './style.module.css'
import { Parents } from './Parents'
import Sons from './Sons'


const Index = () => {
    let initialState = "Parents"

    initialState = "Son"
    initialState = "Parents"

    const Prevent = (e) => {
        e.preventDefault()
    }
    const [role, setRole] = useState(initialState)

    const infoUser = {
        nameFather: 'Ernesto',
        lastNameFather: 'Pereira',
        nameMother: 'Marcela',
        lastNameMother: 'Cassandro',
        email: 'aFtXa@example.com',
        phone: '123456789',
        address: 'Calle falsa 123',
        hijos: [
            {
                id: 1,
                name: 'Bruno',
                lastName: 'Perez',
                email: 'aFtXa@example.com',
                phone: '123456789',
            },
            {
                id: 2,
                name: 'Pedro',
                lastName: 'Santoro',
                email: 'fgdsgsd@example.com',
                phone: '747474363',
            },
        ]
    }

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

    const imagen = `https://pbs.twimg.com/media/E7aEcECWEAsWRwW?format=jpg&name=small`


    return (
        <>

            {
                initialState === "Parents" && (
                    <div className={style.bgContainer}>
                        <article className={style.articleRole}>
                            <div className={style.containerPicture}>
                                <img className={style.imgRole} src={imagen} alt="" />
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
                                            Padre:
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
                                    <div className={style.redireccionHijo}>
                                        <div>
                                            <div className={style.infoNameSons}>
                                                {
                                                    <Parents
                                                        data={infoUser.hijos}
                                                        setRole={setRole}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </div>
                )
            }
            {/* {
                initialState === "Son" && (
                    <div className={style.bgContainer}>
                    <article className={style.articleRole}>
                        <div className={style.containerPicture}>
                            <img className={style.imgRole} src={imagen} alt="" />
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
                                        Padre:
                                        <u>
                                            {infoSon.name}-
                                            {infoSon.lastName}
                                        </u>
                                    </p>
                                </div>
                                <div className={style.ToContantFather}>
                                    <b>Contacto: </b>

                                    <p>Email: <a href='' onClick={Prevent}>{infoSon.email}</a></p>
                                    <p>Telefono: <a href='' onClick={Prevent}>{infoSon.phone}</a></p>
                                    <p>Direccion: <a href='' onClick={Prevent}>{infoSon.address}</a></p>
                                </div>
                                <div className={style.redireccionHijo}>
                                    <div>
                                        <div className={style.infoNameSons}>
                                            {
                                                <Sons
                                                // data={infoSon}
                                                setRole={setRole}
                                            />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
                )
            } */}
        </>
    )
}
export default Index
