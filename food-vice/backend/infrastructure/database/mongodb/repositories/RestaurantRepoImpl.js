const Restaurant = require('../models/Restaurant/RestaurantModel')
const Location = require('../models/LocationModel')
const OpeningHours = require('../models/Restaurant/OpeningHoursModel')
const RestaurantCuisines = require('../models/Restaurant/RestaurantCuisineModel')
const RestaurantLabels = require('../models/Restaurant/RestaurantLabelModel')
const mongoose = require('mongoose')

class RestaurantRepoImpl {

    async getRecommended(location, filters) {
        throw new Error('Not Implemented')
    }

    async getTopRated(location, filters) {

        return await Location.aggregate([

            {
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: location
                    },

                    distanceField: "distKm",
                    spherical: true,
                    distanceMultiplier: 0.001,
                    maxDistance: 12000
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
            {
                $unwind: "$restaurant"
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
                $unwind: "$reviews"
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
                $unwind: "$ratingDocs"
            },


            {
                $lookup: {
                    from: "restaurantcuisines",
                    localField: "restaurant._id",
                    foreignField: "restaurantId",
                    as: "rc"
                }
            },
            {
                $unwind: "$rc"
            },
            {
                $lookup: {
                    from: "cuisines",
                    localField: "rc.cuisineId",
                    foreignField: "_id",
                    as: "cuisine"
                }
            },
            {
                $unwind: "$cuisine"
            },
            {
                $lookup: {
                    from: "openinghours",
                    localField: "restaurant._id",
                    foreignField: "restaurantId",
                    as: "oh"
                }
            },


            {
                $group: {
                    _id: "$restaurant._id",
                    name: {
                        $first: "$restaurant.name"
                    },
                    distKm: {
                        $first: "$distKm"
                    },
                    avgOverall: { $avg: "$ratingDocs.overall" },
                    cuisines: {
                        $addToSet: "$cuisine.name"
                    },
                    priceCategory: {
                        $first: "$restaurant.priceCategory"
                    },
                    openingHours: {
                        $first: "$oh"
                    }, latitude: {
                        $first: "$latitude"
                    },
                    longitude: {
                        $first: "$longitude"
                    }
                }
            },

            {
                $sort: {
                    avgOverall: -1
                }
            },
            {
                $limit: 10
            }
        ]).exec()
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

    async getCuisines(id) {

        return await RestaurantCuisines.aggregate([
            { "$match": { "restaurantId": new mongoose.Types.ObjectId(id) } },
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
                                        { $ne: ["$restaurantId",new mongoose.Types.ObjectId(id)] }
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
}

module.exports = RestaurantRepoImpl