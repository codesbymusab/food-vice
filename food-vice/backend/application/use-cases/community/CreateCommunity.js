class CreateCommunity {
  constructor(communityRepo) {
    this.communityRepo = communityRepo;
  }

  async execute({ name, description, guidelines, coverPhoto, category, userId }) {
    const community = await this.communityRepo.create({
      name,
      description,
      guidelines,
      coverPhoto,
      category,
      createdBy: userId
    });

    // Auto-join the creator
    await this.communityRepo.addMember({
      userId,
      communityId: community._id,
      role: 'admin'
    });

    return community;
  }
}

module.exports = CreateCommunity;
