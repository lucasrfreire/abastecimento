module.exports = function (app) {    
    app.get('/noticia', function (req, res) {
        //recuperando o modulo de conexão com o banco atraves do app
        var connection = app.config.dbConnection();
        var noticiaModel = app.app.models.noticiasModel;
        noticiaModel.getNoticia(connection, function (error, result) {
            res.render("noticias/noticia", {noticia : result});       
        });
    });
};