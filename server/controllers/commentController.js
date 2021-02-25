const Comment = require('../models/comment');
const Post = require('../models/postModel');

exports.comment_post = async (req, res, next) => {
  const { comment } = req.body;
  const { id } = req.params;
  const post = await Post.findById(id).exec();
  const comments = post.comments;

  const newComment = new Comment({
    comment: comment,
  });

  comments.push(newComment);

  Post.findByIdAndUpdate(id, { comments }, (err, post) => {
    if (err) return next(err);
    res.json({ post: post });
  });
};
