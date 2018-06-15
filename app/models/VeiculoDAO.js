import { funcionario } from "../controllers/funcionario";

function VeiculoDAO(connetion){
    this._connection = connetion;
}

VeiculoDAO.prototype.getVeiculos = function(callback){
    this._connetion.query('select * from veiculo order by id desc', callback);
}

VeiculoDAO.prototype.getVeiculo = function(callback){
    this._connetion.query('select * from veiculo where codigo = 1', callback);
}

VeiculoDAO.prototype.salvarVeiculo = function(veiculo, callback){
    this._connetion.query('insert into veiculo set ?'+veiculo, callback);
}

VeiculoDAO.prototype.deletarVeiculo = function(codigo, callback){
    this._connection.query('delete from veiculo where codigo = '+codigo.codigo, callback);
}

module.exports = function(){
    return VeiculoDAO;
}