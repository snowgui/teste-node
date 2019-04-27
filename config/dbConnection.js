var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexao com MySQL estabelecida com sucesso.');
    return mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'portal_noticias'
    });
}

module.exports = function(){
    console.log('Autoload carregou o módulo de conexao com o MySQL.')
    return connMySQL;
  
}