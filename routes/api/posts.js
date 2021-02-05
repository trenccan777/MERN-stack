const express = require("express");
const { createPost, getPosts } = require("./../../controllers/posts");

const router = express.Router();
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// Gets all posts
router.get("/", getPosts);

// Create post
router.post("/", createPost);

module.exports = router;
