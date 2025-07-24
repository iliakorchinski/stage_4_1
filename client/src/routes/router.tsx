import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { AuthRequire } from '../components/AuthRequire/AuthRequire';

export const enum RoutesPaths {
  HOME = '/',
  LOGIN = '/login',
}

export const router = createBrowserRouter([
  {
    path: RoutesPaths.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <AuthRequire>
            <HomePage />
          </AuthRequire>
        ),
      },
    ],
  },
  {
    path: RoutesPaths.LOGIN,
    element: <LoginPage />,
  },
]);
