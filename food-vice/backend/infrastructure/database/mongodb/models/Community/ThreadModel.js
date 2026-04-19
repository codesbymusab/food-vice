const mongoose=require('mongoose')

const ThreadSchema = new mongoose.Schema({
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  communityId: { type: Schema.Types.ObjectId, ref: 'Community' },
  title: String,
  content: String,
  views: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Thread', ThreadSchema);