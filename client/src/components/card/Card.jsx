import style from './Card.module.css';
import { FaWalking } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";
const Card = ({ evento, hora, verMas, descripcion, fecha }) => {
  return (
    <>
      <div className={style.Card}>

        <div className={style.HourToEvent}>

          <FaWalking className={style.walk} />

          <div className={style.HourWithDetail}>
            <CiStopwatch />
            <h2>{fecha}</h2>
              -
            <h2>{hora}</h2>
          </div>
        </div>
        <div>
          <h2>{evento}</h2>
        </div>
        <div>
          <h2 className={style.Description}>Descripcion: {descripcion}</h2>
        </div>
        <div >
        </div>
        <div className={style.WatchMore}>
          {/* para redirigir a otra seccion se va a usar useNavigate acá */}
          <h2 >Ver mas</h2>

        </div>
      </div>
    </>
  )
}

export default Card;