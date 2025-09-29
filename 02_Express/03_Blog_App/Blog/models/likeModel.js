// Import Mongoose
const mongoose = require("mongoose");

// Route Handller
const likeSchema = new mongoose.Schema({

    // On which post we want to like
    post:{
        type : mongoose.Schema.ObjectId,     // Id Type
        ref : "Post"  // Referece to the post model
    },

    // Which user is liked the post
    user:{
        type : String,
        required : true
    }
});

// Export
module.exports = mongoose.model("Like", likeSchema);