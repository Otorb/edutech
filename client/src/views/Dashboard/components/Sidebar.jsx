
import style from '../styles/dashboard.module.css';

const Sidebar = ({ position, visible, toggleSidebar }) => {
    const sidebarClass = `${style.sidebar} ${style[position + 'Sidebar']} ${visible ? style.show : ''}`;
  
    return (
      <nav className={sidebarClass}>
        <button className={style.closeBtn} onClick={toggleSidebar}>×</button>
        <h2>{position === 'left' ? 'Menu' : 'Mensaje'}</h2>
        {/* Aquí puedes añadir el contenido del menú o la lista de mensajes */}
      </nav>
    );
  };

export default Sidebar;
