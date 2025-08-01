import { JSX, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { checkRefresh } from '../../services/checkRefresh';

type AuthRequireProps = {
  children: JSX.Element;
};

export const AuthRequire = ({ children }: AuthRequireProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    checkRefresh(setIsAuthenticated);
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
