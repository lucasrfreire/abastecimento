module.exports = function(app){
    app.get('/motorista', function(req, res){
        app.app.controllers.motoristas.cadastro_motoristas(app, req, res);
    })
}