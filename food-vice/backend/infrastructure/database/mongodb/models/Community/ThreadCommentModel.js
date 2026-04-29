const mongoose=require('mongoose')

const ThreadCommentSchema = new mongoose.Schema({
  uid: { type:mongoose.Schema.Types.ObjectId, ref: 'User' },
  threadId: { type:mongoose.Schema.Types.ObjectId, ref: 'Thread' },
  content: String
}, { timestamps: true });

module.exports = mongoose.model('ThreadComment', ThreadCommentSchema);