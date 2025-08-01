import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../utils/jwt';

interface JwtPayload {
  id: number;
  username: string;
}

interface AuthRequest extends Request {
  user?: {
    id: number;
    username: string;
  };
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) return res.sendStatus(401);

  try {
    const payload = verifyAccessToken(token) as string | JwtPayload;
    if (typeof payload === 'string') {
      return res.sendStatus(401);
    }
    req.user = payload;
    next();
  } catch {
    res.sendStatus(401);
  }
};
