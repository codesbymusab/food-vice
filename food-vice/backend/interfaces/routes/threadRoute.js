const express = require('express');
const router = express.Router();
const threadController = require('../controllers/threadController');
const { verifyAuth } = require('../middlewares/authMiddleware');

router.post('/', verifyAuth, threadController.createThread);
router.get('/community/all', verifyAuth, threadController.getAllThreads);
router.get('/:id', verifyAuth, threadController.getThreadById);
router.get('/community/:communityId', verifyAuth, threadController.getThreadsByCommunity);
router.post('/:id/like', verifyAuth, threadController.likeThread);
router.post('/:id/comment', verifyAuth, threadController.addComment);
router.get('/:id/comments', verifyAuth, threadController.getComments);

module.exports = router;
