import { Pedidos } from '../models/Pedidos.js'

export const montarPedido = async (req, res) => {
    try {
        const {idCliente, nomeCliente, compras, acompanhamento} = req.body;

        const pedido = new Pedidos({
            idCliente,
            nomeCliente,
            data: new Date(),
            compras,
            acompanhamento,
        });

        await pedido.save();
        return res.status(201).json("Pedido realizado com sucesso!");
    }
    catch (err) {
        const body = {
            "idCliente": "ID",
            "nomeCliente": "NOME",
            "compras": [
                {
                    "idPizza": "ID",
                    "quantPedida": "Number"
                },
            ],
            "acompanhamento": [
                {
                    "nomeProd": "NOME DE UM PRODUTO QUALQUER",
                    "Valor": "Number"
                },
            ]
        }
        return res.status(500).json({
            msg: "O corpo da requisição deve ser no seguinto formato: ",
            body
        })
    }
}

export const finalizarPedidos = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Pedidos.updateMany({_id: id}, {finalizado: true});

        if (data.modifiedCount <= 0) {
            return res.status(404).json("ID não encontrado");  
        }

        return res.status(200).json("Pedido Finalizado");
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Erro no Servidor");
    }
}

export const listarPedidos = async (req, res) => {
    try {
        const data = await Pedidos.find();

        return res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Erro no Servidor");
    }
}

export const pesquisarPedidoCliente = async (req, res) => {
    try {
        const name = req.params.nameClient

        const data = await Pedidos.find({nomeCliente: name});

        const count = await Pedidos.find({nomeCliente: name}).countDocuments();

        data.push({totalPedidos: count})


        return res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Erro no servidor");
    }
}

export const atualizarPedidoCliente = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const data = await Pedidos.updateOne({_id: id}, body);
        
        if (data.modifiedCount <= 0) {
            return res.status(404).json("ID não encontrado")            
        }     
      
        return res.status(200).json("Pedido atualizado!");
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Erro no servidor");
    }
}

export const deletarPedidoCliente = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await Pedidos.deleteOne({_id: id});

        if (data.deletedCount <= 0) {
            return res.status(404).json("ID não encontrado")            
        }     

        return res.status(200).json("Pedido deletado!");
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Erro no servidor");
    }
}