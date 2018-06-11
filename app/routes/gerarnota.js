module.exports = function(app){
    app.get('/gerarnota', function(req, res){
        app.app.controllers.gerarnota.gerarnota(app, req, res);
    });
}
