var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'node_course'
	});
}

module.exports = function () {
	return connMySQL;
}