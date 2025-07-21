import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

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
        element: <HomePage />,
      },
    ],
  },
  {
    path: RoutesPaths.LOGIN,
    element: <LoginPage />,
  },
]);
