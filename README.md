# API da Pizzaria

Bem-vindo à API da Pizzaria! Esta API é desenvolvida para gerenciar clientes, pizzas e pedidos em uma pizzaria. Utiliza tecnologias modernas como Node.js e MongoDB para proporcionar funcionalidades robustas e eficientes.

## Funcionalidades

- Autenticação de Usuários
- Cadastro, Atualização, Listagem e Pesquisa de Clientes
- Cadastro e Listagem de Pizzas
- Montagem, Atualização, Listagem, Pesquisa e Exclusão de Pedidos

## Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/api-pizzaria.git
```

2. Instale as dependências:

```sh
cd api-pizzaria
npm install
```

3. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```env
MONGODB_URI=sua-string-de-conexao-do-mongodb
JWT_SECRET=sua-chave-secreta-para-o-jwt
```

4. Inicie o servidor:

```sh
npm start
```

A API estará disponível em `http://localhost:3000`.

## Documentação da API

A documentação detalhada da API pode ser acessada através do Swagger. Após iniciar o servidor, acesse:

```
http://localhost:3000/api-docs
```

## Contribuição

Contribuições são bem-vindas! Por favor, crie uma `issue` para discutir sobre as mudanças que você gostaria de fazer no projeto.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---
Feito com ❤️ por João Leahy (https://github.com/joaoleahy)
```

Substitua `sua-string-de-conexao-do-mongodb` pela string de conexão do seu banco de dados MongoDB e `sua-chave-secreta-para-o-jwt` por uma chave secreta para a geração de tokens JWT.

Espero que isso ajude! Se você tiver mais perguntas ou precisar de assistência com qualquer outra coisa, sinta-se à vontade para perguntar. Boa sorte com o seu projeto!
