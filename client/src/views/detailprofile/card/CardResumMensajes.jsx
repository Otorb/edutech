import style from '../stylecard/CardResumMensajes.module.css';

const CardResumMensajes = ({ resumenDeMensajes }) => {
    return (
      <div className={style.container}>
        <h2>Resumen de Mensajes: </h2>
          <ul>
            <li>{resumenDeMensajes}</li>
          </ul>
      </div>
     
    )
  }
  
export default CardResumMensajes;
  