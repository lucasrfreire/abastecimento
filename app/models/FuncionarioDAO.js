function FuncionarioDAO(connection){
    this._connection = connection;
}

FuncionarioDAO.prototype.getFuncionarios = function(callback){
    this._connection.query('select * from funcionario order by id desc', callback);
}

FuncionarioDAO.prototype.getFuncionario = function(callback){
    this._connection.query('select * from funcionario where id = 1', callback);
}

FuncionarioDAO.prototype.salvarFuncionario = function(funcionario, callback){
    this._connection.query('insert into funcionario set ?', funcionario, callback);
}

FuncionarioDAO.prototype.deletarFuncionario = function(id_funcionario, callback){
    this._connection.query('delete from funcionario where id = '+id_funcionario.id, callback);
}

module.exports = function(){ 
    return FuncionarioDAO;
}