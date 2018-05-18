function Postos(){

}

Postos.prototype.getPostos = function(connection, callback){
    connection.query('', callback);
}

Postos.prototype.getPosto = function(connection, callback){
    connection.query('', callback);
}

Postos.prototype.salvarPosto = function(posto, connection, callback){
    connection.query('',callback);
}

module.exports = function(){
    return Postos;
}