const ReviewRestaurant = require("../../application/use-cases/reviews/ReviewRestaurant")
const MediaRepoImpl = require("../../infrastructure/database/mongodb/repositories/MediaRepoImpl")
const ReviewRepoImpl = require("../../infrastructure/database/mongodb/repositories/ReviewRepoImpl")
const GetRestaurantReviews = require('../../application/use-cases/restaurants/GetRestaurantReviews')
const GetRecentReviews = require("../../application/use-cases/reviews/GetRecentReviews")

exports.create = async (req, res) => {

    try {


        const reviewRepo = new ReviewRepoImpl()
        const mediaRepo = new MediaRepoImpl()
        const createReview = new ReviewRestaurant(reviewRepo, mediaRepo)
        const restReviews = await createReview.execute(req.body)


        if (restReviews) {
            res.status(200).json(restReviews);
        }

        res.status(400).json({ message: 'Restaurant not found' });


    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }


}

exports.restReviews = async (req, res) => {
    try {
        const restId = req.params.restaurantId
        console.log(restId)
        const reviewRepo = new ReviewRepoImpl()
        const getReviews = new GetRestaurantReviews(reviewRepo)
        const result = await getReviews.execute({ restId: restId })

        if (result.reviews) {
            res.status(200).json(result.reviews);
        }

        res.status(400).json({ message: 'Failed to load reviews' });
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}


exports.recentReviews = async (req, res) => {
    try {
        console.log("recent reviews")
        const reviewRepo = new ReviewRepoImpl()
        const getrecentReviews = new GetRecentReviews(reviewRepo)
        const result = await getrecentReviews.execute()

        if (result) {
            res.status(200).json(result.reviews);
        }

        res.status(400).json({ message: 'Failed to load recent reviews' });
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}