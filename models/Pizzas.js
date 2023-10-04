import mongoose from 'mongoose';


const PzzaSchema = new mongoose.Schema({
    sabor: String,
    tamanho: String,
    preco: Number
  });


export const Pizza = mongoose.model('Pizza', PzzaSchema);