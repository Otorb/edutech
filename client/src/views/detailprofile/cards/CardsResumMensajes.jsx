import CardResumMensajes from "../card/CardResumMensajes";
import style from "../stylecards/CardsResumMensajes.module.css"


const informacion = [
  { id: 1, resumenDeMensajes: 'hola no podre ir hoy debido a problemas de salud' },
  { id: 2, resumenDeMensajes: 'no pagare la cuota este mes' },
  { id: 3, resumenDeMensajes: 'mañana no hay clases' },
  { id: 4, resumenDeMensajes: 'mañana suspención de actividades debido al calor' },
  { id: 5, resumenDeMensajes: 'mañana no hay clases' },
  { id: 6, resumenDeMensajes: 'mañana suspención de actividades debido al calor' },
  { id: 7, resumenDeMensajes: 'mañana suspención de actividades debido al calor' },
  { id: 8, resumenDeMensajes: 'mañana no hay clases' },
  { id: 9, resumenDeMensajes: 'mañana no hay clases' },
  { id: 10, resumenDeMensajes: 'mañana suspención de actividades debido al calor' },
]

const CardsResumMensajes = () => {
  return (
    <div className={style.container}>
        {informacion.map((info) => (
          <CardResumMensajes
          key={info.id}
          resumenDeMensajes={info.resumenDeMensajes}
          />
        ))}
    </div>
  )
}

export default CardsResumMensajes;