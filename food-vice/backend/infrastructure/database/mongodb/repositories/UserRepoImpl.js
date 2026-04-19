const User = require('../models/User/UserModel')
const UserRepository=require('../../../../application/ports/repositories/UserRepository')

class UserRepoImpl {

    async getByEmail(email) {
        
        return await User.findOne({email})
        
    }
    async getById(userId) {
        
        return await User.findOne({_id:userId})
        
    }
    async create(user) {
        
        return await User.create(user)

    }
    async update(user,data) {
        
        return await User.updateOne({ _id: user._id }, { $set: data })
    }
    async delete(user) {
        throw new Error('Not Implemented')
    }
}

module.exports = UserRepoImpl