module.exports.cadastro_funcao = function(app, req, res){
    var connection = app.config.dbConnection();
        var FuncaoDAO = new app.app.models.FuncaoDAO(connection);
        FuncaoDAO.getFuncoes(function(error, result){
            res.render('cadastro/funcao', {validacao : {}, funcao : {}, funcoes : result});
        });
}

module.exports.cadastro_funcao_salvar = function(app, req, res){
    var funcao = req.body;
        req.assert('funcao','A função é um campo obrigatório!').notEmpty();
        var erros = req.validationErrors();

        if(erros){
            res.render('cadastro/funcao', {validacao : erros, funcao : funcao, funcoes : {}});
            return;
        }

        var connection = app.config.dbConnection();
        var FuncaoDAO = new app.app.models.FuncaoDAO(connection);

        FuncaoDAO.salvarFuncao(funcao, function(error, result){
            console.log(error);
            res.redirect('/cadastro/funcao');
        });
}