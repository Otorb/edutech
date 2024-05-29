
import { useNavigate } from 'react-router-dom';
import style from '../styles/dashboard.module.css';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const Sidebar = ({ position, visible, toggleSidebar }) => {
    const sidebarClass = `${style.sidebar} ${style[position + 'Sidebar']} ${visible ? style.show : ''}`;
  
    const navigate = useNavigate();
    const signOut = useSignOut();
    const handleSignOut = () => {
      signOut();
      navigate('/');
    };

    return (
      <nav className={sidebarClass}>
        <button className={style.closeBtn} onClick={toggleSidebar}>×</button>
        <h2>{position === 'left' ? 'Menu' : 'Mensaje'}</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <button 
          className={style.btnDesconectar}
          onClick={handleSignOut}>Desconectarse</button>
      </nav>
    );
  };

export default Sidebar;
