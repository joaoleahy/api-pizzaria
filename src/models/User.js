const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    id: { type: String, unique: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;