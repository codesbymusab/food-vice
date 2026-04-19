const mongoose=require('mongoose')

const CommunitySchema = new mongoose.Schema({
  name: String,
  description: String,
  coverPhoto: String,
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Community', CommunitySchema);
