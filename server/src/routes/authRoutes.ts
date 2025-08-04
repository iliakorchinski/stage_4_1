import { Router } from 'express';
import { login, renewAccessToken, signup } from '../controllers/authController';

const router = Router();

router.post('/login', login);
router.post('/refresh-token', renewAccessToken);
router.post('/signup', signup);

export default router;
