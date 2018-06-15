import { funcionario } from "./funcionario";

module.exports.veiculo = function(app, req, res){
    var connection = app.config.dbConnection();
    var VeiculoDAO = new app.app.models.VeiculoDAO(connection);
    VeiculoDAO.getVeiculos(function(error, result){
        res.render("cadastro/veiculo", {veiculos : result, validacao : {}});
    })
}

module.exports.veiculo_salvar = function(app, req, res){
    var veiculo = req.body;

    req.assert('placa','A placa é um campo obrigatório!').notEmpty();
    req.assert('marca','A marca é um campo obrigatório!').notEmpty();
    req.assert('modelo','O modelo de nascimento é um campo obrigatório!').notEmpty();
    req.assert('cor','A cor é um campo obrigatório!').notEmpty();

    var erros = req.validationErros();
    if(erros){
        res.render('cadastro/veiculo', {validacao : erros, veiculos : {}});
        return;
    }

    var connection = app.config.dbConnection();
    var VeiculoDAO = new app.app.models.VeiculoDAO(connection);

    VeiculoDAO.salvarVeiculo(veiculo, function(error, result){
        res.redirect('cadastro/veiculo');
    });
}

module.exports.veiculo_deletar = function(app, req, res){
    var codigo = req.body;

    var connection = app.config.dbConnection();
    var VeiculoDAO = new app.app.models.VeiculoDAO(connection);

    VeiculoDAO.deletarVeiculo(codigo, function(error, result){
        res.redirect('cadastro/veiculo');
    })
}