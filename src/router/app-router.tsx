import { createBrowserRouter } from 'react-router-dom';
import AdminMainLayout from '../layout/AdminMainLayout';
import MainLayout from '../layout/MainLayout';
import { AdminDashboardPage } from '../pages/DashboardPage/AdminDashboardPage/AdminDashboardPage';
import { DashboardPage } from '../pages/DashboardPage/TranslatorDasboardPage/TranslatorDashboardPage';
import { NotFoundPage } from '../pages/error-pages/404Page/404Page';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { TranslationDetailsPage } from '../pages/TranslationDetailsPage/TranslationDetailsPage';
import { TranslationFormPage } from '../pages/TranslationFormPage/TranslationFormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/admin',
    element: <AdminMainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/admin/create',
        element: <TranslationFormPage />,
      },
      {
        path: '/admin/dashboard',
        element: <AdminDashboardPage />,
      },
    ],
  },

  {
    path: '/main',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,

    children: [
      {
        path: '/main/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/main/details/:translationId',
        element: <TranslationDetailsPage />,
      },
    ],
  },
]);
export default router;
