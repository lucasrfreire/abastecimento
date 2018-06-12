module.exports = function(app){
    app.get('/cadastro/marca', function(req, res){
        app.app.controllers.marca.cadastro_marca(app, req, res);
    });
}