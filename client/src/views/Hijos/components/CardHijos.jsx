import { useNavigate } from 'react-router-dom'
import style from '../style/cardhijo.module.css'

const CardHijos = ({photo, name, email, idStudent}) => {

    const navigate=useNavigate()

  return (
    <div className={style.containerCardHijo}>
        <div className={style.contentCardHijo}>
            <img src={photo} alt="foto" className={style.photoCardHijo}/>
            <span className={style.dataCardHijo}>{name}</span>
            <span className={style.dataCardHijo}>{email}</span>
        </div>
        <button className={style.btnCardHijo}
        onClick={()=>navigate(`/dashboard/profile/${idStudent}`)}
        > Detalle </button>
    </div>
  )
}

export default CardHijos