function Motorista(connection){
    this._connection = connection;
}

Motorista.prototype.getMotoristas = function(callback){
    this._connection.query('', callback);
}

Motorista.prototype.getMotorista = function(callback){
    this._connection.query('', callback);
}

Motorista.prototype.salvarMotorista = function(motorista, callback){
    this._connection.query('', callback);
}

module.exports = function(){ 
    return Motorista;
}