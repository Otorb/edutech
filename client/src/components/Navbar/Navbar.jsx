import style from './style.module.css';
import Logo from '../../views/Home/utility/logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

     // const homePos = document.getElementById('inicio').offsetTop;
      const aboutPos = document.getElementById('eventoHome').offsetTop;
      const contactPos = document.getElementById('contactoHome').offsetTop;

      if (scrollY < aboutPos) {
        setMenu('inicio');
      } else if (scrollY < contactPos) {
        setMenu('eventoHome');
      } else {
        setMenu('contactoHome');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <section className={style.contentMenu}>
        <img src={Logo} alt="logo" className={style.logoImg}/>
        <ul>
          <li
            onClick={() => { setMenu('inicio'); document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' }); }}
            className={menu === 'inicio' ? style.active : ''}
          >
            Inicio
          </li>
          <li
            onClick={() => { setMenu('eventoHome'); document.getElementById('eventoHome').scrollIntoView({ behavior: 'smooth' }); }}
            className={menu === 'eventoHome' ? style.active : ''}
          >
            Eventos
          </li>
          <li
            onClick={() => { setMenu('contactoHome'); document.getElementById('contactoHome').scrollIntoView({ behavior: 'smooth' }); }}
            className={menu === 'contactoHome' ? style.active : ''}
          >
            Contactos
          </li>
        </ul>
      </section>
      <button
        className={style.btnIngresarHome}
        onClick={() => navigate('/login')}
      >
        INGRESAR
      </button>
    </nav>
  );
}

export default Navbar;