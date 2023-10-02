const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    id: { type: String, unique: true },
    name: { type: String, required: true },
    description: { type: String, unique: true, required: true },
    price: { type: Number, required: true }
});

const Products = mongoose.model("products", productsSchema);

module.exports = Products;