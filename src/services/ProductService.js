const Products = require("../models/Product");

const find = () => Products.find();

const findById = (value) => Products.findById(value);

const findFromKeyAndValue = (key, value) => Products.find({ [key]: value });

const create = (product) =>
    Products.create(product);

const findByIdAndUpdate = (id, product) =>
    Products.findByIdAndUpdate(id, product, { returnDocument: "after" });

const findByIdAndRemove = (id) =>
    Products.findByIdAndRemove(id);

module.exports = {
    find,
    findById,
    findFromKeyAndValue,
    create,
    findByIdAndUpdate,
    findByIdAndRemove
}