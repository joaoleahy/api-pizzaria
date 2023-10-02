const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema({
    id: { type: String, unique: true },
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true }
});

const Usuarios = mongoose.model("usuarios", usuariosSchema);

module.exports = Usuarios;