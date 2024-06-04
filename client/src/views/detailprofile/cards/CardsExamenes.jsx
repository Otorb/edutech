import CardExamenes from "../card/CardExamenes";
import style from "../stylecards/CardsExamenes.module.css"

const informacion = [
  { id: 1, examenes: 'matematicas' },
  { id: 2, examenes: 'ingles' },
  { id: 3, examenes: 'programación' },
  { id: 4, examenes: 'fisica' },
]

const CardsExamenes = () => {
  return (
    <div className={style.container}>
        {informacion.map((info) => (
          <CardExamenes
          key={info.id}
          examenes={info.examenes}
          />
        ))}
    </div>
  )
}

export default CardsExamenes;