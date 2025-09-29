// Import Models
const Post = require("../models/postModel");
const Comment = require("../models/commentModels");

// Business Logic
exports.createComment = async (req, res) => {

    try {
        // Fetch data from request body
        const {post, user, body} = req.body; 

        // Create a comment object
        const comment = new Comment({
            post, user, body
        });

        // Save the new comment into the database
        const savedComment = await comment.save();

        // Find the post by ID, add the new comment to its comments array
        // $push ---> Used for update (Update Operator)
        // $pull ---> Used for delete (Delete Operator)
        // {new : true} ---> Return updated document
        // .populate() ---> Return actual document instead of ID
        // .exec() ---> Execute 
        
        const updatePost = await Post.findByIdAndUpdate(post, {$push : {comments : savedComment._id}}, {new : true})
        .populate("comments")
        .exec();

        //send a json response with a success flag
        res.json(
            {
                post : updatePost,
            });

    } catch (error) {
        return res.status(500).json({
            error : "Error while Creating comments"
        });
    }
}
