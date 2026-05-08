class TopicService {
  constructor(topicRepository) {
    this.topicRepository = topicRepository;
  }

  async createTopic(topicData) {
    throw new Error('Method not implemented');
  }

  async getAllTopics() {
    throw new Error('Method not implemented');
  }

  async getTopicById(id) {
    throw new Error('Method not implemented');
  }

  async getTopicsByIds(ids) {
    throw new Error('Method not implemented');
  }
}

module.exports = TopicService;