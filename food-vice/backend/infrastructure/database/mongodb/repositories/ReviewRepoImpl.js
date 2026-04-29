const RestaurantReviews = require('../models/Reviews/ReviewModel')
const mongoose = require('mongoose')

class ReviewRepoImpl {


    async getCountByUserId(userId) {
        return await RestaurantReviews.aggregate([
            { "$match": { "uid": new mongoose.Types.ObjectId(userId) } },
            { "$count": "reviewCount" }
        ]
        ).exec()
    }

    async getCountByRestId(restId) {
        return await RestaurantReviews.aggregate([
            { "$match": { "restaurantId": new mongoose.Types.ObjectId(restId) } },
            { "$count": "reviewCount" }
        ]
        ).exec()
    }

    async getRestaurantRating(restId) {
        return await RestaurantReviews.aggregate([
            { "$match": { "restaurantId": new mongoose.Types.ObjectId(restId) } },

            {
                "$lookup": {
                    "from": "ratings",
                    "localField": "_id",
                    "foreignField": "reviewId",
                    "as": "ratingDocs"
                }
            },
            { "$unwind": "$ratingDocs" },
            {
                "$group": {
                    "_id": "$restaurantId",
                    "overallRating": { "$avg": "$ratingDocs.overall" },
                    "foodRating": { "$avg": "$ratingDocs.food" },
                    "serviceRating": { "$avg": "$ratingDocs.service" },
                    "ambienceRating": { "$avg": "$ratingDocs.ambience" },
                    "valueRating": { "$avg": "$ratingDocs.price" },
                    "totalReviews": { "$sum": 1 }
                }
            }

        ]

        ).exec()
    }

    async getReviews({ restId, userId, limitCount = 5 }) {
        const matchStage = {};
        if (restId) matchStage.restaurantId = new mongoose.Types.ObjectId(restId);
        if (userId && limitCount===1) matchStage.uid = new mongoose.Types.ObjectId(userId);

        return await RestaurantReviews.aggregate([
            { $match: matchStage },
            { $sort: { createdAt: -1 } },
            { $limit: limitCount },
            {
                $lookup: {
                    from: "users",
                    localField: "uid",
                    foreignField: "_id",
                    as: "user",
                },
            },
            { $unwind: "$user" },
            {
                $lookup: {
                    from: "media",
                    localField: "_id",
                    foreignField: "ownerId",
                    as: "photos",
                },
            },
           
            {
                $lookup: {
                    from: "reviewlikes",
                    let: { reviewId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $eq: ["$reviewId", "$$reviewId"] },
                                        { $eq: ["$uid", new mongoose.Types.ObjectId(userId)] },
                                    ],
                                },
                            },
                        },
                    ],
                    as: "likeStatus",
                },
            },
            {
                $addFields: {
                    isLikedByUser: { $gt: [{ $size: "$likeStatus" }, 0] },
                },
            },
            {
                $project: {
                    _id: 1,
                    text: 1,
                    createdAt: 1,
                    "photos._id": 1,
                    "photos.url": 1,
                    "photos.caption": 1,
                    "user._id": 1,
                    "user.name": 1,
                    "user.username": 1,
                    "user.profilePhoto": 1,
                    "user.level": 1,
                    isLikedByUser: 1,
                },
            },
        ]).exec();
    }




}

module.exports = ReviewRepoImpl