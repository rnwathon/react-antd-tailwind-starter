import {
  //
  Page404,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  //
  Dashboard,
  Feedbacks,
  Forms,
  Views,
} from '../Pages';

export const getPublicRoutes = () => [
  {
    path: '/login',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Login />,
  },
  {
    path: '/register',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Register />,
  },
  {
    path: '/forgotPassword',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <ForgotPassword />,
  },
  {
    path: '/resetPassword',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <ResetPassword />,
  },
  {
    path: '*',
    isIndex: false,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Page404 />,
  },
];

export const getDashboardRoutes = () => [
  {
    path: '/',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Dashboard />,
  },
  {
    path: '/forms',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Forms />,
  },
  {
    path: '/views',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Views />,
  },
  {
    path: '/feedbacks',
    isIndex: true,
    isCaseSensitive: false,
    isDisabled: false,
    element: <Feedbacks />,
  },
];
