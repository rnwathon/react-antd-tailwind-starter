import { DashboardOutlined } from '@ant-design/icons';

const getMenuData = () => [
  {
    title: 'Dashboard',
    key: '/',
    path: '/',
    icon: <DashboardOutlined />,
    hidden: false,
    disabled: false,
  },
];

export default getMenuData;
