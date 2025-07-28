import { login } from '../controllers/authController';
import { mockUser } from '../data/user';
import { Request, Response } from 'express';

type MockRequestBody = {
  username: string;
  password: string;
};

describe('login controller', () => {
  const createMockResponse = (): Response => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;
    return res;
  };

  const createMockRequest = (body: MockRequestBody): Request => {
    return {
      body,
    } as Request;
  };

  it('should return 200 with success message for correct credentials', () => {
    const req = createMockRequest({
      username: mockUser.username,
      password: mockUser.password,
    });
    const res = createMockResponse();

    login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Login successful' });
  });

  it('should return 401 for incorrect password', () => {
    const req = createMockRequest({
      username: mockUser.username,
      password: 'wrongpassword',
    });
    const res = createMockResponse();

    login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
  });

  it('should return 401 for incorrect username', () => {
    const req = createMockRequest({
      username: 'wronguser',
      password: mockUser.password,
    });
    const res = createMockResponse();

    login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
  });
});
