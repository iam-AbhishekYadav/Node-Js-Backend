const express = require("express");
const router = express.Router();

// Import Controller
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");
const { likePost, unlikePost } = require("../controllers/likeController")



// Create Mapping
router.post("/comments", createComment);
router.post("/post", createPost);
router.get("/getAllPosts", getAllPosts);
router.post("/likes", likePost);
router.post("/unlikes", unlikePost);


// Export

module.exports = router;
