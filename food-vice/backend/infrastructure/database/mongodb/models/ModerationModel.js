const mongoose=require('mongoose')

const ReportSchema = new mongoose.Schema({
  reportedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  targetType: { 
    type: String, 
    enum: ['review', 'reel', 'thread', 'restaurant'], 
    required: true 
  },
  targetId: Schema.Types.ObjectId,
  reason: String,
  status: { type: String, default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Report', ReportSchema);