import './cardevent.css'

const CardEvent = ({ dia, hora, titulo, descripcion }) => {

  return (
    <div className="containerCardEvent">
        <section className="dateCardEvent">
            <span className="diaCardEvent">
                {dia}
            </span>
            <span className="horaCardEvent">
                {hora} hs
            </span>
        </section>
        <section className="infoCardEvent">
            <h1 className="titleCardEvent">
                {titulo}
            </h1>
            <p className="descriptionCardEvent">
               {descripcion}
            </p>
        </section>
    </div>
  )
}

export default CardEvent