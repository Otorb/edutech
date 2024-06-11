import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../styles/dashboard.module.css';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useAppDispatch, useAppSelector } from '../../../Hooks/useAppSelector';
import { FcReading } from "react-icons/fc";
import { FiCalendar, FiUsers, FiBook, FiMail, FiLogOut } from "react-icons/fi";
import { clearUserData } from '../../../store/slicer/userSlice';

const Sidebar = ({ position, visible, toggleSidebar, isCollapsed, toggleCollapse }) => {
  const sidebarClass = `${style.sidebar} ${style[position + 'Sidebar']} ${visible ? style.show : ''} ${isCollapsed ? style.collapsed : ''}`;

  const navigate = useNavigate();
  const signOut = useSignOut();
  const userData = useAppSelector((state) => state.user.data);
  console.log(userData)

  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    signOut();
    dispatch(clearUserData())
    navigate('/');
  };

  const renderMenuItems = () => {
    const rolePath = `/dashboard`;

    switch (userData.role) {
      case 'admin':
        return (
          <>
            <Link to={`${rolePath}/eventmodule`} className={style.liNav}>
              <FiCalendar className={style.iconNav} />
              {!isCollapsed && 'Eventos'}
            </Link>
            <Link to={`${rolePath}/usuarios`} className={style.liNav}>
              <FiUsers className={style.iconNav} />
              {!isCollapsed && 'Usuarios'}
            </Link>
            <Link to={`${rolePath}/cursos`} className={style.liNav}>
              <FiBook className={style.iconNav} />
              {!isCollapsed && 'Cursos'}
            </Link>
            <Link to={`${rolePath}/mensajes`} className={style.liNav}>
              <FiMail className={style.iconNav} />
              {!isCollapsed && 'Mensajes'}
            </Link>
          </>
        );
      case 'teacher':
        return (
          <>
        
            <Link to={`${rolePath}/cargar-nota`} className={style.liNav}>
              <FiBook className={style.iconNav} />
              {!isCollapsed && 'Cargar Nota'}
            </Link>
            <Link to={`${rolePath}/enviar-mensaje`} className={style.liNav}>
              <FiMail className={style.iconNav} />
              {!isCollapsed && 'Enviar Mensaje'}
            </Link>
          </>
        );
      case 'student':
        return (
          <>

            <Link to={`${rolePath}/profile`} className={style.liNav}>

              <FiBook className={style.iconNav} />
              {!isCollapsed && 'Promedio/Notas'}
            </Link>
            <Link to={`${rolePath}/Examenes`} className={style.liNav}>
              <FiCalendar className={style.iconNav} />
              {!isCollapsed && 'Exámenes'}
            </Link>

            <Link to={`${rolePath}/Mensajes`} className={style.liNav}>

              <FiMail className={style.iconNav} />
              {!isCollapsed && 'Mensajes'}
            </Link>
          
          </>
        );
      case 'parent':
        return (
          <>
            <Link to={`${rolePath}/promedios`} className={style.liNav}>
              <FiBook className={style.iconNav} />
              {!isCollapsed && 'Hijos'}
            </Link>
            <Link to={`${rolePath}/resumen-mensajes`} className={style.liNav}>
              <FiMail className={style.iconNav} />
              {!isCollapsed && 'Mensajes'}
            </Link>
            <Link to={`${rolePath}/eventos`} className={style.liNav}>
              <FiCalendar className={style.iconNav} />
              {!isCollapsed && 'Eventos'}
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav className={sidebarClass}>
      <section className={style.headNav}>
        <button className={style.closeBtn} onClick={toggleSidebar}>×</button>
        <div className={style.userProfile}>
          {userData.role === 'admin' ?
            <>
              <div className={style.contentPhone}>
                <img src={userData.photoUser} alt="User" className={style.userPhoto} />
              </div>
              <div className={style.detallUserNav}>
                {!isCollapsed && <span className={style.titleNav}>{`Bienvenido`}<FcReading /></span>}
                {!isCollapsed && <span>{userData?.nameUser}</span>}
              </div>
            </>
            :
            <>
              <div className={style.contentPhone}>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png' alt="User" className={style.userPhoto} />
              </div>
              <div className={style.detallUserNav}>
                {!isCollapsed && <span className={style.titleNav}>{`Bienvenido`}<FcReading /></span>}
                {!isCollapsed && <span>{userData?.lastName}</span>}
              </div>
            </>

          }

        </div>
        <button onClick={toggleCollapse} className={style.collapseBtn}>
          {isCollapsed ? '>' : '<'}
        </button>
      </section>
      <section className={style.itemNav}>
        {renderMenuItems()}
      </section>
      <section className={style.Desconectarse}>
        <div className={style.areaDesconectar} onClick={handleSignOut}>
          <FiLogOut className={style.iconNav} />
          {!isCollapsed && 'Desconectarse'}
        </div>
      </section>
    </nav>
  );
};

export default Sidebar;
