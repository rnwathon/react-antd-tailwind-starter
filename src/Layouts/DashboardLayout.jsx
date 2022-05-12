import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import Logo from '../Assets/logo.svg';

const { Header, Sider, Footer, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const handleToggleSider = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <Layout hasSider>
      <Sider className="h-screen fixed" collapsible collapsed={collapsed} trigger={null}>
        <div className="h-16 p-2 flex items-center justify-center animate-pulse">
          <img src={Logo} alt="Logo" className="h-full" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout
        style={{ marginLeft: collapsed ? '80px' : '200px' }}
        className="transition-all"
      >
        <Header className="fixed top-0 z-50 w-full bg-white p-0 shadow">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            style: {
              padding: '1rem',
            },
            className: 'trigger',
            onClick: handleToggleSider,
          })}
        </Header>
        <Content className="mt-16 p-10 min-h-screen">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
