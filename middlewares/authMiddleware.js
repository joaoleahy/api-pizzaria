import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'; // Importe a biblioteca dotenv para carregar variáveis de ambiente

dotenv.config(); // Carregue as variáveis de ambiente do arquivo .env

function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido.' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => { // Use process.env.SECRET_KEY
        if (err) {
            return res.status(401).json({ message: 'Token inválido.' });
        }
        req.user = decoded;  // Decodifica o token e coloca as informações do usuário no objeto de solicitação
        next();
    });
}

export default verifyToken;  // Exporta o middleware de autenticação JWT
