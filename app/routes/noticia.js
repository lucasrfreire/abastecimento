module.exports = function (app) {    
    app.get('/noticia', function (req, res) {
        //recuperando o modulo de conexão com o banco atraves do app
        var connection = app.config.dbConnection();
        var noticiaModel = new app.app.models.noticiasModel(connection);
        noticiaModel.getNoticia(function (error, result) {
            res.render("noticias/noticia", {noticia : result});       
        });
    });
};