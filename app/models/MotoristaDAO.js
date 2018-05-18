function MotoristaDAO(connection){
    this._connection = connection;
}

MotoristaDAO.prototype.getMotoristas = function(callback){
    this._connection.query('', callback);
}

MotoristaDAO.prototype.getMotorista = function(callback){
    this._connection.query('', callback);
}

MotoristaDAO.prototype.salvarMotorista = function(motorista, callback){
    this._connection.query('', callback);
}

module.exports = function(){ 
    return MotoristaDAO;
}