import express from 'express';
import {
  submitHireRequest,
  getHireRequests,
  getHireRequest,
  updateHireRequest,
  deleteHireRequest
} from '../controllers/hireController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .post(submitHireRequest)
  .get(protect, authorize('admin'), getHireRequests);

router.route('/:id')
  .get(protect, authorize('admin'), getHireRequest)
  .put(protect, authorize('admin'), updateHireRequest)
  .delete(protect, authorize('admin'), deleteHireRequest);

export default router;
