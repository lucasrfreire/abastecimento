module.exports = function(app){
    app.get('/cadastro/marca', function(req, res){
        app.app.controllers.marca.marca(app, req, res);
    });

    app.post('/cadastro/marca/salvar', function(req, res){
        app.app.controllers.marca.salvarMarca(app, req, res);
    });

    app.post('/cadastro/marca/deletar', function(req, res){
        app.app.controllers.marca.deletarMarca(app, req, res);
    });
}