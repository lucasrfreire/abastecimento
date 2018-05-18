module.exports = function(app){
    app.get('/cad_veiculo', function(req, res){
        res.render("cadastro/veiculo");
    });

    app.post('/cad_veiculo/salvar', function(req, res){
        var veiculo = req.body;

        var connection = app.config.dbConnection();
        var veiculoModel = new app.app.models.veiculoModel;

        veiculoModel.salvarVeiculo(veiculo, connection, function(error, result){
            res.render('/veiculos');
        });
    });
}