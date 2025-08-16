import express from 'express';
import { signup, login, verifyEmail } from '../controllers/authController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify/:token', verifyEmail);
router.get('/me', authMiddleware, (req, res) => {
  res.json({ user: (req as any).user });
});

export default router;