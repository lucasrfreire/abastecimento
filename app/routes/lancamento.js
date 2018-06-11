module.exports = function(app){
    app.get('/lancamento', function(req, res){
        app.app.controllers.lancamento.lancamento(app, req, res);
    });
}
