import express from 'express';
import { sendMessage, getMessage } from '../controllers/messageController.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

//Message Routes
router.post('/send/:id', protectRoute, sendMessage);
router.get('/:id', protectRoute, getMessage);
router.post('/logout');

export default router;
