import { Link, useNavigate } from 'react-router-dom';
import style from '../styles/dashboard.module.css';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useAppSelector } from '../../../Hooks/useAppSelector';
import { FcReading } from "react-icons/fc";
import { BiSolidUserDetail } from "react-icons/bi";
import { FiCalendar,FiUsers,FiBook,FiMail, FiLogOut } from "react-icons/fi";


const Sidebar = ({ position, visible, toggleSidebar, isCollapsed, toggleCollapse }) => {
  const sidebarClass = `${style.sidebar} ${style[position + 'Sidebar']} ${visible ? style.show : ''} ${isCollapsed ? style.collapsed : ''}`;

  const navigate = useNavigate();
  const signOut = useSignOut();
  const userData = useAppSelector((state) => state.user.data);

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <nav className={sidebarClass}>
      <section className={style.headNav}>
        <button className={style.closeBtn} onClick={toggleSidebar}>×</button>
      <div className={style.userProfile}>
        <div className={style.contentPhone}>
           <img src='https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png'alt="User" className={style.userPhoto} />
        </div>
       
        <div className={style.detallUserNav}>
        {!isCollapsed && <span className={style.titleNav}>{`Bienvenido`}<FcReading /></span>}
        {!isCollapsed && <span>{userData?.fullName}</span>}

        </div>
      </div>
      <button onClick={toggleCollapse} className={style.collapseBtn}>
        {isCollapsed ? '>' : '<'}
      </button>
      </section>
      <section className={style.itemNav}>
       
           <Link to='/dashboard/Eventos' className={style.liNav}>
          <FiCalendar className={style.iconNav} />
          {!isCollapsed && 'Eventos'}
       
        </Link>
       
        <Link to='/dashboard/Usuarios' className={style.liNav}>
          <FiUsers className={style.iconNav} />
          {!isCollapsed && 'Usuarios'}
        </Link>
        <Link to='/dashboard/Cursos' className={style.liNav}>
          <FiBook className={style.iconNav} />
          {!isCollapsed && 'Cursos'}
        </Link>
        <Link to='/dashboard/Mensajes' className={style.liNav}>
          <FiMail className={style.iconNav} />
          {!isCollapsed && 'Mensajes'}
        </Link>
        <Link to='/dashboard/profile' className={style.liNav}>
        <BiSolidUserDetail className={style.iconNav} />
        {!isCollapsed && 'Detalles'}
        </Link>
      </section>
      <section className={style.Desconectarse}>
          <div className={style.areaDesconectar}
          onClick={handleSignOut}
          >
          <FiLogOut className={style.iconNav} />
          {!isCollapsed && 'Desconectarse'}
         
          </div>
      </section>
      
    </nav>
  );
};

export default Sidebar;
