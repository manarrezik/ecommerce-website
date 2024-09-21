import mongoose from "mongoose"

// Declare the Schema of the Mongo model

let Schema= mongoose.Schema;
let blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
        unique: true,
    },
    numviews: {
        type: Number,
        required: true,
    },
    isLiked: {
        type: Boolean,
        default: false,
    },
    disliked: {
        type: Boolean,
        default: false,
    },
    likes:[ 
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
],

    dislikes:[
         {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
],



// image: {
//     type: string,
//     default: 
//     "https://fr.freepik.com/photos/blog",
// },
// author: {
//     type: string,
//     default: "Admin",
// },



});





//Export the model
const Blog = mongoose.model('Blog', blogSchema);
export default Blog;