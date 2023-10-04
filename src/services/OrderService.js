const Orders = require("../models/Order");

const find = () => Orders.find();

const findById = (value) => Orders.findById(value);

const findFromKeyAndValue = (key, value) => Orders.find({ [key]: value });

const create = (pedido) =>
    Orders.create(pedido);

const findByIdAndUpdate = (id, pedido) =>
    Orders.findByIdAndUpdate(id, pedido, { returnDocument: "after" });

const findByIdAndRemove = (id) =>
    Orders.findByIdAndRemove(id);

module.exports = {
    find,
    findById,
    findFromKeyAndValue,
    create,
    findByIdAndUpdate,
    findByIdAndRemove
}