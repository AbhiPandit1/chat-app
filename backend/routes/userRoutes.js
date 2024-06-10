import express from 'express';

import protectRoute from '../middleware/protectRoute.js';
import { getUserSideBar } from '../controllers/userController.js';

const router = express.Router();

//User Routes
router.get('/', protectRoute, getUserSideBar);
router.get('/:id');
router.post('/logout');

export default router;
