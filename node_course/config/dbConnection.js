var mysql = require('mysql');
var connMysql=function(){    
    console.log('conexao estabelecida')
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node_course'
    });
   
}

module.exports = function(){
    return connMysql
}