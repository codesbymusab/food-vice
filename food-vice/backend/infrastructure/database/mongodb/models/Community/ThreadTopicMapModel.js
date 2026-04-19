const mongoose=require('mongoose')

const ThreadTopicMapSchema = new mongoose.Schema({
  threadId: { type: Schema.Types.ObjectId, ref: 'Thread' },
  topicId: { type: Schema.Types.ObjectId, ref: 'Topic' }
});

module.exports = mongoose.model('ThreadTopicMap', ThreadTopicMapSchema);