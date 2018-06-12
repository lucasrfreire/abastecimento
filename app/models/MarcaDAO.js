function MarcaDAO(connection){
    this._connection = connection;
}

MarcaDAO.prototype.getMarcas = function(callback){
    this._connection.query('', callback);
}

MarcaDAO.prototype.getMarca = function(callback){
    this._connection.query('', callback);
}

MarcaDAO.prototype.salvarMarca = function(marca, callback){
    this._connection.query(''+marca, callback);
}

module.exports = function(){
    return MarcaDAO;
}