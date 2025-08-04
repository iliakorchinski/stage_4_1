import { Response } from 'express';

export const failedAuthStatus = (res: Response) => {
  return res.status(401).json({ message: 'Invalid credentials' });
};
