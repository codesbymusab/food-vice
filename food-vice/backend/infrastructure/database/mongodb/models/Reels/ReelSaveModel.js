const mongoose=require('mongoose')

const ReelSaveSchema = new mongoose.Schema({
  uid: { type:mongoose.Schema.Types.ObjectId, ref: 'User' },
  rid: { type:mongoose.Schema.Types.ObjectId, ref: 'Reel' }
});
ReelSave.index({ uid: 1, rid: 1 }, { unique: true });

module.exports = mongoose.model('ReelSave', ReelSaveSchema);