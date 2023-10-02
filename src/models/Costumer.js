const mongoose = require("mongoose");

const costumersSchema = mongoose.Schema({
    id: { type: String, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, unique: true, required: true },
    address: { type: Array, required: true }
});

const Clientes = mongoose.model("costumers", costumersSchema);

module.exports = Clientes;