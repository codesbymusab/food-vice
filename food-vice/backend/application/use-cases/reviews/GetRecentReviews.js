const {formatReviewDate}=require('../../../shared/utils/dateFormatter')
class GetRecentReviews {
    constructor(reviewRepo) {
        this.reviewRepo = reviewRepo
    }

    async execute({userId}) {

        
        const result = {};

        const reviews = await this.reviewRepo.getRecentReviews({userId})
       
        if (reviews) {
            
            const withCounts = await Promise.all(
                    reviews.map(async (review) => {
                    const userReviewCount = await this.reviewRepo.getCountByUserId(review.user._id);
                    return {
                        ...review,
                        createdAt: formatReviewDate(review.createdAt),
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