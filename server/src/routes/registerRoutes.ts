import { Router } from 'express';
import { signup } from '../controllers/registerController';

const router = Router();

router.post('/signup', signup);

export default router;
