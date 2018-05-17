module.exports = function(app){
    app.get('/gerarnota', function(req, res){
        res.render("movimentacao/gerar_nota");
    });
}
