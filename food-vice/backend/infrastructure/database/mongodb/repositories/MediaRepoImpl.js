const Media = require('../models/MediaModel')
class MediaRepoImpl {
    async getByOwnerId(ownerId, all=false) {

        if (all) {
            return await Media.find({ ownerId: ownerId })
        }
        else {
            return await Media.findOne({ ownerId: ownerId })
        }
    }

}

module.exports = MediaRepoImpl