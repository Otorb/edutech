import CardExamenes from "../card/CardExamenes";
import style from "../stylecards/CardsExamenes.module.css"

const informacion = [
  { id: 1, examenes: 'matematicas' },
  { id: 2, examenes: 'ingles' },
  { id: 3, examenes: 'programación' },
  { id: 4, examenes: 'fisica' },
  { id: 5, examenes: 'fisica' },
  { id: 6, examenes: 'fisica' },
  { id: 7, examenes: 'fisica' },
  { id: 8, examenes: 'fisica' },
  { id: 9, examenes: 'fisica' },
  { id: 10, examenes: 'fisica' },
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