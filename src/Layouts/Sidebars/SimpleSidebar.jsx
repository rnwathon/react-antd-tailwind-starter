import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { useSidebarCollapse } from '../Context';
import getMenuData from './getMenuData';
import Logo from '../../Assets/logo.svg';

const { Sider } = Layout;

const menuData = getMenuData();

const Sidebar = () => {
  const location = useLocation();
  const { isSidebarCollapsed } = useSidebarCollapse();

  return (
    <Sider collapsed={isSidebarCollapsed} collapsible trigger={null}>
      <div className="sticky top-0">
        <header className="h-16 p-2 flex items-center justify-center">
          <img src={Logo} alt="Logo" className="h-full" />
        </header>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
          {menuData.map((item) => {
            if (item.hidden) return null;
            return (
              <Menu.Item key={item.key} icon={item.icon} disabled={item.disabled}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    </Sider>
  );
};

export default Sidebar;
