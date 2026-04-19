const mongoose=require('mongoose')

const ThreadCommentSchema = new mongoose.Schema({
  uid: { type: Schema.Types.ObjectId, ref: 'User' },
  threadId: { type: Schema.Types.ObjectId, ref: 'Thread' },
  content: String
}, { timestamps: true });

module.exports = mongoose.model('ThreadComment', ThreadCommentSchema);