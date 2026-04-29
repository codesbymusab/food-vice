const User = require('../models/User/UserModel')
const UserRepository = require('../../../../application/ports/repositories/UserRepository')
const mongoose=require('mongoose')

class UserRepoImpl {

    async getByEmail(email) {

        return await User.findOne({ email })

    }
    async getById(userId) {

        return await User.aggregate([

            {
                $match: {
                    "_id": new mongoose.Types.ObjectId(userId)

                },

            },
            {
                $project: {
                    "userId":"$_id",
                    "name": "$name",
                    "username": "$username",
                    "email": "$email",
                    "profilePhoto": "$profilePhoto",
                    "level": "$level",
                    "address": "$address",
                    "bio": "$bio"

                }
            }



        ]).exec()



    }
    async create(user) {

        return await User.create(user)

    }
    async update(user, data) {

        return await User.updateOne({ _id: user._id }, { $set: data })
    }
    async delete(user) {
        throw new Error('Not Implemented')
    }
}

module.exports = UserRepoImpl