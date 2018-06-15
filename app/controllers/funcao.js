module.exports.cadastro_funcao = function(app, req, res){
    var connection = app.config.dbConnection();
        var FuncaoDAO = new app.app.models.FuncaoDAO(connection);
        FuncaoDAO.getFuncoes(function(error, result){
            res.render('cadastro/funcao', {validacao : {}, funcao : result});
        });
}

module.exports.cadastro_funcao_salvar = function(app, req, res){
    var funcao = req.body;
        req.assert('funcao','A função é um campo obrigatório!').notEmpty();
        var erros = req.validationErrors();

        if(erros){
            res.render('cadastro/funcao', {validacao : erros, funcao : {}});
            return;
        }

        var connection = app.config.dbConnection();
        var FuncaoDAO = new app.app.models.FuncaoDAO(connection);

        FuncaoDAO.salvarFuncao(funcao, function(error, result){
            console.log(error);
            res.redirect('/cadastro/funcao');
        });
}

module.exports.deletar_funcao = function(app, req, res){
    var marca_id = req.body;
    var connection = app.config.dbConnection();
    var FuncaoDAO = new app.app.models.FuncaoDAO(connection);

    FuncaoDAO.deletarFuncao(marca_id, function(error, result){
        res.redirect('/cadastro/funcao');
    });
}