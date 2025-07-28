import { authThunk } from '../store/authThunk';
import { AppDispatch } from '../store/store';

export const loginUser = async (
  dispatch: AppDispatch,
  username: string,
  password: string,
): Promise<void> => {
  try {
    await dispatch(authThunk(username, password));
  } catch (error) {
    throw new Error('Login failed');
  }
};
