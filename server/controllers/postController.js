const { validationResult } = require('express-validator');
const Post = require('../models/postModel');

exports.blogPost = async (req, res) => {
  const { title, content } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newPost = new Post({
    title,
    content,
  });

  try {
    const savePost = await newPost.save();
    res.json(savePost);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.blogGet = async (req, res) => {
  const posts = await Post.find();
  try {
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.blogGetId = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  try {
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.blogDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Successfully deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.blogUpdate = async (req, res) => {
  const errors = validationResult(req);
  const { id } = req.params;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ errors: [{ msg: 'Post not found' }] });
    }

    const { title, content } = req.body;

    post.title = title;
    post.content = content;

    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: 'Server error' }] });
  }
};
