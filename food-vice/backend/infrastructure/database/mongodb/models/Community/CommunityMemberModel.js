const mongoose=require('mongoose')

const CommunityMemberSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  communityId: { type: Schema.Types.ObjectId, ref: 'Community' },
  role: { type: String, default: 'member' }
});

module.exports = mongoose.model('CommunityMember', CommunityMemberSchema);