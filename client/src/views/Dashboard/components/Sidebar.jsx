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
            <Link to={`${rolPath}/eventos`} className={style.liNav}>
              <FiCalendar className={style.iconNav} />
              {!isCollapsed && 'Eventos'}
            </Link>
            <Link to={`${rolPath}/usuarios`} className={style.liNav}>
              <FiUsers className={style.iconNav} />
              {!isCollapsed && 'Usuarios'}
            </Link>
            <Link to={`${rolPath}/cursos`} className={style.liNav}>
              <FiBook className={style.iconNav} />
              {!isCollapsed && 'Cursos'}
            </Link>
            <Link to={`${rolPath}/mensajes`} className={style.liNav}>
              <FiMail className={style.iconNav} />
              {!isCollapsed && 'Mensajes'}
            </Link>
          </>
        );
      case 'teachers':
        return (
          <>
            <Link to={`${rolPath}/ver-grados`} className={style.liNav}>
              <FiUsers className={style.iconNav} />
              {!isCollapsed && 'Ver Grados'}
            </Link>
            <Link to={`${rolPath}/cargar-nota`} className={style.liNav}>
              <FiBook className={style.iconNav} />
              {!isCollapsed && 'Cargar Nota'}
            </Link>
            <Link to={`${rolPath}/enviar-mensaje`} className={style.liNav}>
              <FiMail className={style.iconNav} />
              {!isCollapsed && 'Enviar Mensaje'}
            </Link>
          </>
        );
      case 'parent':
      case 'students':
        return (
          <>
            <Link to={`${rolPath}/promedios`} className={style.liNav}>
              <FiBook className={style.iconNav} />
              {!isCollapsed && 'Promedio'}
            </Link>
            <Link to={`${rolPath}/examenes`} className={style.liNav}>
              <FiCalendar className={style.iconNav} />
              {!isCollapsed && 'Exámenes'}
            </Link>
            <Link to={`${rolPath}/resumen-mensajes`} className={style.liNav}>
              <FiMail className={style.iconNav} />
              {!isCollapsed && 'Resumen de Mensajes'}
            </Link>
            <Link to={`${rolPath}/eventos`} className={style.liNav}>
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
