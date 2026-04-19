const mongoose=require('mongoose')

const MediaSchema = new mongoose.Schema({
  url: { type: String, required: true },

  type: { 
    type: String, 
    enum: ['image', 'video'], 
    required: true 
  },

  ownerType: { 
    type: String, 
    enum: ['review', 'reel', 'thread', 'restaurant'], 
    required: true 
  },

  ownerId: { 
    type: Schema.Types.ObjectId, 
    required: true 
  },

  uploadedBy: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  }

}, { timestamps: true });


module.exports = mongoose.model('Media', MediaSchema);

