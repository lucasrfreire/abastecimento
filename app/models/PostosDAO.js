function PostosDAO(connModelection){
    this._connection = connection;
}

Postos.prototype.getPostos = function(callback){
    this._connection.query('', callback);
}

Postos.prototype.getPosto = function(callback){
    this._connection.query('', callback);
}

Postos.prototype.salvarPosto = function(posto, callback){
    this._connection.query('',callback);
}

module.exports = function(){
    return Postos;
}Model