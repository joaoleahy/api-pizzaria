import Express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" }; // Importe o arquivo swagger.json
import { login } from '../controllers/authController.js';
import verifyToken from '../middlewares/authMiddleware.js';

import {
    cadastrarCliente,
    getCliente,
    listarClientes,
    pesquisarCliente
} from '../controllers/clienteController.js';

import {
    cadastrarPizza,
    listarPizzas
} from '../controllers/pizzaController.js';

import {
    montarPedido,
    listarPedidos,
    pesquisarPedidoCliente,
    atualizarPedidoCliente,
    deletarPedidoCliente,
    finalizarPedidos
} from '../controllers/pedidoController.js';

const router = Express.Router();

// Rota para Swagger UI
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Rota de login
router.post('/login', login);

// Middleware de autenticação aplicado a todas as rotas abaixo desta linha
router.use(verifyToken);

// Outras rotas do aplicativo
router.post('/cadastrarCliente', cadastrarCliente);
router.get('/listarClientes', listarClientes);
router.get('/getCliente/:cpf', getCliente);
router.get('/pesquisarCliente/:name', pesquisarCliente);

router.post('/cadastrarPizza', cadastrarPizza);
router.get('/listarPizzas', listarPizzas);

router.post('/montarPedido', montarPedido);
router.put('/finalizarPedido/:id', finalizarPedidos);
router.get('/listarPedidos', listarPedidos);
router.get('/pesquisarPedido/:nameClient', pesquisarPedidoCliente);
router.put('/atualizarPedido/:id', atualizarPedidoCliente);
router.delete('/deletarPedido/:id', deletarPedidoCliente);

export default router;
