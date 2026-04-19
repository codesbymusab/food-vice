const mongoose=require('mongoose')

const ReviewSchema = new mongoose.Schema({
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
  text: String
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);