// requiring mongoDB to store data
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating the product schema,which data stores
const productSchema = new Schema({
    name: String,
    quantity: Number
},{
    versionKey: false,
});


const Product = mongoose.model('Product', productSchema);
module.exports = Product;
