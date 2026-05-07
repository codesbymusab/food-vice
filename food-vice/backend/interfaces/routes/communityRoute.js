const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');
const { verifyAuth } = require('../middlewares/authMiddleware');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', verifyAuth, upload.single('coverPhoto'), communityController.createCommunity);
router.get('/', verifyAuth, communityController.getCommunities);
router.get('/joined', verifyAuth, communityController.getJoinedCommunities);
router.get('/:id', verifyAuth, communityController.getCommunityById);
router.post('/:id/join', verifyAuth, communityController.joinCommunity);

module.exports = router;
