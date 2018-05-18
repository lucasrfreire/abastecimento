module.exports = function(app){
    app.get('/adicionar_noticia', function(req, res){
        res.render("noticias/adicionar_noticia");
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.noticiasModel(connection);

        noticiasModel.salvarNoticia(noticia, function (error, result) {
            res.redirect('/noticias');
        });
       
    });
}
