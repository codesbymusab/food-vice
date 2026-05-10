class GetPopularTags{
  constructor(reelRepo) {
    this.reelRepo = reelRepo
  }

  async execute({ limit = 1 }) {
    return await this.reelRepo.getPopularTags(limit);
  }
}

module.exports = GetPopularTags;
