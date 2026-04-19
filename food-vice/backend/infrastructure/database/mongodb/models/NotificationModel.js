const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  type: String,
  content: String,
  isRead: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);