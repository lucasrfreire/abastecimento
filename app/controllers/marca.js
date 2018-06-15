module.exports.marca = function(app, req, res){
    var connection = app.config.dbConnection();

    var MarcaDAO = new app.app.models.MarcaDAO(connection);

    MarcaDAO.getMarcas(function(error, result){
        res.render("cadastro/marca", {marca : result, validacao : {}});
    })
}

module.exports.salvarMarca = function(app, req, res){
    var marca = req.body;
    req.assert('marca','Você deve preencher o nome da marca antes de salvar!').notEmpty();

    var erros = req.validationErrors();
    if(erros){
        res.render("cadastro/marca", {validacao: erros, marca: {}});
        return;
    }

    var connection = app.config.dbConnection();
    var MarcaDAO = new app.app.models.MarcaDAO(connection);

    MarcaDAO.salvarMarca(marca, function(error, result){
        res.redirect('/cadastro/marca');
    });

}

module.exports.deletarMarca = function(app, req, res){
    var marca_id = req.body;

    var connection = app.config.dbConnection();
    var MarcaDAO = new app.app.models.MarcaDAO(connection);

    MarcaDAO.deletarMarca(marca_id, function(error, result){
        res.redirect('/cadastro/marca');
    });
}