import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import LayoutProvider from './Context';
import { SimpleHeader } from './Headers';
import { SimpleSidebar } from './Sidebars';

const { Content } = Layout;

const InnerLayout = () => (
  <Layout>
    <SimpleHeader />
    <Content className="p-10">
      <Outlet />
    </Content>
  </Layout>
);

const DashboardLayout = () => (
  <LayoutProvider>
    <SimpleSidebar />
    <InnerLayout />
  </LayoutProvider>
);

export default DashboardLayout;
