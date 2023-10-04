import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'; // Importe a biblioteca dotenv para carregar variáveis de ambiente

dotenv.config(); // Carregue as variáveis de ambiente do arquivo .env

// Função de login
export const login = (req, res) => {
  const { username, password } = req.body;

  // Verifique as credenciais (substitua isso com sua lógica de autenticação real)
  if (username === 'admin' && password === '4queijos') {
    // Crie um token JWT usando a chave secreta do .env
    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: 86400 }); // O token expira em 1 hora

    // Envie o token JWT como resposta
    res.json({ token });
  } else {
    // Se as credenciais estiverem incorretas, envie uma resposta de erro
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
};
