import express from 'express';
import { login, logout, Me } from '../controllers/AuthController.js';

const router = express.Router();

router.get('/me', Me);
router.post('/login', login);
router.delete('/logout', logout);

export default router;
