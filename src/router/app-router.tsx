import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { DashboardPage } from '../pages/DasboardPage/DashboardPage';

import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },

  {
    path: '/main',
    element: <MainLayout />,

    children: [
      {
        path: '/main/dashboard',
        element: <DashboardPage />,
      },
    ],
  },
]);
export default router;
