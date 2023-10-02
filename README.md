# Pizzaria API

API para gestão de pizzarias. Esta API oferece endpoints para autenticação de usuários, listagem de usuários, clientes, produtos e pedidos.

## Endpoints

### Autenticação

#### `POST /auth/login`

Gera um token de usuário.

- **Requer Autenticação:** Sim
- **Parâmetros:**
  - Nenhum
- **Respostas:**
  - `200 OK`
    - Corpo:
      ```json
      {
        "id": "integer",
        "name": "string",
        "email": "string",
        "password": "string"
      }
      ```
  - `401 Unauthorized`
    - Descrição: Não autorizado.
  - `500 Internal Server Error`
    - Descrição: Erro interno do servidor.

### Usuários

#### `GET /users/find`

Lista todos os usuários.

- **Requer Autenticação:** Sim
- **Parâmetros:**
  - Nenhum
- **Respostas:**
  - `200 OK`
    - Corpo:
      ```json
      {
        "id": "integer",
        "name": "string",
        "email": "string",
        "password": "string"
      }
      ```
  - `401 Unauthorized`
    - Descrição: Não autorizado.
  - `500 Internal Server Error`
    - Descrição: Erro interno do servidor.

### Clientes

#### `GET /customers/find`

Lista todos os clientes.

- **Requer Autenticação:** Não
- **Parâmetros:**
  - Nenhum
- **Respostas:**
  - `200 OK`
    - Corpo:
      ```json
      {
        "id": "integer",
        "name": "string",
        "phoneNumber": "string",
        "addresses": [
          {
            // Objeto de endereço
          }
        ]
      }
      ```
  - `401 Unauthorized`
    - Descrição: Não autorizado.
  - `500 Internal Server Error`
    - Descrição: Erro interno do servidor.

### Produtos

#### `GET /products/find`

Lista todos os produtos.

- **Requer Autenticação:** Não
- **Parâmetros:**
  - Nenhum
- **Respostas:**
  - `200 OK`
    - Corpo:
      ```json
      {
        "id": "integer",
        "name": "string",
        "description": "string",
        "price": "number"
      }
      ```
  - `401 Unauthorized`
    - Descrição: Não autorizado.
  - `500 Internal Server Error`
    - Descrição: Erro interno do servidor.

### Pedidos

#### `GET /orders/find`

Lista todos os pedidos.

- **Requer Autenticação:** Não
- **Parâmetros:**
  - Nenhum
- **Respostas:**
  - `200 OK`
    - Corpo:
      ```json
      {
        "id": "integer",
        "customerId": "integer",
        "items": [
          {
            // Objeto de item do pedido
          }
        ]
      }
      ```
  - `401 Unauthorized`
    - Descrição: Não autorizado.
  - `500 Internal Server Error`
    - Descrição: Erro interno do servidor.

## Schemas

### User

```json
{
  "id": "integer",
  "name": "string",
  "email": "string",
  "password": "string"
}
```

### Customer

```json
{
  "id": "integer",
  "name": "string",
  "phoneNumber": "string",
  "addresses": [
    {
      // Objeto de endereço
    }
  ]
}
```

### Product

```json
{
  "id": "integer",
  "name": "string",
  "description": "string",
  "price": "number"
}
```

### Order

```json
{
  "id": "integer",
  "customerId": "integer",
  "items": [
    {
      // Objeto de item do pedido
    }
  ]
}
```

## Segurança

### Bearer Token

Mecanismo de autenticação usando Token JWT.

- **Tipo:** HTTP Bearer Token
- **Esquema:** Bearer
- **Formato:** JWT

Para mais informações, consulte a documentação da API em [http://localhost:3000](http://localhost:3000).