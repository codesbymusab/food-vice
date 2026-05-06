const Thread = require('../models/Community/ThreadModel');
const ThreadComment = require('../models/Community/ThreadCommentModel');

class ThreadRepoImpl {
  async create(threadData) {
    const thread = new Thread(threadData);
    return await thread.save();
  }

  async findByCommunity(communityId) {
    return await Thread.find({ communityId }).populate('uid', 'name profilePicture').sort({ createdAt: -1 });
  }

  async findById(id) {
    return await Thread.findById(id).populate('uid', 'name profilePicture');
  }

  async toggleLike(threadId, userId) {
    const thread = await Thread.findById(threadId);
    if (!thread) return null;

    const index = thread.likes.indexOf(userId);
    if (index === -1) {
      thread.likes.push(userId);
    } else {
      thread.likes.splice(index, 1);
    }
    return await thread.save();
  }

  async addComment(commentData) {
    const comment = new ThreadComment(commentData);
    return await comment.save();
  }

  async getComments(threadId) {
    return await ThreadComment.find({ threadId }).populate('uid', 'name profilePicture').sort({ createdAt: 1 });
  }

  async findAll() {
    return await Thread.find().populate('uid', 'name profilePicture').sort({ createdAt: -1 });
  }
}

module.exports = ThreadRepoImpl;
