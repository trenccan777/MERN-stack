const Post = require("../models/post");

const getPosts = async (req, res) => {
  try {
    const postMessages = await Post.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Create Post
const createPost = async (req, res) => {
  const { title } = req.query;

  const newPostMessage = new Post({
    title,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { createPost, getPosts };
