import React from 'react';
import style from '../styles/eventoHome.module.css';
import image1 from '../utility/slider/1.jpg';
import image2 from '../utility/slider/2.jpg';
import image3 from '../utility/slider/3.jpg';
import image4 from '../utility/slider/4.jpg';
import image5 from '../utility/slider/5.jpg';

const events = [
  {
    title: "Reunión Académica",
    hora: "17:00 PM",
    fecha: "30 Marzo",
    mensaje: "Reunión para discutir el rendimiento académico y el progreso de los estudiantes con los padres y profesores.",
    image: image1
  },
  {
    title: "Taller de Ciencia",
    hora: "10:00 AM",
    fecha: "5 Abril",
    mensaje: "Un taller interactivo donde los estudiantes pueden participar en experimentos científicos y aprender sobre diferentes temas de ciencia.",
    image: image2
  },
  {
    title: "Feria de Proyectos",
    hora: "09:00 AM",
    fecha: "12 Abril",
    mensaje: "Exposición de los proyectos realizados por los estudiantes durante el semestre. Los padres y profesores están invitados a asistir.",
    image: image3
  },
  {
    title: "Charla Motivacional",
    hora: "15:00 PM",
    fecha: "18 Abril",
    mensaje: "Una charla motivacional impartida por un experto en educación para inspirar a los estudiantes a alcanzar sus metas académicas.",
    image: image4
  },
  {
    title: "Día de la Familia",
    hora: "08:00 AM",
    fecha: "25 Abril",
    mensaje: "Un día dedicado a actividades recreativas y deportivas para que los estudiantes y sus familias disfruten juntos.",
    image: image5
  }
];

const EventHome = () => {
  return (
    <div className={style.containerEventoHome} id='eventoHome'>
      <input className={style.inputSlider} id='slide1' type="radio" name='group' defaultChecked />
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
        {events.map((event, index) => (
          <div key={index} className={style.slide} htmlFor={`slide${index + 1}`} style={{ backgroundImage: `url(${event.image})` }}>
            <div className={style.contentSlider1}>
              <h2>{event.fecha}</h2>
              <h3>{event.hora}</h3>
            </div>
            <div className={style.contentSlider2}>
              <h2>{event.title}</h2>
              <p className={style.parrafoSlider}>{event.mensaje}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHome;
