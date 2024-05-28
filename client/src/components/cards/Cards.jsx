import { Average } from "../Average/Average";
import Card from "../card/Card";
import style from "./Cards.module.css";

const Cards = ({informacion}) => {
  return (
    <div >
        {informacion.map((info) => (
          <Card
          key={info.id}
          evento={info.evento}
          descripcion={info.descripcion}
          hora={info.hora}
          fecha={info.fecha}
          verMas={info.verMas}
          />
        ))}
        <Average/>
    </div>
  )
}

export default Cards;