import mongoose from 'mongoose';

const PizzasPedidasSchema = new mongoose.Schema({
    idPizza: mongoose.ObjectId,
    quantPedida: Number
})

const Acrescimo = new mongoose.Schema({
    nomeProd: String,
    Valor: Number
})


const PedidosSchema = new mongoose.Schema({
    idCliente: mongoose.ObjectId,
    nomeCliente: String,
    data: Date,
    compras: [PizzasPedidasSchema],
    acompanhamento: [Acrescimo],
    finalizado: Boolean
  });


export const Pedidos = mongoose.model('Pedidos', PedidosSchema);