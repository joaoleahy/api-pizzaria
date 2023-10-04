const mongoose = require("mongoose");

connectToDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/sistema-pizzaria')
  .then(() => {
    console.log('Connected!')
    })
    .catch((erro) => console.log(erro))
}

module.exports = connectToDb;