import { Cliente } from "../models/Cliente.js";

export const cadastrarCliente = async (req, res) => {
    try {
        const {name, cpf, phone} = req.body
        await Cliente.create({
            name: name,
            cpf: cpf,
            phoneNumber: phone
        });

        return res.status(201).json("Cliente cadastrado com sucesso!")
    }
    catch (err) {
        console.log(err);
    }
}

export const listarClientes = async (req, res) => {
    try {
        const data = await Cliente.find();

        return res.status(201).json(data);
    }
    catch (err) {
        console.log(err);
    }
}

export const getCliente = async (req, res) => {
    try {
        const cpf = req.params.cpf
        const data = await Cliente.findOne({cpf: cpf});

        return res.status(201).json(data);
    }
    catch (err) {
        console.log(err);
    }
}

export const pesquisarCliente = async (req, res) => {
    try {
        const name = req.params.name;
        const filtro = new RegExp(`^${name}`, "i");
        const data = await Cliente.find({name: filtro});

        return res.status(201).json(data);
    }
    catch (err) {
        console.log(err);
    }
}