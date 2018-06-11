module.exports = function(app){
    app.get('/cad_veiculo', function(req, res){
        app.app.controllers.cad_veiculo.cadastro_veiculo(app, req, res);
    });

    app.post('/cad_veiculo/salvar', function(req, res){
        app.app.controllers.cad_veiculo.cad_veiculo_salvar(app, req, res);
    });
}