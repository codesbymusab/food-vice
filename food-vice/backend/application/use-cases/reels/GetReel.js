class GetReel{
  
    constructor(reelRepo) {
    this.reelRepo = reelRepo; 
  }

  async execute({ reelId,userId,}) {

    if(!userId) return new Error('UserId required')
    if(!reelId) return new Error('ReelId required')
    const reel = await this.reelRepo.getById(reelId,userId);
    return reel;
  }
}

module.exports = GetReel
