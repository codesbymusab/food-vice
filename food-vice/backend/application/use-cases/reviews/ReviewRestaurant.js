class ReviewRestaurant
{
    constructor(reviewRepo,mediaRepo) {
        this.reviewRepo = reviewRepo;
        this.mediaRepo=mediaRepo
    }

    async execute(data) {
        
        if(!data.userId){
            throw new Error('User id required')
        }

        if(!data.restId){
            throw new Error('Restaurant id required')
        }

        if(!data.rating){
            throw new Error('Rating is requied')
        }

        return await this.reviewRepo.createReview({userId:data.userId,restaurantId:data.restId,text:data.text})
    }


}

module.exports = ReviewRestaurant