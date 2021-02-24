const Comment = require('../models/comment');

exports.comment_get = async (req, res) => {
  const comments = await Comment.find({ part: req.params.id });
  try {
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.comment_post = async (req, res) => {
  const { comment } = req.body;
  const { id } = req.params.id;
  const newComment = new Comment({
    comment,
    id,
  });

  try {
    const savePost = await newComment.save();
    res.json(savePost);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
