var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');


//adicionando como middleware, então já tem que informar como vai tratar os formularios
app.use(bodyParser.urlencoded({extended: true}));

//aqui é definido as rotas com o consign, alem de incluir a configuração com o banco e as models
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);
module.exports = app;