const Users = require("../model/User");

const find = () => Users.find();

const findById = (value) => Users.findById(value);

const findFromKeyAndValue = (key, value) => Users.find({ [key]: value });

const create = (usuario) =>
    Users.create(usuario);

const findByIdAndUpdate = (id, usuario) =>
    Users.findByIdAndUpdate(id, usuario, { returnDocument: "after" });

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