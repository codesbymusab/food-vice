const CommunityRepoImpl = require('../../infrastructure/database/mongodb/repositories/CommunityRepoImpl');
const CreateCommunity = require('../../application/use-cases/community/CreateCommunity');
const GetCommunities = require('../../application/use-cases/community/GetCommunities');
const JoinCommunity = require('../../application/use-cases/community/JoinCommunity');
const GetJoinedCommunities = require('../../application/use-cases/community/GetJoinedCommunities');

const communityRepo = new CommunityRepoImpl();

exports.createCommunity = async (req, res) => {
  try {
    const createCommunity = new CreateCommunity(communityRepo);
    const community = await createCommunity.execute({ ...req.body, userId: req.userId });
    res.status(201).json(community);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCommunities = async (req, res) => {
  try {
    const getCommunities = new GetCommunities(communityRepo);
    const communities = await getCommunities.execute({ name: req.query.name });
    res.status(200).json(communities);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.joinCommunity = async (req, res) => {
  try {
    const joinCommunity = new JoinCommunity(communityRepo);
    const membership = await joinCommunity.execute({ userId: req.userId, communityId: req.params.id });
    res.status(200).json(membership);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getJoinedCommunities = async (req, res) => {
  try {
    const getJoinedCommunities = new GetJoinedCommunities(communityRepo);
    const communities = await getJoinedCommunities.execute({ userId: req.userId });
    res.status(200).json(communities);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCommunityById = async (req, res) => {
  try {
    const community = await communityRepo.findById(req.params.id);
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }
    res.status(200).json(community);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
