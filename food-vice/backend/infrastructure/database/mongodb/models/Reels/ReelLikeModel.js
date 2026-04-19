const mongoose=require('mongoose')

const ReelLikeSchema = new mongoose.Schema({
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  rid: { type: Schema.Types.ObjectId, ref: 'Reel' }
});
ReelLike.index({ uid: 1, rid: 1 }, { unique: true });

module.exports = mongoose.model('ReelLike', ReelLikeSchema);