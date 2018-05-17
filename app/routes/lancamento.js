module.exports = function(app){
    app.get('/lancamento', function(req, res){
        res.render("movimentacao/lancamento");
    });
}
