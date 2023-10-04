import { Pizza } from "../models/Pizzas.js"

export const cadastrarPizza = async (req, res) => {
    try {
        const {sabor, tamanho, preco} = req.body
        await Pizza.create({
            sabor,
            tamanho,
            preco
        })

        return res.status(201).json("Pizza cadastrada com sucesso!")
    }
    catch (err) {
        console.log(err);
    }
}

export const listarPizzas = async (req, res) => {
    try {
        const data = await Pizza.find();

        return res.status(201).json(data);
    }
    catch (err) {
        console.log(err);
    }
}