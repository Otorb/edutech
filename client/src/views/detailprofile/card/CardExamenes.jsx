import style from '../stylecard/CardExamenes.module.css';


const CardExamenes = ({ examenes }) => {
    return (
      <div className={style.container}>
        <h2>Examenes: </h2>
          <ul>
            <li>{examenes}</li>
          </ul>
      </div>
     
    )
  }
  
export default CardExamenes;