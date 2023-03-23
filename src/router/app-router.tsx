import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { DashboardPage } from '../pages/DasboardPage/DashboardPage';
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
    path: '/main',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,

    children: [
      {
        path: '/main/dashboard',
        element: <DashboardPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/main/create',
        element: <TranslationFormPage />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/main/details',
        element: <TranslationDetailsPage />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);
export default router;
