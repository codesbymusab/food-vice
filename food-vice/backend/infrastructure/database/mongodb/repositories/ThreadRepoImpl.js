const Thread = require('../models/Community/ThreadModel');
const ThreadComment = require('../models/Community/ThreadCommentModel');

class ThreadRepoImpl {
  async create(threadData) {
    const thread = new Thread(threadData);
    return await thread.save();
  }

  async findByCommunity(communityId, searchQuery = '', topicIds = []) {
    let query = { communityId };

    if (searchQuery) {
      query.$or = [
        { title: { $regex: searchQuery, $options: 'i' } },
        { content: { $regex: searchQuery, $options: 'i' } }
      ];
    }

    if (topicIds.length > 0) {
      query.topics = { $in: topicIds };
    }

    return await Thread.find(query).populate('uid', 'name profilePicture').populate('media').sort({ createdAt: -1 });
  }

  async findById(id) {
    return await Thread.findById(id).populate('uid', 'name profilePicture').populate('media');
  }

  async toggleLike(threadId, userId) {
    const thread = await Thread.findById(threadId);
    if (!thread) return null;

    const likeIndex = thread.likes.indexOf(userId);
    const dislikeIndex = thread.dislikes.indexOf(userId);

    if (likeIndex === -1) {
      thread.likes.push(userId);
      // Remove from dislikes if present
      if (dislikeIndex !== -1) {
        thread.dislikes.splice(dislikeIndex, 1);
      }
    } else {
      thread.likes.splice(likeIndex, 1);
    }
    return await thread.save();
  }

  async toggleDislike(threadId, userId) {
    const thread = await Thread.findById(threadId);
    if (!thread) return null;

    const dislikeIndex = thread.dislikes.indexOf(userId);
    const likeIndex = thread.likes.indexOf(userId);

    if (dislikeIndex === -1) {
      thread.dislikes.push(userId);
      // Remove from likes if present
      if (likeIndex !== -1) {
        thread.likes.splice(likeIndex, 1);
      }
    } else {
      thread.dislikes.splice(dislikeIndex, 1);
    }
    return await thread.save();
  }

  async addComment(commentData) {
    const comment = new ThreadComment(commentData);
    return await comment.save();
  }

  async toggleCommentLike(commentId, userId) {
    const comment = await ThreadComment.findById(commentId);
    if (!comment) return null;

    const likeIndex = comment.likes.findIndex((id) => id.toString() === userId.toString());

    if (likeIndex === -1) {
      comment.likes.push(userId);
    } else {
      comment.likes.splice(likeIndex, 1);
    }

    return await comment.save();
  }

  async getComments(threadId) {
    return await ThreadComment.find({ threadId }).populate('uid', 'name profilePicture').populate('media').sort({ createdAt: 1 });
  }

  async findAll() {
    return await Thread.find().populate('uid', 'name profilePicture').populate('media').sort({ createdAt: -1 });
  }
}

module.exports = ThreadRepoImpl;
