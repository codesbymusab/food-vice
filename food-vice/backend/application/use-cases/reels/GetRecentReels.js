class GetRecentReels{
  
    constructor(reelRepo) {
    this.reelRepo = reelRepo; 
  }

  async execute({ limit = 10,userId,tag=null}) {

    if(!userId) return new Error('UserId required')
    const reels = await this.reelRepo.getReels(limit,userId,"all",tag);
    return reels;
  }
}

module.exports = GetRecentReels
