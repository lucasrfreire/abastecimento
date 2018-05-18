module.exports = function(app){
    app.get('/cad_veiculo', function(req, res){
        res.render("cadastro/veiculo");
    });

    app.post('/cad_veiculo/salvar', function(req, res){
        var veiculo = req.body;

        var connection = app.config.dbConnection();
        var VeiculoDAO = new app.app.models.VeiculoDAO(connection);

        VeiculoDAO.salvarVeiculo(veiculo, function(error, result){
            res.render('/veiculos');
        });
    });
}