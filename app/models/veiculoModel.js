function Veiculo(connetion){
    this._connection = connetion;
}

Veiculo.prototype.getVeiculos = function(callback){
    this._connetion.query('', callback);
}

Veiculo.prototype.getVeiculo = function(callback){
    this._connetion.query('', callback);
}

Veiculo.prototype.salvarVeiculo = function(veiculo, callback){
    this._connetion.query(''+veiculo, callback);
}

module.exports = function(){
    return Veiculo;
}