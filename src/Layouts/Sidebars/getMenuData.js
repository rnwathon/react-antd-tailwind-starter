import {
  AppstoreAddOutlined,
  DashboardOutlined,
  FormOutlined,
  NotificationOutlined,
  FileOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const getMenuData = () => [
  {
    key: '/',
    title: 'Dashboard',
    label: <NavLink to="/">Dashboard</NavLink>,
    icon: <DashboardOutlined />,
    hidden: false,
    disabled: false,
  },
  {
    type: 'group',
    key: 'groupComponent',
    label: <strong>Components</strong>,
    children: [
      {
        key: '/forms',
        title: 'Forms',
        label: <NavLink to="/forms">Forms</NavLink>,
        icon: <FormOutlined />,
        hidden: false,
        disabled: false,
      },
      {
        key: '/views',
        title: 'Views',
        label: <NavLink to="/views">Views</NavLink>,
        icon: <AppstoreAddOutlined />,
        hidden: false,
        disabled: false,
      },
      {
        key: '/feedbacks',
        title: 'Feedbacks',
        label: <NavLink to="/feedbacks">Feedbacks</NavLink>,
        icon: <NotificationOutlined />,
        hidden: false,
        disabled: false,
      },
    ],
  },
  {
    type: 'group',
    key: 'groupExtras',
    label: <strong>Extras</strong>,
    children: [
      {
        key: 'pages',
        title: 'Pages',
        label: 'Pages',
        icon: <FileOutlined />,
        hidden: false,
        disabled: false,
        children: [
          {
            key: '/login',
            title: 'Login',
            label: <NavLink to="/login">Login</NavLink>,
            hidden: false,
            disabled: false,
          },
          {
            key: '/register',
            title: 'Register',
            label: <NavLink to="/register">Register</NavLink>,
            hidden: false,
            disabled: false,
          },
          {
            key: '/forgotPassword',
            title: 'Forgot Password',
            label: <NavLink to="/forgotPassword">Forgot Password</NavLink>,
            hidden: false,
            disabled: false,
          },
          {
            key: '/resetPassword',
            title: 'Reset Password',
            label: <NavLink to="/resetPassword">Reset Password</NavLink>,
            hidden: false,
            disabled: false,
          },
          {
            key: '/404',
            title: '404',
            label: <NavLink to="/404">404</NavLink>,
            hidden: false,
            disabled: false,
          },
        ],
      },
    ],
  },
];

export default getMenuData;
