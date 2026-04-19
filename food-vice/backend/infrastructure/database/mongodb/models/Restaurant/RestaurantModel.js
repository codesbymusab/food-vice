const mongoose=require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  website: String,
  description: String,
  priceCategory: String,
  locationId: { type: Schema.Types.ObjectId, ref: 'Location' }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);