function Motorista(){

}

Motorista.prototype.getMotoristas = function(connection, callback){
    connection.query('', callback);
}

Motorista.prototype.getMotorista = function(connection, callback){
    connection.query('', callback);
}

Motorista.prototype.salvarMotorista = function(motorista, connection, callback){
    connection.query('', callback);
}

module.exports = function(){ 
    return Motorista;
}