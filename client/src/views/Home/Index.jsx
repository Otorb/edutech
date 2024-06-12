import Navbar from '../../components/Navbar/Navbar'
import ContactHome from './components/ContactHome'
import Style from './styles/home.module.css'
import Portada from './utility/homeREMOVE.png'
import EventHome from './components/EventHome'

const Index = () => {
  return (
    <>
       <div className={Style.containerHome} id='inicio'>
        <Navbar/>
        <section className={Style.contentPortadaHome}>
          <div className={Style.infoHome}>
            <span>Tu escuela digital</span>
            <h1>EDUSYNC</h1>
            <p>Nuestra herramienta integral facilita la colaboracion entre <br />
            los distintos participantes 
              que la componen</p>
          </div>
          <img src={Portada} alt="Portada" />
        </section>
      </div>
      <div id='eventoHome'>
        <EventHome/>
      </div>
      <div id='contactoHome'>
        <ContactHome/>
      </div>
    </>
  )
}

export default Index