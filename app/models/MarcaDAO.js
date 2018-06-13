function MarcaDAO(connection){
    this._connection = connection;
}

MarcaDAO.prototype.getMarcas = function(callback){
    this._connection.query('select * from veiculo_marca', callback);
}

MarcaDAO.prototype.getMarca = function(callback){
    this._connection.query('select * from veiculo_marca where id = 1', callback);
}

MarcaDAO.prototype.salvarMarca = function(marca, callback){
    this._connection.query('insert into veiculo_marca set ?', marca, callback);
}

module.exports = function(){
    return MarcaDAO;
}