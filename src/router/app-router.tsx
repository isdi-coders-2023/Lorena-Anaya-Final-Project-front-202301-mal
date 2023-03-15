import { createBrowserRouter } from 'react-router-dom';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RegisterPage />,
  },
]);
export default router;
