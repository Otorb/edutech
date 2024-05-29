import React from 'react'
import DetallesNombre from './components/DetallesNombre'
import DetailTodo from './components/DetailTodo'

const index = () => {
  return (
    <div>
      {/*detalle del profile aca viene los de las componentes y se ubucan todos uno debajo de otro
      este es el home estudiantes*/}
      <br /> <br /> <br />
      <DetallesNombre /> <br /> <br /> <br /> <br />
      <DetailTodo />
    </div>
  )
}

export default index
