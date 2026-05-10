const TopicServiceImpl = require('../../infrastructure/services/TopicRepoImpl');
const TopicRepoImpl = require('../../infrastructure/database/mongodb/repositories/TopicRepoImpl');

const topicService = new TopicServiceImpl(new TopicRepoImpl());

class TopicController {
  async getAllTopics(req, res) {
    try {
      const topics = await topicService.getAllTopics();
      res.json(topics);
    } catch (error) {
      console.error('Error fetching topics:', error);
      res.status(500).json({ error: 'Failed to fetch topics' });
    }
  }

  async createTopic(req, res) {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ error: 'Topic name is required' });
      }

      const topic = await topicService.createTopic({ name });
      res.status(201).json(topic);
    } catch (error) {
      console.error('Error creating topic:', error);
      res.status(500).json({ error: 'Failed to create topic' });
    }
  }

  async getTopicById(req, res) {
    try {
      const { id } = req.params;
      const topic = await topicService.getTopicById(id);
      if (!topic) {
        return res.status(404).json({ error: 'Topic not found' });
      }
      res.json(topic);
    } catch (error) {
      console.error('Error fetching topic:', error);
      res.status(500).json({ error: 'Failed to fetch topic' });
    }
  }
}

module.exports = new TopicController();