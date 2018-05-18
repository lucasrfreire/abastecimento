function Veiculo(){

}

Veiculo.prototype.getVeiculos = function(connetion, callback){
    connetion.query('', callback);
}

Veiculo.prototype.getVeiculo = function(connetion, callback){
    connetion.query('', callback);
}

Veiculo.prototype.salvarVeiculo = function(veiculo, connetion, callback){
    connetion.query(''+veiculo, callback);
}

module.exports = function(){
    return Veiculo;
}