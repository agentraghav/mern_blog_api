const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
  },
  part: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
});

module.exports = mongoose.model('Comment', commentSchema);
