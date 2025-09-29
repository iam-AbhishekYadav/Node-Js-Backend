const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        // Fetch data from request body
        const { title, body } = req.body;

        // Create a Post object
        const newPost = new Post({
            title,
            body
        });

        // Save the new Post into the database
        const savedPost = await newPost.save();

        res.status(201).json({
            success: true,
            post: savedPost,
        });

    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: "Error while creating Post"
        });
    }
};



// Need some more testing after completing like wala controller

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "Error while fetching Post"
        });
    }
}

