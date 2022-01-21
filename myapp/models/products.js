const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productname: {
        type:String,
        required:true
    },
     brandname: {
        type:String,
        required:true
    },
     shelvenumber: {
        type:String,
        required:true
    },
    AvailableQuantity: {
        type:Number,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    Purchasedate: {
        type:Date,
        required:true
    },
});

const product = module.exports = mongoose.model('product',ProductSchema);