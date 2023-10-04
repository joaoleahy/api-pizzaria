const service = require('../services/AuthService');

const auth = (req, res) => {
    const { email, senha } = req.body;

    service.loginService(email)
        .then((usuario) => {
            if(!usuario) {
                return res.status(404).send({ message: "Credenciais incorretas! Tente novamente!"});
            }

            if(usuario.senha != senha) {
                return res.status(404).send({ message: "Senha inválida! Tente novamente!"});
            }

            const token = service.gerarTokenJWT(usuario);

            return res.status(200).send({ auth: true, token });
        })
        .catch((err) => {
            return res.status(500).send({ message: err.message });
        });
}

module.exports = { auth }