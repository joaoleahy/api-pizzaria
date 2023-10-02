const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
    id: { type: String, unique: true },
    clienteId: { type: String, required: true },
    items: { type: Array, required: true },
});

const Orders = mongoose.model("orders", ordersSchema);

module.exports = Orders;