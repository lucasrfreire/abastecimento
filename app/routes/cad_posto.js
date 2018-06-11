module.exports = function(app){
    app.get('/cad_posto', function(req, res){
        app.app.controllers.cad_posto.cadastro_posto(app, req, res);
    });
}