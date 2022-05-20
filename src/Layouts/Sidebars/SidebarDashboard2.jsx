import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useSidebarCollapse } from '../Context';
import getMenuData from './getMenuData';

const { Sider } = Layout;

const menuData = getMenuData();

const SidebarDashboard2 = () => {
  const location = useLocation();
  const { isSidebarCollapsed, setIsSidebarCollapsed } = useSidebarCollapse();

  const style = {
    wrapper: 'bg-sidebar-light dark:bg-sidebar-dark',
  };

  return (
    <Sider
      breakpoint="md"
      onBreakpoint={(isBroken) =>
        isBroken ? setIsSidebarCollapsed(true) : setIsSidebarCollapsed(false)
      }
      className={style.wrapper}
      collapsed={isSidebarCollapsed}
      trigger={null}
      collapsible
    >
      <div className="sticky left-0 top-16">
        <Menu
          className="h-full max-h-screen overflow-y-scroll overflow-x-hidden hide-scrollbar"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={menuData.filter((item) => !item.hidden)}
        />
      </div>
    </Sider>
  );
};

export default SidebarDashboard2;
