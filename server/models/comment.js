const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
  },
  blog: {
    type: Schema.Types.String,
    ref: 'Post',
  },
});

module.exports = mongoose.model('Comment', commentSchema);
