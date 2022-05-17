import { Dashboard, Feedbacks, Forms, Views } from '../Pages';

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
