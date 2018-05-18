module.exports = function (app) {    
    app.get('/noticia', function (req, res) {
        //recuperando o modulo de conexão com o banco atraves do app
        var connection = app.config.dbConnection();
        var NoticiasDAO = new app.app.models.noticiasModel(connection);
        NoticiasDAO.getNoticia(function (error, result) {
            res.render("noticias/noticia", {noticia : result});       
        });
    });
};