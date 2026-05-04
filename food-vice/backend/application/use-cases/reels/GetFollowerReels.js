class GetFollowerReels{
  
    constructor(reelRepo) {
    this.reelRepo = reelRepo; 
  }

  async execute({ limit = 10,userId }) {
    
    if(!userId) return new Error('UserId required')
    const reels = await this.reelRepo.getReels(limit,userId,'followers');
    return reels;
  }
}

module.exports = GetFollowerReels
