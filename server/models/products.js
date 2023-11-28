const mongoose = require("mongoose");

const  productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: false},
    material: { type: String, required: true },
    category: { type: String, required: true },
    collection: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('product', productSchema);