const express = require('express');
const router = express.Router();
const threadController = require('../controllers/threadController');
const { verifyAuth } = require('../middlewares/authMiddleware');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', verifyAuth, upload.array('media', 10), threadController.createThread);
router.get('/community/all', verifyAuth, threadController.getAllThreads);
router.post('/comment/:commentId/like', verifyAuth, threadController.toggleCommentLike);
router.get('/:id', verifyAuth, threadController.getThreadById);
router.get('/community/:communityId', verifyAuth, threadController.getThreadsByCommunity);
router.post('/:id/like', verifyAuth, threadController.likeThread);
router.post('/:id/dislike', verifyAuth, threadController.dislikeThread);
router.post('/:id/comment', verifyAuth, upload.array('media', 10), threadController.addComment);
router.get('/:id/comments', verifyAuth, threadController.getComments);

module.exports = router;
