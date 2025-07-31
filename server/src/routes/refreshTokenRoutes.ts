import { Router } from 'express';
import { refreshToken } from '../controllers/refresh-token';

const router = Router();

router.post('/refresh-token', refreshToken);

export default router;
