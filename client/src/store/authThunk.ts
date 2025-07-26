import { AppDispatch } from './store';
import { login } from './authSlice';

export const authThunk = (username: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      dispatch(login());
    } catch (error) {
      throw error;
    }
  };
};
