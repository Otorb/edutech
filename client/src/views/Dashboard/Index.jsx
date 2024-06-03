import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import style from './styles/dashboard.module.css';
import Sidebar from './components/Sidebar';
import Prophile from '../Prophile/Index';
import { useAppSelector} from '../../Hooks/useAppSelector'

const Index = () => {
  const [isLeftSidebarVisible, setLeftSidebarVisible] = useState(true);
  const [isLeftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const userData = useAppSelector((state) => state.user.data);


  const toggleLeftSidebar = () => {
    setLeftSidebarVisible(!isLeftSidebarVisible);
  };

  const toggleLeftSidebarCollapse = () => {
    setLeftSidebarCollapsed(!isLeftSidebarCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setLeftSidebarVisible(false);
      } else {
        setLeftSidebarVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamamos a la función para establecer el estado inicial

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={style.containerDashboard}>
      <Sidebar
        position="left"
        visible={!isMobileView || isLeftSidebarVisible}
        toggleSidebar={toggleLeftSidebar}
        isCollapsed={isLeftSidebarCollapsed}
        toggleCollapse={toggleLeftSidebarCollapse}
      />
      <main className={style.mainContentDash}>
        {isMobileView && (
          <button className={`${style.hamburger} ${style.leftHamburger}`} onClick={toggleLeftSidebar}>
            ☰
          </button>
        )}
        <div className={style.contentDash}>

          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Index;

