
import { useAppSelector } from "../../Hooks/useAppSelector";
import style from "./style/detailProfile.module.css";
import { IoIosSchool } from "react-icons/io";
import { FiCalendar, FiCheckSquare } from "react-icons/fi";
import { differenceInYears } from 'date-fns';
import { useState } from "react";
import CardPromedio from "./components/CardPromedio";
import CardEvent from "../../components/Eventos/CardEvent";

const DetailProfile = () => {

  const exampleEvents = [
    {
      dia: '2024-06-15',
      hora: '10:00',
      titulo: 'Reunión de Padres',
      descripcion: 'Reunión mensual para discutir el progreso de los estudiantes y planes futuros.'
    },
    {
      dia: '2024-06-20',
      hora: '14:00',
      titulo: 'Excursión a Museo',
      descripcion: 'Visita guiada al Museo de Ciencias Naturales para los estudiantes de 4to grado.'
    },
    {
      dia: '2024-06-25',
      hora: '09:00',
      titulo: 'Taller de Matemáticas',
      descripcion: 'Taller interactivo para mejorar las habilidades matemáticas de los alumnos.'
    },
    {
      dia: '2024-06-30',
      hora: '11:00',
      titulo: 'Festival de Música',
      descripcion: 'Festival anual de música donde los estudiantes presentan sus talentos musicales.'
    },
    {
      dia: '2024-07-05',
      hora: '13:00',
      titulo: 'Charla Motivacional',
      descripcion: 'Charla motivacional para inspirar a los estudiantes a alcanzar sus metas académicas.'
    }
  ];

  const dataUser = useAppSelector((state) => state.user.data);

  const [active, setActive] = useState('resumen')

  const calculateAge = (birthDate) => {
    const birth = new Date(birthDate);
    const age = differenceInYears(new Date(), birth);
    return age;
  };

  const generateRandomAverage = () => {
    const randomAverage = Math.floor(Math.random() * 5) + 6; 
    return randomAverage * 10; 
  };

  return (
    <div className={style.containerDetailProfile}>
      <h1 className={style.titleWelcome}>
        <IoIosSchool className={style.iconWelcome} /> ¡Bienvenidos al Sistema de
        Gestión Escolar!
      </h1>
      <br />
      <section className={style.headDetailProfile}>
        <span className={style.itemHeadDetailProfile}
        onClick={()=>setActive('resumen')}
        ><FiCheckSquare /> Resumen Académico</span>
        <span className={style.itemHeadDetailProfile}
        onClick={()=>setActive('evento')}
        ><FiCalendar /> Eventos y Actividades</span>
      </section>
      {active === 'resumen' 
      ?
      <>
      <section className={style.infoDetailProfile}>
        <span>
         <strong>Alumno: </strong> {dataUser.fullName}
        </span>
        <span>
        <strong>Email: </strong> {dataUser.email}
        </span>
        <span>
        <strong>Edad: </strong> {calculateAge(dataUser.birthd)} años
        </span>
        <span>
        <strong>Total de Cursos: </strong> {'3'} 
        </span>
         <span>
        <strong>Curso: </strong> {dataUser.Curso.curso} 
        </span> 
      </section>
      <section className={style.listPromediosDetailProfile}>
          <h1> PROMEDIOS POR CURSOS</h1>
          <section className={style.itemPromedio}>
            {dataUser.Curso.Subjects.map(subject => (
          <CardPromedio
            key={subject.idSubject}
            materia={subject.subjec}
            promedio={generateRandomAverage()} 
          />
        ))}
          </section>
          
      </section>
      </>
      
      :
      <section className={style.contentEventProfile}>
      {exampleEvents.map((item, idx) => (
        <CardEvent
          key={idx}
          dia={item.dia}
          hora={item.hora}
          titulo={item.titulo}
          descripcion={item.descripcion}
        />
      ))}
    </section>
      }
      
    </div>
  );
};

export default DetailProfile;

