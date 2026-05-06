class GetUserReels{
  
    constructor(reelRepo) {
    this.reelRepo = reelRepo; 
  }

  async execute({ limit = 10,userId }) {
    
    if(!userId) return new Error('UserId required')
    const savedReels = await this.reelRepo.getReels(limit,userId,'saved');
    const userReels = await this.reelRepo.getReels(limit,userId,'user');
  
    return {
        saved:savedReels,
        user:userReels
    }
  }
}

module.exports = GetUserReels
