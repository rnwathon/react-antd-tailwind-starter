import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useSidebarCollapse } from '../Context';
import getMenuData from './getMenuData';

// Assets
import Logo from '../../Assets/SVG/logo.svg';
import LogoWord from '../../Assets/SVG/logoWord.svg';

const { Sider } = Layout;

const menuData = getMenuData();

const SidebarDashboard1 = () => {
  const location = useLocation();
  const { isSidebarCollapsed, setIsSidebarCollapsed } = useSidebarCollapse();

  return (
    <Sider
      breakpoint="md"
      onBreakpoint={(isBroken) =>
        isBroken ? setIsSidebarCollapsed(true) : setIsSidebarCollapsed(false)
      }
      collapsed={isSidebarCollapsed}
      collapsible
      trigger={null}
    >
      <div className="sticky top-0">
        <header className="h-16 p-2 flex items-center justify-center">
          {isSidebarCollapsed ? (
            <img src={Logo} alt="Logo" className="h-full" />
          ) : (
            <img src={LogoWord} alt="LogoWord" className="h-full" />
          )}
        </header>
        <Menu
          className="h-full max-h-screen overflow-y-scroll overflow-x-hidden hide-scrollbar"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={menuData.filter((item) => !item.hidden)}
        />
      </div>
    </Sider>
  );
};

export default SidebarDashboard1;
