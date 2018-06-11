module.exports = function(app){
    app.get('/adicionar_noticia', function(req, res){
        app.app.controllers.adicionar_noticia.adicionar_noticia(app, req, res);
    });

    app.post('/noticias/salvar', function(req, res){
        app.app.controllers.adicionar_noticia.noticias_salvar(app, req, res);
    });
}
