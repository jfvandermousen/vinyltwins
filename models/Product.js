import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name : {type: String, required:true},
    slug: {type: String, required:true, unique: true},
    artist : {type: String, required:true},
    label : {type: String, required:true},
    price: {type: Number, required:true},
    name : {type: String, required:true},
    image : {type: String, required:true},
    description: {type: String, required:true},
}, {
    timestamps:true
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;