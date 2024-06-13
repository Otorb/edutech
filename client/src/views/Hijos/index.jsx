import { useAppSelector } from '../../Hooks/useAppSelector';
import CardHijos from './components/CardHijos'
import style from './style/hijos.module.css'

const Hijos = () => {

    const dataUser = useAppSelector((state) => state.user.data);

  return (
    <div className={style.containerHijos}>
        <h1 className={style.titleHijos}> Seleccione un Hijo/a</h1>

        <section className={style.contentHijos}>
            {dataUser.Students.map( student =>(
                <CardHijos
                    key={student.parentId}
                    idStudent={student.studentId}
                    photo={student.photo}
                    name={student.fullName}
                    email={student.email}
                />

            ))}
        </section>
    </div>
  )
}

export default Hijos