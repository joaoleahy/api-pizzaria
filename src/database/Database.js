const mongoose = require("mongoose");

connectToDb = () => {
    mongoose.connect("mongodb://localhost:27017/aplicacao")
    .then(() => {
        console.log("DB Conectado");
    })
    .catch((error) => {
        console.log(`Erro ao connectar ao db: ${error}`);
    })
}

module.exports = connectToDb;