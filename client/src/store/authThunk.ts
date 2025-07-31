import { AppDispatch } from './store';
import { login } from './authSlice';

export const authThunk = (username: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const { accessToken } = await response.json();
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        dispatch(login());
      }
    } catch (error) {
      throw error;
    }
  };
};
