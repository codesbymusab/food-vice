const mongoose=require('mongoose')

const ActivitySchema = new mongoose.Schema({
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  type: {type:String},
  referenceId: Schema.Types.ObjectId
}, { timestamps: true });

module.exports = mongoose.model('Activity', ActivitySchema);