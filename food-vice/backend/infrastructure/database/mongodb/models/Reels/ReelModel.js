const mongoose = require('mongoose')

const ReelSchema = new mongoose.Schema({
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  videoUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Reel', ReelSchema);