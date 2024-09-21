import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var blogcategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    
});

//Export the model
const blogCategory = mongoose.model('blogcategory', blogcategorySchema);
export default blogCategory;