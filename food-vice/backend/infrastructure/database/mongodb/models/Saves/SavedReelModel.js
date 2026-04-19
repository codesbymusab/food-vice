const mongoose=require('mongoose')

const SavedReelSchema = new mongoose.Schema({
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  reelId: { type: Schema.Types.ObjectId, ref: 'Reel' }
});

module.exports = mongoose.model('SavedReel', SavedReelSchema);