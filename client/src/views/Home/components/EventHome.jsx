import style from '../styles/eventoHome.module.css'
import image1 from '../utility/slider/1.jpg'
import image2 from '../utility/slider/2.jpg'
import image3 from '../utility/slider/3.jpg'
import image4 from '../utility/slider/4.jpg'
import image5 from '../utility/slider/5.jpg'


const EventHome = () => {
  return (
    <div
    className={style.containerEventoHome}
      id='eventoHome'
    >

      <input className={style.inputSlider} id='slide1' type="radio" name='group' checked />
      <input className={style.inputSlider} id='slide2' type="radio" name='group' />
      <input className={style.inputSlider} id='slide3' type="radio" name='group' />
      <input className={style.inputSlider} id='slide4' type="radio" name='group' />
      <input className={style.inputSlider} id='slide5' type="radio" name='group' />

      <div className={style.dots}>
        <label className={style.labelSlider} htmlFor='slide1'></label>
        <label className={style.labelSlider} htmlFor='slide2'></label>
        <label className={style.labelSlider} htmlFor='slide3'></label>
        <label className={style.labelSlider} htmlFor='slide4'></label>
        <label className={style.labelSlider} htmlFor='slide5'></label>
      </div>

      <div className={style.slider}>
        <div className={style.slide} htmlFor='slide1' style={{ backgroundImage: `url(${image5})` }} >

          <div className={style.contentSlider1}>
            <h2>30 Marzo</h2>
            <h3> 17:00 PM</h3>
          </div>
          <div className={style.contentSlider2}>
            <h2>Evento 1</h2>
            <p className={style.parrafoSlider}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet nam ut quidem qui. Voluptas necessitatibus, iste laborum autem eligendi neque velit architecto distinctio placeat asperiores id soluta et vero ipsam.</p>
          </div>
        </div>
        <div className={style.slide} htmlFor='slide2' style={{ backgroundImage: `url(${image2})` }}>

        <div className={style.contentSlider1}>
            <h2>30 Marzo</h2>
            <h3> 17:00 PM</h3>
          </div>
          <div className={style.contentSlider2}>
            <h2>Evento 2</h2>
            <p className={style.parrafoSlider}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet nam ut quidem qui. Voluptas necessitatibus, iste laborum autem eligendi neque velit architecto distinctio placeat asperiores id soluta et vero ipsam.</p>
          </div>
        </div>
        <div className={style.slide} htmlFor='slide3' style={{ backgroundImage: `url(${image3})` }}>

        <div className={style.contentSlider1}>
            <h2>30 Marzo</h2>
            <h3> 17:00 PM</h3>
          </div>
          <div className={style.contentSlider2}>
            <h2>Evento 3</h2>
            <p className={style.parrafoSlider}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet nam ut quidem qui. Voluptas necessitatibus, iste laborum autem eligendi neque velit architecto distinctio placeat asperiores id soluta et vero ipsam.</p>
          </div>
        </div>
        <div className={style.slide} htmlFor='slide4' style={{ backgroundImage: `url(${image4})` }}>
        <div className={style.contentSlider1}>
            <h2>30 Marzo</h2>
            <h3> 17:00 PM</h3>
          </div>
          <div className={style.contentSlider2}>
            <h2>Evento 4</h2>
            <p className={style.parrafoSlider}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet nam ut quidem qui. Voluptas necessitatibus, iste laborum autem eligendi neque velit architecto distinctio placeat asperiores id soluta et vero ipsam.</p>
          </div>
        </div>
        <div className={style.slide} htmlFor='slide5' style={{ backgroundImage: `url(${image1})` }}>
        <div className={style.contentSlider1}>
            <h2>30 Marzo</h2>
            <h3> 17:00 PM</h3>
          </div>
          <div className={style.contentSlider2}>
            <h2>Evento 5</h2>
            <p className={style.parrafoSlider}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet nam ut quidem qui. Voluptas necessitatibus, iste laborum autem eligendi neque velit architecto distinctio placeat asperiores id soluta et vero ipsam.</p>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default EventHome