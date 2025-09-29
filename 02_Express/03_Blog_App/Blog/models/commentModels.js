// Import Mongoose
const mongoose = require("mongoose");

// Route Handller
const commentSchema = new mongoose.Schema({

    // On which post we want to comment
    post:{
        type : mongoose.Schema.ObjectId,     // Id Type
        ref : "Post",  // Referece to the post model
    },

    // Which user is commented on post
    user:{
        type : String,
        required : true,
    },

    // Body of the post
    body:{
        type : String,
        required : true, 
    }
});

// Export
module.exports = mongoose.model("Comment", commentSchema);