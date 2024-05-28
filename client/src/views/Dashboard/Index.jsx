import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Hooks/useAppSelector';
import style from './styles/dashboard.module.css';
import Sidebar from './components/Sidebar';
import Login from '../Login/Index'
import { logout } from '../../store/slicer/auth.slice';

const Index = () => {
  const [isLeftSidebarVisible, setLeftSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setRightSidebarVisible] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  console.log(isAuth)  

  const Dispatch = useAppDispatch();


  
  const handleLogout = ()=>{
    Dispatch(logout())
  }

  const toggleLeftSidebar = () => {
    setLeftSidebarVisible(!isLeftSidebarVisible);
  };

  const toggleRightSidebar = () => {
    setRightSidebarVisible(!isRightSidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamamos a la función para establecer el estado inicial

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

  return (
    <>
   {isAuth ? (
      <div className={style.container}>
        <Sidebar
          position="left"
          visible={!isMobileView || isLeftSidebarVisible}
          toggleSidebar={toggleLeftSidebar}
        />
        <main className={style.mainContent}>
          {isMobileView && (
            <button className={`${style.hamburger} ${style.leftHamburger}`} onClick={toggleLeftSidebar}>
              ☰
            </button>
          )}
          <button className={`${style.hamburger} ${style.rightHamburger}`} onClick={toggleRightSidebar}>
            ☰
          </button>
          <div className={style.content}>
            <button
            onClick={handleLogout}
            >desconectarse</button>
            <Outlet />
          </div>
        </main>
        <Sidebar
          position="right"
          visible={!isMobileView || isRightSidebarVisible}
          toggleSidebar={toggleRightSidebar}
        />
      </div>
    ) : (
      <Login />
    )}
    </>
   
  );
};

export default Index;
