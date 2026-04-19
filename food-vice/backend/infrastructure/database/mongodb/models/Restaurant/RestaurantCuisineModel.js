const mongoose=require('mongoose')

const RestaurantCuisineSchema = new mongoose.Schema({
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
  cuisineId: { type: Schema.Types.ObjectId, ref: 'Cuisine' }
});

module.exports = mongoose.model('RestaurantCuisine', RestaurantCuisineSchema);