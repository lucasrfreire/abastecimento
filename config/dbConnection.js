var mysql = require('mysql');

//variavel feita para evitar que se crie uma nova conexão com o banco no autoload
var connMySQL = function(){
    console.log('Conexão com o banco foi estabelecida');
    return connection = mysql.createConnection({
        host: '192.168.0.107',
        user: 'aplicacao',
        password: 'senhabanco',
        database: 'abastecimento'
    });
}

module.exports = function () {
    console.log('o autoload carregou o modulo de conexão com o banco');
    return connMySQL;
}
