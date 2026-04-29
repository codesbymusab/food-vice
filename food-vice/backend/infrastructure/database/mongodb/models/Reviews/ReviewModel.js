const mongoose=require('mongoose')

const ReviewSchema = new mongoose.Schema({
  uid: { type:mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurantId: { type:mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  text: String
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);