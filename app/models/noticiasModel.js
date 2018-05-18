function Noticias(){

}

Noticias.prototype.getNoticias = function(connection, callback){
    connection.query('select * from noticias', callback);
}

Noticias.prototype.getNoticia = function(connection, callback){
    connection.query('select * from noticias where id_noticia = 1', callback);
}

Noticias.prototype.salvarNoticia = function(noticia, connection, callback){
    //o modulo bory-parsey suporta esse tipo de insert
    connection.query('insert into noticias set ?',noticia, callback);
}


module.exports = function(){ 
    return Noticias;
}