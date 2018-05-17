module.exports = function(app){
    app.get('/cad_veiculo', function(req, res){
        res.render("cadastro/veiculo");
    });
}