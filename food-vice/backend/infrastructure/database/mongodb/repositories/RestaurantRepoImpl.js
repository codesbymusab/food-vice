const Restaurant = require('../models/Restaurant/RestaurantModel')
const Location = require('../models/LocationModel')
const OpeningHours = require('../models/Restaurant/OpeningHoursModel')
const RestaurantCuisines = require('../models/Restaurant/RestaurantCuisineModel')
const RestaurantLabels = require('../models/Restaurant/RestaurantLabelModel')
const mongoose = require('mongoose')
const RestaurantCuisineModel = require('../models/Restaurant/RestaurantCuisineModel')
const CusineModel = require('../models/Restaurant/CusineModel')
const SavedRestaurant = require('../models/Saves/SavedRestaurantModel')


class RestaurantRepoImpl {

    async getRecommended(location, filters, userId, limitCount = 5) {

        const savedCuisineIds = await SavedRestaurant.aggregate([
            { $match: { uid: new mongoose.Types.ObjectId(userId) } },
            {
                $lookup: {
                    from: "restaurantcuisines",
                    localField: "restaurantId",
                    foreignField: "restaurantId",
                    as: "rc"
                }
            },
            { $unwind: "$rc" },
            { $group: { _id: null, cuisineIds: { $addToSet: "$rc.cuisineId" } } }
        ]);

        const cuisineIds = savedCuisineIds[0]?.cuisineIds || [];


        return await Location.aggregate([
            {
                $geoNear: {
                    near: { type: "Point", coordinates: location },
                    distanceField: "distKm",
                    spherical: true,
                    distanceMultiplier: 0.001,
                    maxDistance: filters.distance * 1000
                }
            },
            {
                $lookup: {
                    from: "restaurants",
                    localField: "_id",
                    foreignField: "locationId",
                    as: "restaurant"
                }
            },
            { $unwind: "$restaurant" },
            {
                $lookup: {
                    from: "restaurantcuisines",
                    localField: "restaurant._id",
                    foreignField: "restaurantId",
                    as: "rc"
                }
            },
            { $unwind: "$rc" },
            {
                $match: {
                    "rc.cuisineId": { $in: cuisineIds }
                }
            },
            {
                $lookup: {
                    from: "cuisines",
                    localField: "rc.cuisineId",
                    foreignField: "_id",
                    as: "cuisine"
                }
            },
            { $unwind: "$cuisine" },
            {
                $lookup: {
                    from: "reviews",
                    localField: "restaurant._id",
                    foreignField: "restaurantId",
                    as: "reviews"
                }
            },
            { $unwind: "$reviews" },
            {
                $lookup: {
                    from: "ratings",
                    localField: "reviews._id",
                    foreignField: "reviewId",
                    as: "ratingDocs"
                }
            },
            { $unwind: "$ratingDocs" },
            {
                $lookup: {
                    from: "openinghours",
                    localField: "restaurant._id",
                    foreignField: "restaurantId",
                    as: "oh"
                }
            },
            {
                $lookup: {
                    from: "savedrestaurants",
                    let: { restId: "$restaurant._id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $eq: ["$restaurantId", "$$restId"] },
                                        { $eq: ["$uid", new mongoose.Types.ObjectId(userId)] }
                                    ]
                                }
                            }
                        }
                    ],
                    as: "savedDocs"
                }
            },
            {
                $group: {
                    _id: "$restaurant._id",
                    name: { $first: "$restaurant.name" },
                    distKm: { $first: "$distKm" },
                    avgOverall: { $avg: "$ratingDocs.overall" },
                    cuisines: { $addToSet: "$cuisine.name" },
                    priceCategory: { $first: "$restaurant.priceCategory" },
                    openingHours: { $first: "$oh" },
                    latitude: { $first: "$latitude" },
                    longitude: { $first: "$longitude" },
                    savedDocs: { $first: "$savedDocs" }

                }
            },
            {
                $addFields: {
                    isSaved: { $gt: [{ $size: "$savedDocs" }, 0] }
                }
            },
            {
                $match: {
                    ...(filters.price ? { priceCategory: filters.price } : {}),
                    ...(filters.rating && filters.rating > 0
                        ? { avgOverall: { $gte: filters.rating } }
                        : {})
                }
            },
            { $sort: { avgOverall: -1 } },
            { $limit: limitCount }
        ]).exec();
    }


    async getTopRated(location, filters, userId, limitCount = 5) {
        console.log(filters)

        return await Location.aggregate([
            {
                $geoNear: {
                    near: { type: "Point", coordinates: location },
                    distanceField: "distKm",
                    spherical: true,
                    distanceMultiplier: 0.001,
                    maxDistance: filters.distance * 1000
                }
            },
            {
                $lookup: {
                    from: "restaurants",
                    localField: "_id",
                    foreignField: "locationId",
                    as: "restaurant"
                }
            },
            { $unwind: "$restaurant" },
            {
                $lookup: {
                    from: "reviews",
                    localField: "restaurant._id",
                    foreignField: "restaurantId",
                    as: "reviews"
                }
            },
            { $unwind: "$reviews" },
            {
                $lookup: {
                    from: "ratings",
                    localField: "reviews._id",
                    foreignField: "reviewId",
                    as: "ratingDocs"
                }
            },
            { $unwind: "$ratingDocs" },
            {
                $lookup: {
                    from: "restaurantcuisines",
                    localField: "restaurant._id",
                    foreignField: "restaurantId",
                    as: "rc"
                }
            },
            { $unwind: "$rc" },
            {
                $lookup: {
                    from: "cuisines",
                    localField: "rc.cuisineId",
                    foreignField: "_id",
                    as: "cuisine"
                }
            },
            { $unwind: "$cuisine" },
            {
                $lookup: {
                    from: "openinghours",
                    localField: "restaurant._id",
                    foreignField: "restaurantId",
                    as: "oh"
                }
            },

            {
                $lookup: {
                    from: "savedrestaurants",
                    let: { restId: "$restaurant._id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $eq: ["$restaurantId", "$$restId"] },
                                        { $eq: ["$uid", new mongoose.Types.ObjectId(userId)] }
                                    ]
                                }
                            }
                        }
                    ],
                    as: "savedDocs"
                }
            },
            {
                $group: {
                    _id: "$restaurant._id",
                    name: { $first: "$restaurant.name" },
                    distKm: { $first: "$distKm" },
                    avgOverall: { $avg: "$ratingDocs.overall" },
                    cuisines: { $addToSet: "$cuisine.name" },
                    priceCategory: { $first: "$restaurant.priceCategory" },
                    openingHours: { $first: "$oh" },
                    latitude: { $first: "$latitude" },
                    longitude: { $first: "$longitude" },
                    savedDocs: { $first: "$savedDocs" }
                }
            },

            {
                $addFields: {
                    isSaved: { $gt: [{ $size: "$savedDocs" }, 0] }
                }
            },
            {
                $match: {
                    ...(filters.cuisine && filters.cuisine !== "All"
                        ? { cuisines: filters.cuisine }
                        : {}),
                    ...(filters.price ? { priceCategory: filters.price } : {}),
                    ...(filters.rating && filters.rating > 0
                        ? { avgOverall: { $gte: filters.rating } }
                        : {})
                }
            },
            { $sort: { avgOverall: -1 } },
            { $limit: filters.limitCount ? filters.limitCount : limitCount }
        ]).exec();
    }




    async getNearby(location, filters) {
        throw new Error('Not Implemented')
    }

    async getById(id) {
        return await Restaurant.findOne({ _id: id })
    }

    async getLocation(locationId, from) {

        if (from) {
            return await Location.aggregate([
                {
                    $geoNear: {
                        near: { type: "Point", coordinates: from },
                        distanceField: "distKm",
                        spherical: true,
                        distanceMultiplier: 0.001,
                        query: { _id: new mongoose.Types.ObjectId(locationId) },


                    },

                },


            ]).exec()
        }
        return await Location.find({ _id: locationId })

    }

    async getOpeningHours(id) {

        return await OpeningHours.find({ restaurantId: id })

    }

    async getCuisines(restId) {

        if (restId) {
            return await RestaurantCuisines.aggregate([
                { "$match": { "restaurantId": new mongoose.Types.ObjectId(restId) } },
                {
                    "$lookup": {
                        "from": "cuisines",
                        "localField": "cuisineId",
                        "foreignField": "_id",
                        "as": "cuisine"
                    }
                },
                { "$unwind": "$cuisine" },
                { "$project": { "_id": 0, "cuisine._id": 1, "cuisine.name": 1 } }
            ]
            ).exec()
        }
        else {

            return CusineModel.find()
        }

    }

    async getLabels(id) {
        return await RestaurantLabels.aggregate([
            { "$match": { "restaurantId": new mongoose.Types.ObjectId(id) } },
            {
                "$lookup": {
                    "from": "labels",
                    "localField": "labelId",
                    "foreignField": "_id",
                    "as": "label"
                }
            },
            { "$unwind": "$label" },
            { "$project": { "_id": 0, "label._id": 1, "label.name": 1, "label.symbol": 1 } }
        ]
        ).exec()
    }



    async getSimilarRestaurants(id) {

        return await RestaurantCuisines.aggregate([


            { $match: { restaurantId: new mongoose.Types.ObjectId(id) } },
            {
                $group: {
                    _id: null,
                    cuisineIds: { $addToSet: "$cuisineId" }
                }
            },


            {
                $lookup: {
                    from: "restaurantcuisines",
                    let: { cuisineIds: "$cuisineIds" },
                    pipeline: [

                        {
                            $match: {
                                $expr: {
                                    $and: [
                                        { $in: ["$cuisineId", "$$cuisineIds"] },
                                        { $ne: ["$restaurantId", new mongoose.Types.ObjectId(id)] }
                                    ]
                                }
                            }
                        }

                        ,
                        {
                            $lookup: {
                                from: "reviews",
                                localField: "restaurantId",
                                foreignField: "restaurantId",
                                as: "reviews"
                            }
                        },
                        { $unwind: "$reviews" },
                        {
                            $lookup: {
                                from: "ratings",
                                localField: "reviews._id",
                                foreignField: "reviewId",
                                as: "ratingDocs"
                            }
                        },
                        { $unwind: "$ratingDocs" },
                        {
                            $group: {
                                _id: "$restaurantId",
                                avgOverall: { $avg: "$ratingDocs.overall" }
                            }
                        },
                        {
                            $lookup: {
                                from: "restaurants",
                                localField: "_id",
                                foreignField: "_id",
                                as: "restaurant"
                            }
                        },
                        { $unwind: "$restaurant" },

                        { $sort: { avgOverall: -1 } },
                        { $limit: 3 }
                    ],
                    as: "topSimilarRestaurants"
                }
            },

            {
                $project: {
                    topSimilarRestaurants: 1
                }
            }

        ]).exec()
    }

    async getSavedRestaurants(userId, limit = 5) {
    return await SavedRestaurant.aggregate([
        {
            $match: {
                uid: new mongoose.Types.ObjectId(userId)
            }
        },

       
        {
            $lookup: {
                from: "restaurants",
                localField: "restaurantId",
                foreignField: "_id",
                as: "restaurant"
            }
        },
        { $unwind: "$restaurant" },

       
        {
            $lookup: {
                from: "restaurantcuisines",
                localField: "restaurant._id",
                foreignField: "restaurantId",
                as: "rc"
            }
        },
        {
            $lookup: {
                from: "cuisines",
                localField: "rc.cuisineId",
                foreignField: "_id",
                as: "cuisines"
            }
        },

      
        {
            $lookup: {
                from: "reviews",
                localField: "restaurant._id",
                foreignField: "restaurantId",
                as: "reviews"
            }
        },

        {
            $lookup: {
                from: "ratings",
                localField: "reviews._id",
                foreignField: "reviewId",
                as: "ratingDocs"
            }
        },

    
        {
            $addFields: {
                avgOverall: {
                    $cond: [
                        { $gt: [{ $size: "$ratingDocs" }, 0] },
                        { $avg: "$ratingDocs.overall" },
                        null
                    ]
                }
            }
        },

       
        {
            $lookup: {
                from: "media",
                let: { restId: "$restaurant._id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ["$ownerId", "$$restId"] },
                                    { $eq: ["$ownerType", "restaurant"] },
                                    { $eq: ["$type", "image"] }
                                ]
                            }
                        }
                    },
                    { $sort: { createdAt: 1 } },
                    {$limit: 1} 
                ],
                as: "media"
            }
        },
       
        {
            $unwind: "$media"
        },
        {
            $project: {
                _id: 0,
                restaurant: {
                    _id: "$restaurant._id",
                    name: "$restaurant.name",
                    description: "$restaurant.description",
                    priceCategory: "$restaurant.priceCategory"
                },
                coverPhoto: 1,
                cuisines: "$cuisines.name",
                rating: { overallRating: { $round: ["$avgOverall", 1] } },
                savedAt: "$createdAt",
                media:1
            }
        },

        { $sort: { savedAt: -1 } },
        { $limit: limit }
    ]).exec();
}






}

module.exports = RestaurantRepoImpl