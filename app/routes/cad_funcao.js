module.exports = function(app){
    app.get('/cadastro/funcao', function(req, res){
        app.app.controllers.cad_funcao.cadastro_funcao(app, req, res);
    });

    app.post('/cadastro/funcao/salvar', function(req, res){
        app.app.controllers.cad_funcao.cadastro_funcao_salvar(app, req, res);
    });
}