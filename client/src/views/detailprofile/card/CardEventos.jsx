import style from '../stylecard/CardEventos.module.css';

const CardEventos = ({ eventos }) => {
    return (
      <div className={style.container}>
      <div>
        <h2>Eventos: </h2>
          <ul>
            <li>{eventos}</li>
          </ul>
      </div>
      </div>
     
    )
  }
  
export default CardEventos;