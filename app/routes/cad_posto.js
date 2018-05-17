module.exports = function(app){
    app.get('/cad_posto', function(req, res){
        res.render("cadastro/posto");
    });
}