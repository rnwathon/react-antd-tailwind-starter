import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useSidebarCollapse } from '../Context';

const { Header } = Layout;

const SimpleHeader = () => {
  const { isSidebarCollapsed, toggleSidebar } = useSidebarCollapse();

  return (
    <Header className="w-full bg-white shadow sticky top-0 z-50 p-0">
      {React.createElement(isSidebarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'p-3',
        onClick: toggleSidebar,
      })}
    </Header>
  );
};

export default SimpleHeader;
