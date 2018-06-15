module.exports.funcionario = function(app, req, res){
    var connection = app.config.dbConnection();
    var FuncionarioDAO = new app.app.models.FuncionarioDAO(connection);

    FuncionarioDAO.getFuncionarios(function(error, result){
        res.render('cadastro/funcionario', {funcionario : result, validacao : {}});
    })
    
}

module.exports.funcionario_salvar = function(app, req, res){
    var funcionario = req.body;

    req.assert('nome','O nome é um campo obrigatório!').notEmpty();
    req.assert('cpf','O cpf é um campo obrigatório!').notEmpty();
    req.assert('data_nascimento','A data de nascimento é um campo obrigatório!').notEmpty();
    req.assert('cep','O cep é um campo obrigatório!').notEmpty();

    var erros = req.validationErros();
    if(erros){
        res.render('cadastro/funcionario', {validacao : erros, funcionario : {}});
        return;
    }

    var connection = app.config.dbConnection();
    var FuncionarioDAO = new app.app.models.FuncionarioDAO(connection);

    FuncionarioDAO.salvarFuncionario(funcionario, function(error, result){
        res.redirect('cadastro/funcionario');
    });

}

module.exports.funcionario_deletar = function(app, req, res){
    var id_funcionario = req.body; 
    var connection = app.config.dbConnection();
    var FuncionarioDAO = new app.app.models.FuncionarioDAO(connection);

    FuncionarioDAO.deletarFuncionario(id_funcionario, function(error, result){
        res.redirect('/cadastro/funcionario');
    })
}