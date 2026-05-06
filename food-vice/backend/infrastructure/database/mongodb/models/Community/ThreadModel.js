const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({
  uid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  communityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Community' },
  title: { type: String, required: true },
  content: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Thread', ThreadSchema);