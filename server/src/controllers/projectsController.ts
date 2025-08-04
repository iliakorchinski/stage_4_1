import { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response) => {
  const search = req.query.search?.toString().toLowerCase();
  try {
    const where: Prisma.projectsWhereInput | undefined = search
      ? {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }
      : undefined;
    const projects = await prisma.projects.findMany({ where });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch projects' });
  }
};
