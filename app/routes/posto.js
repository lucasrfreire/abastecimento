module.exports = function(app){
    app.get('/cadastro/posto', function(req, res){
        app.app.controllers.posto.posto(app, req, res);
    });

    app.post('/cadastro/posto/salvar', function(req, res){
        app.app.controllers.posto.posto_salvar(app, res, res);
    });

    app.post('/cadastro/posto/deletar', function(req, res){
        app.app.controllers.posto.posto_deletar(app, req, res);
    })
}