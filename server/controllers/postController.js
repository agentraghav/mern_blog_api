const Post = require('../models/postModel');

exports.blogPost = async (req, res) => {
  const { title, tags, html } = req.body;

  const newPost = new Post({
    title,
    tags,
    html,
  });

  try {
    const savePost = await newPost.save();
    res.json(savePost);
  } catch (err) {
    console.log(err);
  }
};

exports.blogGet = async (req, res) => {
  const posts = await Post.find();
  try {
    res.json(posts);
  } catch (err) {
    console.log(err);
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
