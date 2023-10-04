const User = require("../models/User");
const jwt = require("jsonwebtoken");

const secret = "f94if94i9sd1010";

const loginService = (email) => User.findOne({ email });

const gerarTokenJWT = (user) =>
    jwt.sign({ user }, secret, {
        expiresIn: 86400
    });

const validarTokenJWT = (token) =>
    jwt.verify(token, secret);


module.exports = {
    loginService,
    gerarTokenJWT,
    validarTokenJWT
};