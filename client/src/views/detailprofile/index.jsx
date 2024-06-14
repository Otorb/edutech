import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from "../../Hooks/useAppSelector";
import style from "./style/detailProfile.module.css";
import { IoIosSchool } from "react-icons/io";
import { FiCalendar, FiCheckSquare } from "react-icons/fi";
import { differenceInYears } from 'date-fns';
import { useEffect, useState } from "react";
import CardPromedio from "./components/CardPromedio";
import CardEvent from "../../components/Eventos/CardEvent";
import { oneStudient, listStudients } from "../../Api/Studient";

const DetailProfile = () => {
  const { id } = useParams();

  //const dataEvent = useAppSelector(state=>state.event.eventData) 
  

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
  const [active, setActive] = useState('resumen');
  const [data, setData] = useState(null);

  const navigate=useNavigate()

  useEffect(() => {

    if (dataUser.role === 'admin' || dataUser.role === 'teacher'){
      return navigate('/dashboard')
    }

    const fetchData = async () => {
      if (dataUser.role === 'student') {
        setData(dataUser);
      } else if (dataUser.role === 'parent') {
        try {
          const response = await oneStudient(id);
          const studentData = response.data.resultStudent;
      
          const allStudentsResponse = await listStudients();
          const allStudentsData = allStudentsResponse.data?.resultStudent || [];
      
          const fullStudentData = allStudentsData.find(student => student.email === studentData.email);
      
          if (fullStudentData) {
            // Combinar los datos de studentData con los datos completos de fullStudentData
            const combinedData = {
              ...studentData,
              ...fullStudentData,
              // Asegurarse de que los campos de studentData prevalezcan en caso de conflicto
            };
            setData(combinedData);
          } else {
            setData(studentData);
          }
        } catch (error) {
          console.error("Error fetching student:", error);
        }
      }
      
    };
    console.log('obtenido:',data)
    fetchData();
  }, [dataUser, id]);

  const calculateAge = (birthDate) => {
    const birth = new Date(birthDate);
    return differenceInYears(new Date(), birth);
  };

  const calculateAverage = (notas) => {
    if (!notas || notas.length === 0) {
      return 0;
    }
    const sum = notas.reduce((acc, curr) => acc + parseInt(curr.nota, 10), 0);
    return Math.round(sum / notas.length);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.containerDetailProfile}>
      <h1 className={style.titleWelcome}>
        <IoIosSchool className={style.iconWelcome} /> ¡Bienvenidos al Sistema de
        Gestión Escolar!
      </h1>
      <br />
      <section className={style.headDetailProfile}>
        <span className={style.itemHeadDetailProfile} onClick={() => setActive('resumen')}>
          <FiCheckSquare /> Resumen Académico
        </span>
        <span className={style.itemHeadDetailProfile} onClick={() => setActive('evento')}>
          <FiCalendar /> Eventos y Actividades
        </span>
      </section>
      {active === 'resumen' ? (
        <>
          <section className={style.infoDetailProfile}>
            <span>
              <strong>Alumno: </strong> {data.fullName}
            </span>
            <span>
              <strong>Email: </strong> {data.email}
            </span>
            <span>
              <strong>Edad: </strong> {calculateAge(data.birthd)} años
            </span>
            {dataUser.role === 'parent' && (
              <>
                <span>
                  <strong>Teléfono: </strong> {data.phone}
                </span>
                <span>
                  <strong>Estado de Registro: </strong> {data.registration}
                </span>
              </>
            )}
            <span>
              <strong>Total de Cursos: </strong> {data.Curso?.length || 0}
            </span>
            <span>
              <strong>Curso: </strong> {data.Curso?.curso || 'N/A'}
            </span>
          <img src={data.photo} alt="Foto del estudiante" className={style.studentPhoto} />
            <section className={style.listPromediosDetailProfile}>
              <h1> PROMEDIOS POR CURSOS</h1>
              <section className={style.itemPromedio}>
                {data.Curso?.Subjects && data.Curso.Subjects.map(subject => (
                  <CardPromedio
                    key={subject.idSubject}
                    materia={subject.subjec}
                    promedio={calculateAverage(subject.Notas)}
                    id={id}
                  />
                ))}
              </section>
            </section>
          </section>
        </>
      ) : (
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
      )}
    </div>
  );
};

export default DetailProfile;





