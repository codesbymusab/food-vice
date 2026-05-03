class GetRestaurantReviews {
    constructor(reviewRepo) {
        this.reviewRepo = reviewRepo
    }

    async execute(data) {
        if (!data.restId) {
            throw new Error("Restaurant id required");
        }

        const result = {};

        const reviews = await this.reviewRepo.getReviews({restId:data.restId,userId:data.userId,currentUser:false})
       
        if (reviews) {
            
            const withCounts = await Promise.all(
                    reviews.map(async (review) => {
                    const userReviewCount = await this.reviewRepo.getCountByUserId(review.user._id);
                    return {
                        ...review,
                        user: {
                            ...review.user,
                            reviewCount: userReviewCount[0]?.reviewCount || 0
                        }
                    };
                })
            );
            result.reviews = withCounts;
        }


        return result;
    }



}

module.exports = GetRestaurantReviews