
import { useState } from 'react'
import style from './style.module.css'


const Users = () => {
    let initialState = "Parents"
    
    initialState = "Son"
    initialState = "Parents"

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
                name: 'Bruno',
                lastName: 'Perez',
                email: 'aFtXa@example.com',
                phone: '123456789',
            },
            {
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
                                    <div className={style.nameLastName}>
                                        <p>Nombre del padre: {infoUser.nameFather}</p>
                                        <p>Apellido del padre: {infoUser.lastNameFather}</p>
                                    </div>
                                    <div className={style.redireccionHijo}>
                                        <div>
                                            <div className={style.infoNameSons}>
                                                <p >{infoUser.hijos.map((hijo) => (hijo.name))}</p>
                                                <p >{infoUser.hijos.map((hijo) => (hijo.lastName))}</p>
                                            </div>

                                            <button >
                                                Perfil del hijo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </div>
                )
            }
            {
                initialState === "Son" && (
                    <div className={style.bgContainer}>
                        <article className={style.articleRole}>
                            <div className={style.containerPicture}>
                                <img className={style.imgRole} src={imagen} alt="" />
                            </div>
                            <section className={style.infoUser}>
                                <div className={style.ContainerUserInfo}>
                                    <div className={style.nameLastName}>
                                        <p>Nombre padre: {infoSon.name}</p>
                                        <p>Apellido padre: {infoSon.lastName}</p>
                                    </div>
                                    <div className={style.redireccionDeUsuario}>
                                        <div>
                                            <div className={style.infoNameAnotherUser}>
                                                <p>{infoSon.parents.map((padre) => (padre.name))}</p>
                                            </div>
                                            <button >
                                                Perfil del padre
                                            </button>
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
export default Users