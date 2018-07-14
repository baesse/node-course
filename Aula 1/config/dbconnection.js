module.exports=function(){
    
    var mysql=require('mysql');
    var connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'node_course'
    })
    return connection
}