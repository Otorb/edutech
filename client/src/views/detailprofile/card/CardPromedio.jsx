import style from '../stylecard/CardPromedio.module.css';

const CardPromedio = ({ promedio }) => {
  return (
    <div className={style.container}>
      <h2>Promedio: </h2>
        <ul>
          <li>{promedio}</li>
        </ul>
    </div>
   
  )
}

export default CardPromedio;

