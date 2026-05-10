class TopicServiceImpl {
  constructor(topicRepository) {
    this.topicRepository = topicRepository;
  }

  async createTopic(topicData) {
    return await this.topicRepository.create(topicData);
  }

  async getAllTopics() {
    return await this.topicRepository.findAll();
  }

  async getTopicById(id) {
    return await this.topicRepository.findById(id);
  }

  async getTopicsByIds(ids) {
    return await this.topicRepository.findByIds(ids);
  }
}

module.exports = TopicServiceImpl;