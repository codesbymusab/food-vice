const mongoose=require('mongoose')

const LocationSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  address: String,
  city: String,
  coordinates: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number] // [lng, lat]
  }
});

Location.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('Location', LocationSchema);
