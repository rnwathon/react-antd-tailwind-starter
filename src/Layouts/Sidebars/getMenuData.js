import {
  AppstoreAddOutlined,
  DashboardOutlined,
  FormOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

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
    title: 'Forms',
    key: '/forms',
    path: '/forms',
    icon: <FormOutlined />,
    hidden: false,
    disabled: false,
  },
  {
    title: 'Views',
    key: '/views',
    path: '/views',
    icon: <AppstoreAddOutlined />,
    hidden: false,
    disabled: false,
  },
  {
    title: 'Feedbacks',
    key: '/feedbacks',
    path: '/feedbacks',
    icon: <NotificationOutlined />,
    hidden: false,
    disabled: false,
  },
];

export default getMenuData;
