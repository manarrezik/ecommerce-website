import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var prodcategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    
});

//Export the model
const prodCategory = mongoose.model('prodcategory', prodcategorySchema);
export default prodCategory;