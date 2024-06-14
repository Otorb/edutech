import { useEffect, useState } from 'react'
import { FiFolder,FiSend } from "react-icons/fi";
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import style from './Styles/message.module.css'
import NewMessage from './Components/NewMessage'
import ReceivingMessage from './Components/ReceivingMessage'
import { listHistoria } from '../../Api/history';



const MenssageModule = () => {
const exampleMessages = [
    {
      foto: "https://cdn.pixabay.com/photo/2022/09/02/20/03/man-7428290_1280.jpg",
      nombreProfesor: "Julio Catañeda Parra",
      curso:'A2',
      fecha: formatDistanceToNow(new Date(2023, 4, 1), { addSuffix: true, locale: es }),
      mensaje: "No olviden revisar el material de estudio para el próximo examen."
    },
    {
      foto: "https://cdn.pixabay.com/photo/2022/04/30/14/04/woman-7165664_1280.jpg",
      nombreProfesor: "Ana López Martínez",
      curso:'B1',
      fecha: formatDistanceToNow(new Date(2023, 5, 15), { addSuffix: true, locale: es  }),
      mensaje: "La próxima semana tendremos una reunión de padres para discutir el progreso de los alumnos."
    },
    {
      foto: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
      nombreProfesor: "Carlos García Pérez",
      curso:'A1',
      fecha: formatDistanceToNow(new Date(2023, 3, 20), { addSuffix: true , locale: es }),
      mensaje: "Por favor, recuerden entregar las tareas pendientes antes del viernes."
    },
    {
      foto: "https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_640.jpg",
      nombreProfesor: "María Fernández Gómez",
      curso:'C2',
      fecha: formatDistanceToNow(new Date(2023, 2, 10), { addSuffix: true, locale: es  }),
      mensaje: "La excursión del próximo mes está confirmada. Se enviarán más detalles por correo."
    },
    {
      foto: "https://cdn.pixabay.com/photo/2020/11/30/17/21/businessman-5791566_640.jpg",
      nombreProfesor: "Pedro Sánchez Rodríguez",
      curso:'C1',
      fecha: formatDistanceToNow(new Date(2023, 1, 25), { addSuffix: true, locale: es  }),
      mensaje: "Felicidades a todos los alumnos por su excelente desempeño en el último examen."
    }
  ];
    const [active, setActive] = useState('recibidos')
    const [dataHistory, setDataHistory] = useState([])

   

    useEffect(() => {
      const fetchData = async () => {
        try {
          const dataHistoria = await listHistoria();
          setDataHistory(dataHistoria.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
  
    }, []);

    console.log(dataHistory)

  return (
    <div className={style.containerMessageModule}>
        <h1 className={style.titleMessageModule}>Mensajes</h1>
        <p className={style.descriptionMessageModule}>
        Conecta, colabora y comunica: Aquí puedes enviar y recibir mensajes con padres, alumnos y profesores de manera rápida y sencilla. 
        </p>
        <section className={style.navMessage}>
        <span
        className={`${style.itemNavMessage} ${active === 'recibidos' ? style.active : ''}`}
        onClick={() => setActive('recibidos')}
      >
        <FiFolder />
        Mensajes Recibidos
      </span>
      <span
        className={`${style.itemNavMessage} ${active === 'nuevo' ? style.active : ''}`}
        onClick={() => setActive('nuevo')}
      >
        <FiSend />
        Nuevo Mensaje
      </span>
        </section>
        <section className={style.ContentMessage}>
           { active === 'recibidos' 
           ?
           dataHistory.map((item, index) => (
            <ReceivingMessage
              key={index}
              foto={'https://cdn.icon-icons.com/icons2/67/PNG/512/user_13230.png'}
              curso={item.cuorse}
              nombreProfesor={item.teacherName}
              fecha= {formatDistanceToNow(new Date(item.hour), { addSuffix: true, locale: es  })}
              mensaje={item.message}
            />
          ))
           :    
            <NewMessage/>
             } 
        </section>
        
    </div>
  )
}

export default MenssageModule