function VeiculoDAO(connetion){
    this._connection = connetion;
}

VeiculoDAO.prototype.getVeiculos = function(callback){
    this._connetion.query('', callback);
}

VeiculoDAO.prototype.getVeiculo = function(callback){
    this._connetion.query('', callback);
}

VeiculoDAO.prototype.salvarVeiculo = function(veiculo, callback){
    this._connetion.query(''+veiculo, callback);
}

module.exports = function(){
    return VeiculoDAO;
}