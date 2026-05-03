const SaveRestaurant = require('../models/Saves/SavedRestaurantModel.js')

const mongoose = require('mongoose')

class SaveRepoImpl {

    async saveRestaurant({ userId, restId }) {
        return await SaveRestaurant.create({
            uid: userId,
            restaurantId: restId
        });
    }




    async unsaveRestaurant(id) {


        return await SaveRestaurant.findByIdAndDelete({ _id: id })

    }

    async getByRestId({ restId, userId }) {

        return await SaveRestaurant.findOne({
            restaurantId: restId,
            uid: userId
        })
    }

}

module.exports = SaveRepoImpl