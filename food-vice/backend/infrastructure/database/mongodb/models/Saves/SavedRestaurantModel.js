const mongoose=require('mongoose')

const SavedRestaurantSchema = new mongoose.Schema({
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant' }
});

module.exports = mongoose.model('SavedRestaurant', SavedRestaurantSchema);