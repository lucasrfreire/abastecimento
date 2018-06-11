module.exports.cadastro_veiculo = function(app, req, res){
    res.render("cadastro/veiculo");
}

module.exports.cad_veiculo_salvar = function(app, req, res){
    var veiculo = req.body;

    var connection = app.config.dbConnection();
    var VeiculoDAO = new app.app.models.VeiculoDAO(connection);

    VeiculoDAO.salvarVeiculo(veiculo, function(error, result){
        res.render('/veiculos');
    });
}