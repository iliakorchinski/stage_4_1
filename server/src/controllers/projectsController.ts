import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response) => {
  const search = req.query.search?.toString().toLowerCase();
  try {
    let projects;
    if (search) {
      projects = await prisma.projects.findMany({
        where: {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        },
      });
    } else {
      projects = await prisma.projects.findMany();
    }
    res.json(projects);
  } catch (error) {
    console.error(error);
  }
};
