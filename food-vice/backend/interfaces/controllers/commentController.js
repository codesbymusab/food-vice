const GetReelComments = require("../../application/use-cases/reels/GetReelComments");
const PostReelComment = require("../../application/use-cases/reels/PostReelComment");
const CommentRepoImpl = require("../../infrastructure/database/mongodb/repositories/CommentRepoImpl");


exports.getComments = async (req, res) => {
    try {
        const { reelId } = req.params
        const { userId } = req.query;
        const commentRepo = new CommentRepoImpl()
        const getReelComments = new GetReelComments(commentRepo);

        const comments = await getReelComments.execute({ reelId, userId });
        res.json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}

exports.postComment = async (req, res) => {
    try {
        const { reelId } = req.params
        console.log(reelId)
        const { userId, text } = req.body;
        const commentRepo = new CommentRepoImpl()
        const postComment = new PostReelComment(commentRepo)
        const comment = await postComment.execute({ reelId, userId, text });
        res.status(201).json(comment);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
}


