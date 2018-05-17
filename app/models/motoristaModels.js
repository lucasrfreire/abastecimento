module.exports = function(){
    this.getMotoristas = function(connection, callback){
        connection.query('', callback);
    }
    this.getMotorista = function(connection, callback){
        connection.query('', callback);
    }
    this.salvarMotorista = function(motorista, connection, callback){
        connection.query('', callback);
    }

    return this;
}