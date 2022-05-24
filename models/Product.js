const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    image: {
        type: String,
        unique: true,
    },
    // username: {
    //     type: String,
    // },
    title: {
        type: String,
    },
    // body: {
    //     type: String,
    // },
});

const Product = new mongoose.model('Product', ProductSchema);

module.exports = Product;