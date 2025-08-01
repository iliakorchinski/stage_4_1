import { Router } from 'express';
import { getProjects } from '../controllers/projectsController';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.get('/projects', authenticate, getProjects);

export default router;
