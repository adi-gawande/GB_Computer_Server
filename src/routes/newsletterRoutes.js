import express from 'express';
import {
  subscribe,
  getSubscribers,
  unsubscribe
} from '../controllers/newsletterController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/subscribe', subscribe);
router.get('/', protect, authorize('admin'), getSubscribers);
router.delete('/:email', unsubscribe);

export default router;
