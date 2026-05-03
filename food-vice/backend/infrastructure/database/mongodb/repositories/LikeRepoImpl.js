const ReviewLike = require('../models/Reviews/ReviewLikeModel')

const mongoose = require('mongoose')

class LikeRepoImpl {

    async likeReview({ userId, reviewId }) {

        return await ReviewLike.create({

            uid: userId,
            reviewId: reviewId
        })

    }

    async unlikeReview(id) {

        return await ReviewLike.findByIdAndDelete({ _id: id })

    }

    async getByReviewId({ reviewId, userId }) {

        return await ReviewLike.findOne({
            reviewId: reviewId,
            uid: userId
        })
    }
}

module.exports = LikeRepoImpl