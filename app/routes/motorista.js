module.exports = function(app){
    app.get('/motorista', function(req, res){
        res.render('cadastro/motorista');
    })
}