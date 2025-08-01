import { Request, Response } from 'express';
import { generateAccessToken, verifyRefreshToken } from '../utils/jwt';

export const refreshToken = (req: Request, res: Response) => {
  const token = req.cookies?.refreshToken;

  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const payload = verifyRefreshToken(token) as { userId: number };
    const newAccessToken = generateAccessToken(payload.userId);
    res.json({ accessToken: newAccessToken });
  } catch (e) {
    res.sendStatus(403);
  }
};
