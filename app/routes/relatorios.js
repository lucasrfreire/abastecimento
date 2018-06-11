module.exports = function(app){
    app.get('/relatorios', function(req, res){
        app.app.controllers.relatorios.relatorios(app, req, res);
    });
}