import CardEventos from "../card/CardEventos";
import style from "../stylecards/CardsEventos.module.css"


// const informacion = [
//   { id: 1, eventos: 'desayuno colectivo ☕' },
//   { id: 2, eventos: 'carrera de bicicletas 🏍️' },
//   { id: 3, eventos: 'carrera de caballos 🏇' },
//   { id: 4, eventos: 'concurso de stand up 🎤' }
// ];


const informacion = [
  { id: 1, eventos: 'desayuno colectivo ☕' },
  { id: 2, eventos: 'carrera de bicicletas 🏍️' },
  { id: 3, eventos: 'carrera de caballos 🏇' },
  { id: 4, eventos: 'concurso de stand up 🎤' },
  { id: 5, eventos: 'competencia de natación 🏊' },
  { id: 6, eventos: 'torneo de ajedrez ♟️' },
  { id: 7, eventos: 'torneo de ajedrez ♟️' },
  { id: 8, eventos: 'torneo de ajedrez ♟️' },
  { id: 9, eventos: 'torneo de ajedrez ♟️' },
  { id: 10, eventos: 'torneo de ajedrez ♟️' },
  { id: 11, eventos: 'torneo de ajedrez ♟️' },
  { id: 12, eventos: 'torneo de ajedrez ♟️' }
];


                    //<!={informacion va ahi }
const CardsEventos = () => { 


  return (
    <div className={style.container}>
        {informacion.map((info) => (
          <CardEventos
          key={info.id}
          eventos={info.eventos}
          />
        ))}
    </div>
  )
}

export default CardsEventos;
