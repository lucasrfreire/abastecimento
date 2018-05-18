function Lancamentos(){

}

Lancamentos.prototype.getLancamentos = function(connection, callback){
    connection.query('', callback);
}

Lancamentos.prototype.getLancamento = function(connection, callback){
    connection.query('', callback);
}

Lancamentos.prototype.salvarLancamento = function(lancamento, connection, callback){
    connection.query('', callback);
}

module.exports = function(){
    return Lancamentos;
}