module.exports = function (app) {    
    app.get('/noticias', function (req, res) {
        //recuperando o modulo de conexão com o banco atraves do app
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.noticiasModel(connection);

        noticiasModel.getNoticias(function (error, result) {
            res.render("noticias/noticias", {noticias : result}); 
            });
       
        });    
    
};