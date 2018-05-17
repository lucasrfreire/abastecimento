module.exports = function (app) {    
    app.get('/noticias', function (req, res) {
        //recuperando o modulo de conexão com o banco atraves do app
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function (error, result) {
            res.render("noticias/noticias", {noticias : result}); 
            });
       
        });    
    
};