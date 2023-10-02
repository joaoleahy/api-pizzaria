const express = require("express");
const cors = require('cors');
const swaggerUI = require("swagger-ui-express");
const swaggerConfig = require("./swagger.json");

const port = 3001;
const app = express();

const database = require("./database/Database");

database();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerConfig));

const auth =  require("./router/AuthRouter");
const user =  require("./router/UserRouter");
const costumer =  require("./router/CostumerRouter");
const product =  require("./router/ProductRouter");
const order =  require("./router/OrderRouter");

app.use(express.json());

app.use(cors());

app.use("/auth", auth);
app.use("/users", user);
app.use('/costumers', costumer);
app.use('/products', product);
app.use('/orders', order);

app.listen(port, () => {
    console.log(`Servicor rodando em http://localhost:${port}`)
});