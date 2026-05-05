class GetRecentReviews {
    constructor(reviewRepo) {
        this.reviewRepo = reviewRepo
    }

    async execute(data) {

        
        const result = {};

        const reviews = await this.reviewRepo.getRecentReviews({})
       
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

module.exports = GetRecentReviews