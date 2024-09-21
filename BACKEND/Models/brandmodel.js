import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
var brandSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    
});

//Export the model
const brand = mongoose.model('brand', brandSchema);
export default brand;