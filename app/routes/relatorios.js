module.exports = function(app){
    app.get('/relatorios', function(req, res){
        res.render("relatorios/emissao");
    });
}