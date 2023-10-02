const express = require("express");

const port = 3000;
const app = express();

const database = require("./database/Database");

database();

const auth =  require("./router/AuthRouter");
const user =  require("./router/UserRouter");

app.use(express.json());

app.use("/auth", auth);
app.use("/users", user);

app.listen(port, () => {
    console.log(`Servicor rodando em http://localhost:${port}`)
});