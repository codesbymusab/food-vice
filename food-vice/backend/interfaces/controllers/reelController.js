
const GetFollowerReels = require("../../application/use-cases/reels/GetFollowerReels");
const GetPopularTags = require("../../application/use-cases/reels/GetPopularTags");
const GetRecentReels = require("../../application/use-cases/reels/GetRecentReels");
const GetReelComments = require("../../application/use-cases/reels/GetReelComments");
const GetUserReels = require("../../application/use-cases/reels/GetUserReels");
const PostReelComment = require("../../application/use-cases/reels/PostReelComment");
const UploadReel = require("../../application/use-cases/reels/UploadReel");
const ReelModel = require("../../infrastructure/database/mongodb/models/Reels/ReelModel");
const Reel = require("../../infrastructure/database/mongodb/models/Reels/ReelModel");
const ReelTag = require("../../infrastructure/database/mongodb/models/Reels/ReelTagModel");
const MediaRepoImpl = require("../../infrastructure/database/mongodb/repositories/MediaRepoImpl");
const ReelRepoImpl = require("../../infrastructure/database/mongodb/repositories/ReelRepoImpl");
const StorageServiceImpl = require("../../infrastructure/services/FirebaseStorage/StorageServiceImp");




exports.upload = async (req, res) => {
    try {
        const file = req.file;
        const mediaRepo = new MediaRepoImpl()
        const storageService = new StorageServiceImpl()
        const reelRepo = new ReelRepoImpl()
        const uploadReel = new UploadReel(mediaRepo, reelRepo, storageService);


        const media = await uploadReel.execute({ ...req.body, file });

        res.status(201).json(media);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}


exports.getRecent = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const userId = req.query.userId
       
        const reelRepo = new ReelRepoImpl()
        const getRecentReels = new GetRecentReels(reelRepo)
        const reels = await getRecentReels.execute({ limit, userId });
        res.json(reels);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

exports.getFollowers = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const userId = req.query.userId
        
        const reelRepo = new ReelRepoImpl()
        const getRecentReels = new GetFollowerReels(reelRepo)
        const reels = await getRecentReels.execute({ limit, userId });
        res.json(reels);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

exports.getPopularTags = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const reelRepo = new ReelRepoImpl()
        const getPopularTagsUseCase = new GetPopularTags(reelRepo);
        const tags = await getPopularTagsUseCase.execute({ limit });
        res.json(tags);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}


exports.updateViews=async (req, res) => {
    try {
        const { reelId } = req.params;
        await ReelModel.updateOne(
            { _id: reelId },
            { $inc: { views: 1 } }
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


exports.getUserReels = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const userId = req.params.userId
        const reelRepo = new ReelRepoImpl()
        const getReels = new GetUserReels(reelRepo)
        const reels = await getReels.execute({ limit, userId });
        res.json(reels);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}