const Costumers = require("../models/Costumer");

const find = () => Costumers.find();

const findById = (value) => Costumers.findById(value);

const findFromKeyAndValue = (key, value) => Costumers.find({ [key]: value });

const create = (costumer) =>
    Costumers.create(costumer);

const findByIdAndUpdate = (id, costumer) =>
    Costumers.findByIdAndUpdate(id, costumer, { returnDocument: "after" });

const findByIdAndRemove = (id) =>
    Costumers.findByIdAndRemove(id);

module.exports = {
    find,
    findById,
    findFromKeyAndValue,
    create,
    findByIdAndUpdate,
    findByIdAndRemove
}