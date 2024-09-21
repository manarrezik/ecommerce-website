import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const productschema = new Schema({
    name: { type: String, required: true, unique: true },
    category: { type: mongoose.Schema.Types.ObjectId, required: false , ref:"category"},
    price: { type: Number, required: true },
    tags:  { type: Number, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    images:{type: Array},
    color:{type: String, enum: ["black","brown", 'red']},
    ratings:[
        {
            star: Number, 
        postedby: {type: mongoose.Schema.Types.ObjectId}
    }
    ],
   
});
const Product = mongoose.model('Product', productschema);
export default Product;