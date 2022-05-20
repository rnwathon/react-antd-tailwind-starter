import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { HeaderDashboard1 } from './Headers';
import { SidebarDashboard1 } from './Sidebars';
import LayoutProvider from './Context';

const { Content } = Layout;

const InnerLayout = () => (
  <Layout>
    <HeaderDashboard1 />
    <Content className="p-5">
      <Outlet />
    </Content>
  </Layout>
);

const DashboardLayout1 = () => (
  <LayoutProvider>
    <SidebarDashboard1 />
    <InnerLayout />
  </LayoutProvider>
);

export default DashboardLayout1;
