function FuncaoDAO(connection){
    this._connection = connection;
}

FuncaoDAO.prototype.getFuncoes = function(callback){
    this._connection.query('select * from funcao', callback);
}

FuncaoDAO.prototype.getFuncao = function(callback){
    this._connection.query('select * from funcao where id = 1', callback);
}

FuncaoDAO.prototype.salvarFuncao = function(funcao, callback){
    this._connection.query('insert into funcao set ?',funcao, callback);
}

module.exports = function(){
    return FuncaoDAO;
}