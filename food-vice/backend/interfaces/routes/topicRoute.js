const express = require('express');
const topicController = require('../controllers/topicController');

const router = express.Router();

// GET /api/topics - Get all topics
router.get('/', topicController.getAllTopics);

// POST /api/topics - Create a new topic
router.post('/', topicController.createTopic);

// GET /api/topics/:id - Get topic by ID
router.get('/:id', topicController.getTopicById);

module.exports = router;