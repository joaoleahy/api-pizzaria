const Users = require("../models/User");

const find = () => Users.find();

const findById = (value) => Users.findById(value);

const findFromKeyAndValue = (key, value) => Users.find({ [key]: value });

const create = (user) =>
    Users.create(user);

const findByIdAndUpdate = (id, user) =>
    Users.findByIdAndUpdate(id, user, { returnDocument: "after" });

const findByIdAndRemove = (id) =>
    Users.findByIdAndRemove(id);

module.exports = {
    find,
    findById,
    findFromKeyAndValue,
    create,
    findByIdAndUpdate,
    findByIdAndRemove
}