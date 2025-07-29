import { Router } from 'express';
import { getProjects } from '../controllers/projectsController';

const router = Router();

router.get('/projects', getProjects);

export default router;
