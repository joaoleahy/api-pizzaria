import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); 

export const login = (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '4queijos') {
    // Cria um token JWT usando a chave secreta do .env
    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: 86400 });

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
};
