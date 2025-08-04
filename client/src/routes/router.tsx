import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
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
        element: <HomePage />,
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
