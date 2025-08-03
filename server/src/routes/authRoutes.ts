import { Router } from 'express';
import { login, refreshToken, signup } from '../controllers/authController';

const router = Router();

router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.post('/signup', signup);

export default router;
