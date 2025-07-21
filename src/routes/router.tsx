import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RoutesPaths } from './routesPaths';

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
