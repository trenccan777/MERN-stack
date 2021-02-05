const mongoose = require("mongoose");

//When there is no _id ..mongoose automatically generates.
const postSchema = mongoose.Schema({
  title: String,
});

const Post = mongoose.model("blog_posts", postSchema);

module.exports = Post;
