const mongoose=require('mongoose')

const ReelCommentSchema = new mongoose.Schema({
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  rid: { type: Schema.Types.ObjectId, ref: 'Reel' },
  text: String
}, { timestamps: true });

module.exports = mongoose.model('ReelComment', ReelCommentSchema);
