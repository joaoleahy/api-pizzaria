import Express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routers.js';
import dotenv from 'dotenv'; // Para usar variáveis de ambiente

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

const app = Express();

// Configurações do Express
app.use(cors());
app.use(Express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB!');
    // Iniciar o servidor após a conexão bem-sucedida com o banco de dados
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Roteamento
app.use(router);
