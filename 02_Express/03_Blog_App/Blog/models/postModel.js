// Import Mongoose
const mongoose = require("mongoose");

// Route Handller
const postSchema = new mongoose.Schema({

    // Title of the post
    title:{
        type : String,
        required : true
    },

    // Body of the post
    body:{
        type : String,
        required : true
    },

    // On which post we want to like
    likes: [{
        type : mongoose.Schema.ObjectId,     // Id Type
        ref : "Like"  // Referece to the like model
    }],

    // On which post we want to comment
    comments: [{
        type : mongoose.Schema.ObjectId,     // Id Type
        ref : "Comment"  // Referece to the comment model
    }],
});

// Export
module.exports = mongoose.model("Post", postSchema);