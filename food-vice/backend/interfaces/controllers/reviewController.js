const ReviewRestaurant = require("../../application/use-cases/reviews/ReviewRestaurant")
const MediaRepoImpl = require("../../infrastructure/database/mongodb/repositories/MediaRepoImpl")
const ReviewRepoImpl = require("../../infrastructure/database/mongodb/repositories/ReviewRepoImpl")
const GetRestaurantReviews = require('../../application/use-cases/restaurants/GetRestaurantReviews')
const GetRecentReviews = require("../../application/use-cases/reviews/GetRecentReviews")
const GetUserReviews = require("../../application/use-cases/reviews/GetUserReviews")
const StorageServiceImpl = require("../../infrastructure/services/FirebaseStorage/StorageServiceImp")



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


exports.userReviews = async (req, res) => {
    try {
        
        const userId=req.params.userId
        const reviewRepo = new ReviewRepoImpl()
        const getuserReviews = new GetUserReviews(reviewRepo)
        const result = await getuserReviews.execute({userId})

        if (result) {
            res.status(200).json(result.reviews);
        }

        res.status(400).json({ message: 'Failed to load user reviews' });
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}

exports.createReview= async (req, res) =>  {
  try {
    const { userId, restaurantId, text, rating } = req.body;
    const formattedRating = typeof req.body.rating === "string" ? JSON.parse(req.body.rating) : req.body.rating;

    const files = req.files;
    const reviewRepo = new ReviewRepoImpl();
    const mediaRepo=new MediaRepoImpl()
    const storageService=new StorageServiceImpl()
    const reviewRestaurant = new ReviewRestaurant(reviewRepo,mediaRepo,storageService);
    const result = await reviewRestaurant.execute({
      userId,
      restaurantId,
      text,
      rating:formattedRating,
      files
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
}

