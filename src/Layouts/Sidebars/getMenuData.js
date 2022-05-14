import { AppstoreOutlined, DashboardOutlined } from '@ant-design/icons';

const getMenuData = () => [
  {
    title: 'Dashboard',
    key: '/',
    path: '/',
    icon: <DashboardOutlined />,
    hidden: false,
    disabled: false,
  },
  {
    title: 'Components',
    key: '/components',
    path: '/components',
    icon: <AppstoreOutlined />,
    hidden: false,
    disabled: false,
  },
];

export default getMenuData;
