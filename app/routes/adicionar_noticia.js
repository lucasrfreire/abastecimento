module.exports = function(app){
    app.get('/adicionar_noticia', function(req, res){
        res.render("noticias/adicionar_noticia", {validacao: {}, noticia: {}});
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        req.assert('titulo','o Título é um campo obrigatório').notEmpty();
        req.assert('resumo','o Resumo é um campo obrigatório').notEmpty();
        req.assert('resumo','o Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor','o Autor é um campo obrigatório').notEmpty();
        req.assert('data_noticia','A Data é um campo obrigatório').notEmpty();//.isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','o Autor é um campo obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render("noticias/adicionar_noticia", {validacao: erros, noticia: noticia});
            return;
        }


        var connection = app.config.dbConnection();
        var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.salvarNoticia(noticia, function (error, result) {
            res.redirect('/noticias');
        });
       
    });
}
