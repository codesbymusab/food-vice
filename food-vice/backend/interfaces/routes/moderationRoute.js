const express = require('express');
const router = express.Router();
const moderationController = require('../controllers/moderationController');
const { verifyAuth, requireRole } = require('../middlewares/authMiddleware');

router.use(verifyAuth);

router.get('/reviews', requireRole(['moderator', 'admin']), moderationController.getReviewQueue);
router.post('/reviews/:id/flag', requireRole(['moderator', 'admin']), moderationController.flagReview);
router.post('/reviews/:id/moderate', requireRole(['moderator', 'admin']), moderationController.moderateReview);
router.get('/threads', requireRole(['moderator', 'admin']), moderationController.getThreadQueue);
router.post('/threads/:id/moderate', requireRole(['moderator', 'admin']), moderationController.moderateThread);
router.get('/reports', requireRole(['moderator', 'admin']), moderationController.getReports);
router.post('/reports/:id/assign', requireRole(['moderator', 'admin']), moderationController.assignReport);
router.post('/reports/:id/resolve', requireRole(['moderator', 'admin']), moderationController.resolveReport);
router.post('/users/:id/ban', requireRole(['moderator', 'admin']), moderationController.banUser);
router.post('/users/:id/unban', requireRole(['moderator', 'admin']), moderationController.unbanUser);

module.exports = router;
