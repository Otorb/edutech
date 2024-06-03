import { FaUserCircle } from "react-icons/fa";
import style from "../style/DetallesNombre.module.css"

const DetallesNombre = () => {
  return (
    <div className={style.container}>
      <FaUserCircle className={style.icon}/>
      <div className={style.content}>
      <h3>Nombre: Juan</h3>
      <h3>apellido: Perez</h3>
      </div>
    </div>
  )
}

export default DetallesNombre

{/*este componente seria el que muestra los nombres y las fotos de cada uno */}