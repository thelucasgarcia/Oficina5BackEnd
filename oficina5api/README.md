# Adonis API application

Este é o padrão para a criação de um servidor API no AdonisJs, vem pré-configurado com.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Projeto
O atual projeto teve como objetivo criar uma aplicação backend com framework AdonisJS com utilização do banco de dados Mysql. Faz parte do desafio da Oficina5.

## Para executar
Depois de feito download, va ao diretório do projeto, você pode executar o seguinte codigo para baixar a pasta node_modules:

### `yarn start`
ou

### `npm install`

Pode mudar as configurações na Pasta Config.

### Inicializar o servidor

Primeiramente instale o framework AdonisJS globalmente.

### `npm i -g @adonisjs/cli`

Instale as dependencias com 
### `npm install`.
ou 
### `npm install`.

Execute a aplicação no modo de desenvolvimento.
### `adonis serve --dev`

O servidor inicializará na url http://localhost:3333.


### Migrations e Banco de Dados

Crie um bando de dados MySql com o nome oficina5

em seguida execute as migrations

### `adonis migration:run`

Qualquer duvida do adonis execute

### `adonis --help`

Estarei disponibilizando um txt com o arquivo .env, caso ele não funcione. 



