function PostosDAO(connModelection){
    this._connection = connection;
}

PostosDAO.prototype.getPostos = function(callback){
    this._connection.query('', callback);
}

PostosDAO.prototype.getPosto = function(callback){
    this._connection.query('', callback);
}

PostosDAO.prototype.salvarPosto = function(posto, callback){
    this._connection.query('',callback);
}

module.exports = function(){
    return PostosDAO;
}