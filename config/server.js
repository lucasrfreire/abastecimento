//framework node
var express = require('express');
//mapeamentos
var consign = require('consign');
//tratativa de formularios
var bodyParser = require('body-parser');
//modulo que ajuda a fazer validações das requisições
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');


//adicionando como middleware, então já tem que informar como vai tratar os formularios
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

//aqui é definido as rotas com o consign, alem de incluir a configuração com o banco e as models
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);
module.exports = app;