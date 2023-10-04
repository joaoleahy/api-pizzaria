import mongoose from 'mongoose';


const ClienteSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    cpf: String
  });


export const Cliente = mongoose.model('Cliente', ClienteSchema);