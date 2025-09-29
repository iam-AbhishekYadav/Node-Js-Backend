// Import Models
const Like = require("../models/likeModel");
const Post = require("../models/postModel");

// Like a Posts

exports.likePost = async (req, res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });

        const savedLike = await like.save();

        // Update post collection on the basis on this

        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes : savedLike._id}}, {new : true}).populate("likes").exec();

        res.json({
            post : updatedPost,
        });

    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: "Error while Liking Post"
        });
    }
}

// Unlike a Post 
exports.unlikePost = async (req, res) => {
    try {
        const {post, like} = req.body;

        // Find and delete the like collection
        const deletedLike = await Like.findOneAndDelete({post : post,_id : like});

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull : {likes : deletedLike._id}}, {new : true});

        res.json({
            post : updatedPost,
        });
        
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: "Error while Unliking Post"
        });
    }
}

