import express from 'express';
import { loginAdmin } from '../controllers/authController.js';

const router = express.Router();

// Route: POST /api/auth/login
router.post('/login', loginAdmin);

export default router;
