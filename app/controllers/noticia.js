module.exports.noticia = function(app, req, res){
    //recuperando o modulo de conexão com o banco atraves do app
    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.noticiasModel(connection);
    NoticiasDAO.getNoticia(function (error, result) {
        res.render("noticias/noticia", {noticia : result});       
    });
}

module.exports.noticias = function(app, req, res){
    //recuperando o modulo de conexão com o banco atraves do app
    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.getNoticias(function (error, result) {
        res.render("noticias/noticias", {noticias : result});
    });   
}