import CardPromedio from "../card/CardPromedio";
import style from "../stylecards/CardsPromedio.module.css"

const informacion = [
  { id: 1, promedio: '10% peor, se recomienda que estudie 2 horas más por día ' },
  { id: 2, promedio: '30% mejor, sigue asi 👍' },
  { id: 3, promedio: '80% peor, se recomienda que estudie 5 horas más por día' },
  { id: 4, promedio: '50% mejor, sigue asi 👍' },
]

const CardsPromedio = () => {
  return (
    <div className={style.container}>
        {informacion.map((info) => (
          <CardPromedio
          key={info.id}
          promedio={info.promedio}
          />
        ))}
    </div>
  )
}

export default CardsPromedio;