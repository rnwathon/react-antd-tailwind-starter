import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { HeaderDashboard2 } from './Headers';
import { SidebarDashboard2 } from './Sidebars';
import LayoutProvider from './Context';

const { Content } = Layout;

const InnerLayout = () => (
  <Layout>
    <SidebarDashboard2 />
    <Content className="p-5">
      <Outlet />
    </Content>
  </Layout>
);

const DashboardLayout2 = () => (
  <LayoutProvider>
    <HeaderDashboard2 />
    <InnerLayout />
  </LayoutProvider>
);

export default DashboardLayout2;
