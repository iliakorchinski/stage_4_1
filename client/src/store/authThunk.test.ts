import { authThunk } from './authThunk';
import { login } from './authSlice';
import { AppDispatch } from './store';

global.fetch = jest.fn();

describe('authThunk', () => {
  const dispatch = jest.fn() as AppDispatch;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches login() on successful authentication', async () => {
    const mockResponse = {
      ok: true,
    };
    global.fetch = jest.fn().mockResolvedValueOnce(mockResponse as Response);

    await authThunk('testuser', 'password')(dispatch);

    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'testuser', password: 'password' }),
    });

    expect(dispatch).toHaveBeenCalledWith(login());
  });

  it('throws error on failed authentication', async () => {
    const mockErrorResponse = { ok: false };
    global.fetch = jest.fn().mockResolvedValueOnce(mockErrorResponse as Response);

    await expect(authThunk('notCorrectUser', 'notCorrectPass')(dispatch)).rejects.toThrow(
      'Authentication failed',
    );

    expect(dispatch).not.toHaveBeenCalledWith(login());
  });
});
