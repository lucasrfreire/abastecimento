module.exports = function(){
    this.getLancamentos = function(connection, callback){
        connection.query('', callback);
    }

    this.getLancamento = function(connection, callback){
        connection.query('', callback);
    }

    this.salvarLancamento = function(lancamento, connection, callback){
        connection.query('', callback);
    }

    return this;
}