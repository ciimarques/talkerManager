# Talker Manager API

## Sobre o Projeto

Este projeto foi desenvolvido durante o curso da Trybe, com o objetivo de gerenciar o cadastro de palestrantes. Através dela, é possível cadastrar, visualizar, pesquisar, editar e excluir informações sobre os palestrantes. A API realiza operações CRUD (Create, Read, Update, Delete) em um arquivo JSON, simulando um banco de dados, com o uso do módulo `fs` do Node.js para leitura e escrita de arquivos.

## Tecnologias Utilizadas

- Node.js
- Express
- Módulo `fs` para operações de arquivo

## Como Instalar e Rodar o Projeto

### Pré-requisitos

- Git
- Node.js

### Instalação

1. Clone o repositório:
git clone git@github.com:ciimarques/talkerManager.git

2. Instale as dependências:
npm install

3. Inicie a aplicação:
npm start

## Endpoints

### Visualizar todos os Palestrantes
- **Endpoint**: `GET /talker`
- **Descrição**: Retorna uma lista de todos os palestrantes cadastrados.

### Pesquisar Palestrantes
- **Endpoint**: `GET /talker/search`
- **Descrição**: Pesquisa palestrantes por nome. Requer autenticação.
- **Parâmetros de Query**: `q` (termo de pesquisa)

### Visualizar Palestrante por ID
- **Endpoint**: `GET /talker/:id`
- **Descrição**: Retorna os detalhes de um palestrante específico pelo seu ID.

### Login
- **Endpoint**: `POST /login`
- **Descrição**: Autentica o usuário e retorna um token. Requer validação de e-mail e senha.

### Cadastrar Palestrante
- **Endpoint**: `POST /talker`
- **Descrição**: Cadastra um novo palestrante. Requer autenticação.

### Editar Palestrante
- **Endpoint**: `PUT /talker/:id`
- **Descrição**: Atualiza informações de um palestrante existente pelo ID. Requer autenticação.

### Excluir Palestrante
- **Endpoint**: `DELETE /talker/:id`
- **Descrição**: Exclui um palestrante pelo ID. Requer autenticação.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato
 **Cíntia Marques** 
- **Email**:  cintiamarques.mk@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/ciimarques
