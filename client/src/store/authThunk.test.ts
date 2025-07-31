import { authThunk } from './authThunk';
import { login } from './authSlice';
import { AppDispatch } from './store';

global.fetch = jest.fn();

describe('authThunk', () => {
  const dispatch = jest.fn() as AppDispatch;

  beforeAll(() => {
    const localStorageMock = (function () {
      let store: Record<string, string> = {};

      return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
          store[key] = value;
        },
        clear: () => {
          store = {};
        },
        removeItem: (key: string) => {
          delete store[key];
        },
      };
    })();

    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches login() on successful authentication', async () => {
    const mockAccessToken = 'fake-access-token';

    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ accessToken: mockAccessToken }),
    };

    (global.fetch as jest.Mock).mockResolvedValue(mockResponse as unknown as Response);

    await authThunk('testuser', 'password')(dispatch);

    expect(fetch).toHaveBeenCalledWith('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username: 'testuser', password: 'password' }),
    });

    expect(localStorage.getItem('accessToken')).toBe(mockAccessToken);
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
