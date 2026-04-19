const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  provider: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: {
    type: String,
    required: function () {
      return this.provider === "local";
    }
  },
  
  profilePhoto: String,
  address: String,
  bio: String,
  level: { type: Number, default: 1 },
  dateJoined: { type: Date, default: Date.now }
}, { timestamps: true });


module.exports = mongoose.model('User', UserSchema)