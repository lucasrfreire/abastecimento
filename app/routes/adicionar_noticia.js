module.exports = function(app){
    app.get('/adicionar_noticia', function(req, res){
        res.render("noticias/adicionar_noticia");
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection, function (error, result) {
            res.redirect('/noticias');
        });
       
    });
}
