import { useState } from 'react';
import Promedio from '../components/Promedio';
import Examenes from '../components/Examenes';
import ResumenMensajes from '../components/ResumenMensajes';
import Eventos from '../components/Eventos';
import style from '../style/DetailTodo.module.css';

const DetailTodo = () => {
  const [selectedComponent, setSelectedComponent] = useState('promedio');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'promedio':
        return <Promedio />;
      case 'examenes':
        return <Examenes />;
      case 'resumen-mensajes':
        return <ResumenMensajes />;
      case 'eventos':
        return <Eventos />;
      default:
        return null;
    }
  };

  return (
    <div className={style.container}>
      <ul className={style.uull}>
        <li
          className={`${style.llii} ${selectedComponent === 'promedio' && style.active}`}
          onClick={() => setSelectedComponent('promedio')}
        >
          Promedio
        </li>
        <li
          className={`${style.llii} ${selectedComponent === 'examenes' && style.active}`}
          onClick={() => setSelectedComponent('examenes')}
        >
          Exámenes
        </li>
        <li
          className={`${style.llii} ${selectedComponent === 'resumen-mensajes' && style.active}`}
          onClick={() => setSelectedComponent('resumen-mensajes')}
        >
          Resumen Mensajes
        </li>
        <li
          className={`${style.llii} ${selectedComponent === 'eventos' && style.active}`}
          onClick={() => setSelectedComponent('eventos')}
        >
          Eventos
        </li>
      </ul>

      <div className={style.secciones}>
        {renderComponent()}
      </div>
    </div>
  );
};

export default DetailTodo;

