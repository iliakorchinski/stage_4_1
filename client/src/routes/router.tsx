import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { AuthRequire } from '../components/AuthRequire/AuthRequire';
import { AuthPage } from '../pages/AuthPage';

export const enum RoutesPaths {
  HOME = '/',
  LOGIN = '/login',
  AUTH = 'auth',
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
  {
    path: RoutesPaths.AUTH,
    element: <AuthPage />,
  },
]);
