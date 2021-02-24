const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  tags: { type: [String] },
  html: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);