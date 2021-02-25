const Comment = require('../models/comment');
const Post = require('../models/postModel');
exports.comment_get = async (req, res) => {
  const comments = await Comment.find();
  try {
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.comment_post = async (req, res) => {
  const { comment, id } = req.body;

  const post = await Post.findOne({ id: id });
  console.log(post);
  if (post) {
    const newComment = new Comment({ blog: blog._id, comment: comment });
  } else {
    res.status(400).json({ errors: [{ message: 'Bad request.' }] });
  }
  try {
    const savePost = await newComment.save();
    res.json(savePost);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
