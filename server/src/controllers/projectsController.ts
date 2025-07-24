import { Request, Response } from 'express';
import { projects } from '../data/projects';

export const getProjects = (req: Request, res: Response) => {
  const search = req.query.search?.toString().toLowerCase();

  if (!search) {
    return res.json(projects);
  }

  const filtered = projects.filter(
    (item) =>
      item.title.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
  );

  res.json(filtered);
};
