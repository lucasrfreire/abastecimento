var app = require('./config/server');
//rotas mapeadas atraves do consign
/*
var rota_noticias = require('./app/routes/noticias');
rota_noticias(app);
*/

app.listen(3000, function(){
	console.log("Servidor rodando com express");
});