const Post = require('../models/postModel');

exports.blogPost = async (req, res) => {
  const { title, content } = req.body;

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
  const post = await Post.findById(req.params.id);
  try {
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.blogDelete = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    return res.end();
  } catch (err) {
    res.status(500).json({ err });
  }
};
