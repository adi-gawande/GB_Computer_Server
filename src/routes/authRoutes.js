import express from 'express';
import { register, login, getMe, googleCallback, googleFailure } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';
import passport from '../config/passport.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

// Google OAuth routes (only if configured)
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_ID !== 'your-google-client-id') {
  router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/api/auth/google/failure' }),
    googleCallback
  );
  router.get('/google/failure', googleFailure);
} else {
  router.get('/google', (req, res) => {
    res.status(501).json({ success: false, message: 'Google OAuth not configured' });
  });
  router.get('/google/callback', (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}/login?error=oauth_not_configured`);
  });
  router.get('/google/failure', (req, res) => {
    res.redirect(`${process.env.FRONTEND_URL}/login?error=oauth_not_configured`);
  });
}

export default router;
