const service = require("../services/AuthService");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).send({ message: "Token de acesso não informado!"});
    }

    const parts = authorization.split(" ");
    if(parts.length !== 2) {
        return res.status(401).send({ message: "Token de acesso invalido!"});
    }

    const [scheme, token] = parts;
    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ message: "Token de acesso malformatado!"});
    }

    const { user } = service.validarTokenJWT(token);

    service.loginService(user.email)
        .then((response) => {
            return next();
        })
        .catch((error) => {
            return res.status(401).send({ message: "Token de acesso invalido!"});
        })
}