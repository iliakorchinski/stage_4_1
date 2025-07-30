import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { mockUser } from '../data/user';

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await prisma.user.findFirst({ where: { username, password } });
  if (user) {
    return res.status(200).json({ message: 'Login successful' });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
};
