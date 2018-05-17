module.exports = function(){

    this.getPostos = function(connection, callback){
        connection.query('', callback);
    }
    this.getPosto = function(connection, callback){
        connection.query('', callback);
    }
    this.salvarPosto = function(posto, connection, callback){
        connection.query('',callback);
    }

    return this;
}