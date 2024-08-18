import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const productschema = new Schema({
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    tags:  { type: Number, required: true },
    stock: { type: Number, required: true }
});

export default productschema