const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');
const { verifyAuth } = require('../middlewares/authMiddleware');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/',upload.single('coverPhoto'), communityController.createCommunity);
router.get('/',communityController.getCommunities);
router.get('/joined',communityController.getJoinedCommunities);
router.get('/recommended',communityController.getRecommendedCommunities);
router.get('/:id',communityController.getCommunityById);
router.post('/:id/join',communityController.joinCommunity);

module.exports = router;
