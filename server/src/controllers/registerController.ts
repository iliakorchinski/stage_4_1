import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { generateAccessToken, generateRefreshToken } from '../utils/jwt';

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
  const { username, password, repeatPassword, firstName, lastName, age } =
    req.body;

  const errors: Record<string, string> = {};
  if (!username || username.length < 3)
    errors.username = 'Username must be at least 3 characters';
  if (
    !password ||
    password.length < 4 ||
    !/\d/.test(password) ||
    !/[a-zA-Z]/.test(password)
  ) {
    errors.password =
      'Password must contain at least 1 letter, 1 number, and be 4+ characters';
  }
  if (repeatPassword !== password)
    errors.repeatPassword = 'Passwords must match';
  if (!firstName || firstName.length < 3)
    errors.firstName = 'First name must be at least 3 characters';
  if (!lastName || lastName.length < 3)
    errors.lastName = 'Last name must be at least 3 characters';
  if (!age || isNaN(Number(age)) || Number(age) <= 0)
    errors.age = 'Age must be a valid number greater than zero';

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ errors });
  }

  const existingUser = await prisma.user.findUnique({ where: { username } });
  if (existingUser) {
    return res
      .status(400)
      .json({ errors: { username: 'Username is already taken' } });
  }

  const user = await prisma.user.create({
    data: { username, password, firstName, lastName, age: Number(age) },
  });

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  res
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
    })
    .status(201)
    .json({ accessToken });
};
