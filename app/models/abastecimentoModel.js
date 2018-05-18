function Lancamentos(connection){
    this._connection = connection;
}

Lancamentos.prototype.getLancamentos = function(callback){
    this._connection.query('', callback);
}

Lancamentos.prototype.getLancamento = function(callback){
    this._connection.query('', callback);
}

Lancamentos.prototype.salvarLancamento = function(lancamento, callback){
    this._connection.query('', callback);
}

module.exports = function(){
    return Lancamentos;
}