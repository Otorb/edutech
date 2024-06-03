import { useNavigate } from 'react-router-dom';
import style from './style/notFound.module.css'
import { TiArrowBackOutline } from "react-icons/ti";

const index = () => {

    const navigate=useNavigate()


  return (
    <div className={style.containerNotFound}>
        <button 
        className={style.btnNotFound}
        onClick={()=>navigate('/')}
        > <TiArrowBackOutline /> Volver a la Pagina</button>
    </div>
  )
}

export default index