function LancamentosDAO(connection){
    this._connection = connection;
}

LancamentosDAO.prototype.getLancamentos = function(callback){
    this._connection.query('', callback);
}

LancamentosDAO.prototype.getLancamento = function(callback){
    this._connection.query('', callback);
}

LancamentosDAO.prototype.salvarLancamento = function(lancamento, callback){
    this._connection.query('', callback);
}

module.exports = function(){
    return LancamentosDAO;
}