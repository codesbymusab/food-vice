const ThreadRepoImpl = require('../../infrastructure/database/mongodb/repositories/ThreadRepoImpl');

const threadRepo = new ThreadRepoImpl();

exports.createThread = async (req, res) => {
  try {
    const thread = await threadRepo.create({ ...req.body, uid: req.userId });
    return res.status(201).json(thread);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getThreadsByCommunity = async (req, res) => {
  try {
    const threads = await threadRepo.findByCommunity(req.params.communityId);
    return res.status(200).json(threads);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getAllThreads = async (req, res) => {
  try {
    const threads = await threadRepo.findAll();
    return res.status(200).json(threads);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getThreadById = async (req, res) => {
  try {
    const thread = await threadRepo.findById(req.params.id);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    return res.status(200).json(thread);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.likeThread = async (req, res) => {
  try {
    const thread = await threadRepo.toggleLike(req.params.id, req.userId);
    return res.status(200).json(thread);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.addComment = async (req, res) => {
  try {
    const comment = await threadRepo.addComment({ ...req.body, uid: req.userId, threadId: req.params.id });
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await threadRepo.getComments(req.params.id);
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
