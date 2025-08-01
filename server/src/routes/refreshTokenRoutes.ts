import { Router } from 'express';
import { refreshToken } from '../controllers/refreshController';

const router = Router();

router.post('/refresh-token', refreshToken);

export default router;
